define(function (require, exports, module) {
	return (module.exports = {
		template: {
			default: "マインドマッピング",
			tianpan: "天盤図",
			structure: "組織図",
			filetree: "ディレクトリ組織図",
			right: "論理構造図",
			"fish-bone": "魚の骨の図",
		},
		export: {
			txt1: "輸出",
			txt2: "輸入",
		},
		theme: {
			classic: "マインドマップクラシック",
			"classic-compact": "コンパクトかつクラシック",
			snow: "優しい冷たい光",
			"snow-compact": "コンパクトな発光",
			fish: "特性要因図",
			wire: "ワイヤーフレーム",
			"fresh-red": "新鮮な赤",
			"fresh-soil": "アースイエロー",
			"fresh-green": "文学的な緑",
			"fresh-blue": "空色",
			"fresh-purple": "ロマンチックな紫",
			"fresh-pink": "頭の悪いファン",
			"fresh-red-compat": "コンパクトレッド",
			"fresh-soil-compat": "コンパクトイエロー",
			"fresh-green-compat": "コンパクトグリーン",
			"fresh-blue-compat": "コンパクトブルー",
			"fresh-purple-compat": "コンパクトパープル",
			"fresh-pink-compat": "コンパクトパウダー",
			tianpan: "クラシックなスカイディスク",
			"tianpan-compact": "コンパクトな屋根",
		},
		maintopic: "中心テーマ",
		topic: "ブランチトピック",
		panels: {
			history: "歴史",
			template: "テンプレート",
			theme: "肌",
			layout: "レイアウト",
			style: "スタイル",
			font: "文字",
			color: "色",
			background: "背景",
			insert: "入れる",
			arrange: "調整",
			nodeop: "現在",
			priority: "優先度",
			progress: "スケジュール",
			resource: "リソース",
			note: "述べる",
			attachment: "付録",
			word: "文字",
		},
		ui: {
			command: {
				appendsiblingnode: "兄弟トピックを挿入",
				appendparentnode: "親トピックを挿入",
				appendchildnode: "下位トピックを挿入",
				removenode: "消去",
				editnode: "編集",
				arrangeup: "上に移動",
				arrangedown: "下に移動",
				resetlayout: "レイアウトを整理する",
				expandtoleaf: "すべてのノードを展開する",
				expandtolevel1: "最初のレベルのノードに展開します",
				expandtolevel2: "セカンダリノードに展開",
				expandtolevel3: "第 3 レベルのノードに展開",
				expandtolevel4: "レベル 4 ノードに拡張",
				expandtolevel5: "レベル 5 ノードに拡張",
				expandtolevel6: "レベル 6 ノードに拡張",
				fullscreen: "全画面表示",
				outline: "概要",
			},
			search: "検索",
			expandtoleaf: "拡大する",
			back: "戻る",
			undo: "元に戻す (Ctrl + Z)",
			redo: "やり直し (Ctrl + Y)",
			tabs: {
				idea: "アイデア",
				appearence: "外観",
				view: "ビュー",
				"export&import": "輸出入",
			},
			bold: "大胆な",
			italic: "イタリック体",
			forecolor: "フォントの色",
			fontfamily: "フォント",
			fontsize: "フォントサイズ",
			layoutstyle: "テーマ",
			node: "ノードの操作",
			hand: "ドラッグを許可する",
			camera: "ルートノードを見つけます",
			"zoom-in": "ズームイン (Ctrl+)",
			"zoom-out": "ズームアウト (Ctrl-)",
			markers: "ラベル",
			help: "ヘルプ",
			preference: "環境設定",
			expandnode: "葉まで展開する",
			collapsenode: "最初のレベルのノードに折りたたむ",
			template: "テンプレート",
			theme: "肌",
			clearstyle: "クリアスタイル",
			copystyle: "コピースタイル",
			pastestyle: "スタイルの貼り付け",
			appendsiblingnode: "類似のトピック",
			appendchildnode: "サブトピック",
			arrangeup: "トップノート",
			arrangedown: "バックトーン",
			editnode: "編集",
			removenode: "取り除く",
			priority: "優先度",
			progress: {
				p1: "始まっていません",
				p2: "1/8完成",
				p3: "1/4完成",
				p4: "3/8完成",
				p5: "半分終わった",
				p6: "5/8完成",
				p7: "3/4を完了",
				p8: "7/8完成",
				p9: "完了しました",
				p0: "明確な進捗状況",
			},
			resource: {
				add: "に追加",
			},
			link: "リンク",
			image: "写真",
			note: "述べる",
			insertlink: "リンクを挿入",
			insertimage: "画像の挿入",
			insertnote: "メモを挿入する",
			removelink: "既存のリンクを削除する",
			removeimage: "既存のイメージを削除する",
			removenote: "既存のメモを削除する",
			resetlayout: "きちんとした",
			navigator: "ナビゲーター",
			selectall: "すべて選択",
			selectrevert: "反選挙",
			selectsiblings: "兄弟ノードを選択してください",
			selectlevel: "兄弟ノードの選択",
			selectpath: "パスの選択",
			selecttree: "サブツリーの選択",
			noteeditor: {
				title: "述べる",
				hint: "GFM 構文記述のサポート",
				placeholder: "ノートを編集するノードを選択してください",
			},
			dialog: {
				image: {
					title: "写真",
					imagesearch: "画像検索",
					keyword: "キーワード:",
					placeholder: "検索キーワードを入力してください",
					baidu: "百度",
					linkimage: "外部リンクの写真",
					linkurl: "リンクアドレス:",
					placeholder2: "必須: http(s): // で始まる",
					imagehint: "プロンプトテキスト:",
					placeholder3:
						"オプション: 画像上にマウスを置いたときにプロンプトが表示されるテキスト",
					preview: "画像プレビュー:",
					uploadimage: "画像をアップロードする",
					selectfile: "ドキュメントを選択してください...",
					ok: "もちろん",
					cancel: "キャンセル",
					formatinfo: "接尾辞はjpg、gif、pngのみです",
				},
				hyperlink: {
					title: "リンク",
					linkurl: "リンクアドレス:",
					linkhint: "プロンプトテキスト:",
					placeholder: "必須: http(s):// または ftp:// で始まります",
					placeholder2:
						"オプション: リンク上にマウスを置いたときにプロンプトを表示するテキスト",
					ok: "もちろん",
					cancel: "キャンセル",
				},
				exportnode: {
					title: "エクスポートノード",
					ok: "もちろん",
					cancel: "キャンセル",
				},
			},
		},
		runtime: {
			minder: {
				maintopic: "中心テーマ",
			},
			node: {
				arrangeup: "前進する",
				appendchildnode: "下位",
				appendsiblingnode: "同じレベル",
				arrangedown: "戻ってくる",
				removenode: "消去",
				appendparentnode: "優れた",
				selectall: "すべて選択",
				topic: "ブランチトピック",
				importnode: "インポートノード",
				exportnode: "エクスポートノード",
			},
			input: {
				edit: "編集",
			},
			priority: {
				main: "優先度",
				remove: "取り除く",
				esc: "戻る",
			},
			progress: {
				main: "スケジュール",
				remove: "取り除く",
				esc: "戻る",
			},
			history: {
				undo: "キャンセル",
				redo: "やり直し",
			},
		},
	});
});
