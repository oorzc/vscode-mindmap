/**
 * initial kityminder-editor
 */
angular
	.module("kityminderDemo", ["kityminderEditor"])
	.config(function (configProvider) {
		let state = window.vscode.getState();
		if (state.lang) {
			configProvider.set("lang", state.lang);
		}
		if (state.upload_url) {
			configProvider.set("imageUpload", state.upload_url);
		}
	})
	.controller("MainController", function ($scope) {
		function listenContentChange() {
			if (listenContentChange.listened) return;
			window.minder.on("contentchange", (e) => {
				if (window.fileExtName === ".svg") {
					window.minder.exportData("svg").then((data) => {
						window.vscode.postMessage({
							command: "draft",
							exportData: data,
						});
					});
				} else {
					window.vscode.postMessage({
						command: "draft",
						exportData: JSON.stringify(window.minder.exportJson(), null, 4),
					});
				}
			});
			listenContentChange.listened = true;
		}
		$scope.initEditor = function (editor, minder) {
			window.editor = editor;
			window.minder = minder;

			/**
			 * receive message event from extension
			 */
			window.addEventListener("message", function (event) {
				window.message = event.data;
				const { command, extName } = window.message;
				window.fileExtName = extName;

				switch (command) {
					case "import": {
						let importTask = Promise.resolve();
						try {
							importTask = importTask.then(() => {
								const importData = window.message.importData;
								if (extName === ".svg") {
									return new Promise((resolve) => {
										// 可能出现格式不正确内部抛异常
										window.minder
											.importData("svg", importData)
											.then(resolve, resolve);
									});
								} else {
									// 可能出现格式不正确内部抛异常
									window.minder.importJson(
										JSON.parse(importData || "{}")
									);
								}
							});
						} catch (ex) {
							console.error(ex);
						}
						importTask.then(listenContentChange, listenContentChange);
						break;
					}
				}
			});

			window.addEventListener("keydown", (e) => {
				const keyCode = e.keyCode || e.which || e.charCode;
				const ctrlKey = e.ctrlKey || e.metaKey;
				if (ctrlKey && keyCode === 83) {
					window.vscode.postMessage({
						command: "save",
						exportData: JSON.stringify(window.minder.exportJson(), null, 4),
					});
				}
			});

			window.minder.on("click", (e) => {
				try {
					const link = e.minder.queryCommandValue("HyperLink");
					if (
						link &&
						link.url &&
						e.kityEvent.targetShape.container.getType() === "HyperLink"
					) {
						window.vscode.postMessage({
							command: "clicklink",
							link: link.url,
						});
					}
					// 捕获不到markdown中的链接点击,可能监听window可以做到
				} catch (e) {}
			});

			window.vscode.postMessage({
				command: "loaded",
			});
		};
	});

(function () {
	$(document).on("click", ".nav-tabs a", function (event) {
		event.preventDefault();
	});

	$(document).on("click", ".export", function (event) {
		event.preventDefault();
		var $this = $(this),
			type = $this.data("type"),
			exportType;
		switch (type) {
			case "km":
				exportType = "json";
				break;
			case "xmind":
				exportType = "json";
				break;
			case "md":
				exportType = "markdown";
				break;
			case "svg":
				exportType = "svg";
				break;
			case "txt":
				exportType = "text";
				break;
			case "png":
				exportType = "svg";
				break;
			default:
				exportType = type;
				break;
		}

		editor.minder.exportData(exportType).then(function (content) {
			window.vscode.postMessage({
				command: "export",
				filename: $("#node_text1").text(),
				type: type,
				content,
			});
		});
	});

	// 导入
	$(document).on("click", ".import", function (event) {
		window.vscode.postMessage({
			command: "importFile",
		});
	});

	window.addEventListener("message", function (event) {
		let command = event.data.command;
		let content = event.data.content;
		let basename = event.data.basename;

		if (command == "importNewData") {
			var fileType = "";
			switch (basename) {
				case ".md":
					fileType = "markdown";
					break;
				case ".txt":
					fileType = "text";
					break;
				case ".km":
				case ".json":
					fileType = "json";
					break;
				case ".xmind":
					fileType = "json";
					break;
				default:
					fileType = "";
					break;
			}
			if (typeof content != "string") {
				content = JSON.stringify(content);
			}
			fileType &&
				editor.minder.importData(fileType, content).then(function (data) {
					var fileInput = document.getElementById("fileInput");
					fileInput && $(fileInput).val("");
				});
		}
	});
})();

//base64转换为图片blob
function dataURLtoBlob(dataurl) {
	var arr = dataurl.split(",");
	//注意base64的最后面中括号和引号是不转译的
	var _arr = arr[1].substring(0, arr[1].length - 2);
	var mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(_arr),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {
		type: mime,
	});
}
