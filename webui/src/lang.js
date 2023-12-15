define(function (require, exports, module) {
	var langList = {
		en: require("../l10n/en"),
		cs: require("../l10n/cs"),
		hu: require("../l10n/hu"),
		ja: require("../l10n/ja"),
		ko: require("../l10n/ko"),
		pl: require("../l10n/pl"),
		pt: require("../l10n/pt"),
		ru: require("../l10n/ru"),
		de: require("../l10n/de"),
		es: require("../l10n/es"),
		fr: require("../l10n/fr"),
		it: require("../l10n/it"),
		"zh-cn": require("../l10n/zh_CN"),
		"zh-tw": require("../l10n/zh_TW"),
	};
	var defaultLang = "en";
	function lang(text, block, lang) {
		if (lang === undefined) {
			lang = defaultLang;
		}
		var dict = langList[lang];
		if (dict === undefined) {
			dict = langList["en"];
		}
		block.split("/").forEach(function (ele, idx) {
			dict = dict[ele];
		});

		if (dict === undefined || dict === null) {
			return text;
		}

		return dict[text] || text;
	}

	return (module.exports = {
		setDefaultLang: function (lang) {
			if (langList[lang] !== undefined) {
				defaultLang = lang;
				return true;
			}
			return false;
		},
		t: lang,
	});
});
