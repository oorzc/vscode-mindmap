define(function (require, exports, module) {
	return (module.exports = {
		template: {
			default: "mind Mapping",
			tianpan: "Tianpan diagram",
			structure: "Szervezeti ábra",
			filetree: "Címtár Szervezeti diagram",
			right: "Logikai szerkezeti diagram",
			"fish-bone": "halcsont diagram",
		},
		export: {
			txt1: "Export",
			txt2: "import",
		},
		theme: {
			classic: "Gondolattérkép klasszikus",
			"classic-compact": "Kompakt és klasszikus",
			snow: "Gyengéd hideg fény",
			"snow-compact": "Kompakt lumineszcencia",
			fish: "Halcsont diagram",
			wire: "Drótkeret",
			"fresh-red": "friss piros",
			"fresh-soil": "Földes sárga",
			"fresh-green": "Irodalmi zöld",
			"fresh-blue": "égszínkék",
			"fresh-purple": "romantikus lila",
			"fresh-pink": "Agyatlan rajongók",
			"fresh-red-compat": "kompakt vörös",
			"fresh-soil-compat": "kompakt sárga",
			"fresh-green-compat": "kompakt zöld",
			"fresh-blue-compat": "kompakt kék",
			"fresh-purple-compat": "kompakt lila",
			"fresh-pink-compat": "kompakt púder",
			tianpan: "Klasszikus égbolt lemez",
			"tianpan-compact": "Kompakt tető",
		},
		maintopic: "központi téma",
		topic: "ág témája",
		panels: {
			history: "történelem",
			template: "sablon",
			theme: "bőr",
			layout: "elrendezés",
			style: "stílus",
			font: "levél",
			color: "szín",
			background: "háttér",
			insert: "betét",
			arrange: "Beállítás",
			nodeop: "jelenlegi",
			priority: "kiemelten fontos",
			progress: "menetrend",
			resource: "forrás",
			note: "Megjegyzés",
			attachment: "függelék",
			word: "levél",
		},
		ui: {
			command: {
				appendsiblingnode: "Testvér téma beszúrása",
				appendparentnode: "Szülőtéma beszúrása",
				appendchildnode: "Alárendelt téma beszúrása",
				removenode: "töröl",
				editnode: "szerkeszteni",
				arrangeup: "Lépj felfelé",
				arrangedown: "mozogni lefelé",
				resetlayout: "Szervezze meg az elrendezést",
				expandtoleaf: "Bontsa ki az összes csomópontot",
				expandtolevel1: "Bontsa ki az első szintű csomópontra",
				expandtolevel2: "Kibontás másodlagos csomópontra",
				expandtolevel3: "Bővítse ki a harmadik szintű csomópontokra",
				expandtolevel4: "Bontsa ki a 4. szintű csomópontokra",
				expandtolevel5: "Bontsa ki az ötödik szintű csomópontokra",
				expandtolevel6: "Bontsa ki a hatodik szintű csomópontokra",
				fullscreen: "Teljes képernyő",
				outline: "vázlat",
			},
			search: "keresés",
			expandtoleaf: "Kiterjed",
			back: "Visszatérés",
			undo: "Visszavonás (Ctrl + Z)",
			redo: "Újra (Ctrl + Y)",
			tabs: {
				idea: "Ötletek",
				appearence: "Külső",
				view: "Kilátás",
				"export&import": "Export Import",
			},
			bold: "Bátor",
			italic: "dőlt betűvel",
			forecolor: "betű szín",
			fontfamily: "betűtípus",
			fontsize: "Betűméret",
			layoutstyle: "téma",
			node: "Csomóponti műveletek",
			hand: "Húzás engedélyezése",
			camera: "Keresse meg a gyökércsomópontot",
			"zoom-in": "Nagyítás (Ctrl+)",
			"zoom-out": "Kicsinyítés (Ctrl-)",
			markers: "Címke",
			help: "Segítség",
			preference: "preferenciák",
			expandnode: "levelekre terjeszkedik",
			collapsenode: "Összecsukása az első szintű csomópontra",
			template: "sablon",
			theme: "bőr",
			clearstyle: "tiszta stílus",
			copystyle: "másolási stílus",
			pastestyle: "Beillesztés stílus",
			appendsiblingnode: "Hasonló témák",
			appendchildnode: "Altéma",
			arrangeup: "Felső jegyek",
			arrangedown: "Hátsó hang",
			editnode: "szerkeszteni",
			removenode: "Távolítsa el",
			priority: "kiemelten fontos",
			progress: {
				p1: "nem indult el",
				p2: "Teljes 1/8",
				p3: "1/4 kész",
				p4: "Elkészült 3/8",
				p5: "Félig kész",
				p6: "5/8-án elkészült",
				p7: "Teljes 3/4",
				p8: "7/8-án elkészült",
				p9: "elkészült",
				p0: "egyértelmű haladás",
			},
			resource: {
				add: "Hozzáadás",
			},
			link: "Link",
			image: "kép",
			note: "Megjegyzés",
			insertlink: "Link beszúrása",
			insertimage: "Kép beszúrása",
			insertnote: "Jegyzetek beszúrása",
			removelink: "Meglévő link eltávolítása",
			removeimage: "Távolítsa el a meglévő képeket",
			removenote: "Távolítsa el a meglévő jegyzeteket",
			resetlayout: "takaros",
			navigator: "Navigátor",
			selectall: "mindet kiválaszt",
			selectrevert: "Ellenválasztás",
			selectsiblings: "Válassza ki a testvér csomópontot",
			selectlevel: "Válasszon testvércsomópontokat",
			selectpath: "Válassza ki az elérési utat",
			selecttree: "Válassza ki a részfát",
			noteeditor: {
				title: "Megjegyzés",
				hint: "Támogatja a GFM szintaxis írását",
				placeholder:
					"Kérjük, válassza ki a csomópontot a jegyzetek szerkesztéséhez",
			},
			dialog: {
				image: {
					title: "kép",
					imagesearch: "Képkeresés",
					keyword: "Kulcsszavak:",
					placeholder: "Kérjük, adja meg a keresési kulcsszavakat",
					baidu: "Baidu",
					linkimage: "Külső link képek",
					linkurl: "link címe:",
					placeholder2: "Kötelező: http-vel kezdődik: //",
					imagehint: "Prompt szöveg:",
					placeholder3:
						"Nem kötelező: szöveg, amely akkor jelenik meg, amikor az egérmutatót a kép fölé viszi",
					preview: "Kép előnézet:",
					uploadimage: "kép feltöltése",
					selectfile: "Válasszon ki egy dokumentumot...",
					ok: "biztos",
					cancel: "Megszünteti",
					formatinfo: "Az utótag csak jpg, gif és png lehet",
				},
				hyperlink: {
					title: "Link",
					linkurl: "link címe:",
					linkhint: "Prompt szöveg:",
					placeholder: "Kötelező: http(-ekkel) kezdődik: // vagy ftp://",
					placeholder2:
						"Választható: Szöveg, amely kéri, ha az egérmutatót a hivatkozás fölé viszi",
					ok: "biztos",
					cancel: "Megszünteti",
				},
				exportnode: {
					title: "export csomópont",
					ok: "biztos",
					cancel: "Megszünteti",
				},
			},
		},
		runtime: {
			minder: {
				maintopic: "központi téma",
			},
			node: {
				arrangeup: "menj tovább",
				appendchildnode: "alárendelt",
				appendsiblingnode: "Ugyanaz a szint",
				arrangedown: "hátrál",
				removenode: "töröl",
				appendparentnode: "kiváló",
				selectall: "mindet kiválaszt",
				topic: "ág témája",
				importnode: "Csomópont importálása",
				exportnode: "export csomópont",
			},
			input: {
				edit: "szerkeszteni",
			},
			priority: {
				main: "kiemelten fontos",
				remove: "Távolítsa el",
				esc: "Visszatérés",
			},
			progress: {
				main: "menetrend",
				remove: "Távolítsa el",
				esc: "Visszatérés",
			},
			history: {
				undo: "Megszünteti",
				redo: "Újra",
			},
		},
	});
});