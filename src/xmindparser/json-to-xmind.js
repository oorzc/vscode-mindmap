const path = require("path");
const xmind = require("xmind");
const library = Object.keys(xmind).length ? xmind : window;
const { Workbook, Topic, Marker, Zipper } = library;
const [workbook, marker] = [new Workbook(), new Marker()];
const utils = require("./utils");
const base64 = require("base64-js");

class parser extends utils {
	async JSONToXmind(res = {}, filePath = "") {
		try {
			if (!filePath) {
				return;
			}
			//任务进度
			const { root = {} } = res;
			const { data } = root;
			const { text, id } = data || {};
			const sheetTitle = super.guid();
			const topic = new Topic({ sheet: workbook.createSheet(sheetTitle, text) });
			let filename = path.basename(filePath);
			let dirname = path.dirname(filePath);
			const zipper = new Zipper({
				path: dirname,
				workbook: workbook,
				filename: filename,
			});

			//添加优先级
			this.setMarker(topic, data);
			//children数据数组转换
			const list = this.treeShapeToObj(root.children, id);
			//cid记录层次，避免层次不对
			const cidData = {};
			// 手动写入xmind数据
			const addData = async (index = 0) => {
				const res = list[index];
				if (!res) return;
				const { id, text } = res.data;
				topic.on(cidData[res.parentId]);
				cidData[id] = topic.add({ title: text }).cid();
				this.setMarker(topic, res.data, cidData[id]);

				if (res.data.image) {
					if (/^(http|https):\/\/[^\s/$.?#].[^\s]*$/i.test(res.data.image)) {
						try {
							const readFile = require("./readFile");
							let buffer = await new readFile().requestFile(res.data.image);
							const imageKey = topic.on(cidData[id]).image();
							await zipper.updateManifestMetadata(imageKey, buffer);
						} catch (error) {
							console.log(error);
						}
					} else if (
						/^data:image\/[a-z]+;base64,([A-Za-z0-9+/=])+$/.test(
							res.data.image
						)
					) {
						const buffer = await this.base64ToBuffer(res.data.image);
						const imageKey = topic.on(cidData[id]).image();
						await zipper.updateManifestMetadata(imageKey, buffer);
					}
				}
				await addData(++index);
			};
			await addData();
			const status = await zipper.save();
			return Promise.resolve(status);
		} catch (e) {
			return Promise.reject(e);
		}
	}

	// 将 base64 图片转换为 Buffer 对象
	base64ToBuffer(base64String) {
		return new Promise((resolve, reject) => {
			// 去除 base64 字符串中的前缀（例如：data:image/png;base64,）
			const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");
			// 将 base64 字符串转换为字节数组
			const byteArray = base64.toByteArray(base64Data);
			// 创建 Buffer 对象
			const buffer = Buffer.from(byteArray);
			resolve(buffer);
		});
	}

	// 树形结构转数组
	treeShapeToObj(child = [], parentId = super.guid()) {
		return child.reduce((arr, res) => {
			const { children, data } = res;
			if (!data.id) data.id = super.guid();
			return arr.concat(
				[{ data, parentId }],
				this.treeShapeToObj(children, data.id)
			);
		}, []);
	}

	//设置额外的标记属性，如链接，图片，进度等
	setMarker(topic, data, cid) {
		const { priority, progress, note } = data;
		topic
			.on(cid)
			.marker(marker.priority(priority))
			//任务进度
			.marker(marker.task(this.task[progress - 1]))
			//添加备注
			.note(note);
	}
}

module.exports = parser;
