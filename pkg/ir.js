class CommonRepr {

	static params = {
		model: {
			M_114C: "114C",
			M_D01: "D01",
			M_0096: "0096",
			M_UNKNOWN: "unknown"
		},
		dimUnit: {
			MM: "mm",
			INCH: "inch"
		},
		mountType: {
			THR:         "threaded",
			FLANGE:      "flange",
			VAN_STONE:   "van stone",
			SOCKET_WELD: "socket weld", 
			WELD_IN:     "weld-in",  // including DIN 43772
		},
		flangeType: {
			FULL_WELD: "full",
			PART_WELD: "partial",
			THREDED:   "threaded",
			FORGING:   "forging",
		},
		thread: {
			tapered: {
				ANPT05:  "1/2-14 ANPT",
				ANPT075: "3/4-14 ANPT",
				ANPT1:   "1-11.5 ANPT",
				API05:   "1/2 API",
				API075:  "3/4 API",
				API1:    "1 API",
				BSPT05:  "R1/2",
				BSPT075: "R3/4",
				BSPT1:   "R1",
				NPT075:  "3/4-14 NPT",
			},
			parallel: {
				BSPF05:  "G1/2",
				BSPF075: "G3/4",
				BSPF1:   "G1",
				M18x15:  "M18x1,5",
				M20x15:  "M20x1,5",
				M22x15:  "M22x1,5",
				M24x15:  "M24x1,5",
				M24x2:   "M24x2",
				M27x15:  "M27x1,5",
				M27x2:   "M27x2",
				M33x2:   "M33x2",
				NPSM05:  "1/2-14 NPSM",
			}
		},
		stemStyle: {
			STEPPED:  "stepped",
			STRAIGHT: "straight",
			TAPERED:  "tapered",
		},
		material: {
			SST_304: "304",
			SST_304L: "304L",
			SST_304_PTFE: "304 w/Teflon coat",
			SST_310: "310",
			SST_316: "316",
			SST_316L: "316L",
			SST_316_316L_NORSOK: "316/316L NORSOK",
			SST_316_316L_PFA: "316/316L w/PFA coat",
			SST_316_TANTALUM: "316 w/tantalum sheath",
			SST_316L_TANTALUM: "316 w/tantalum sheath",
			SST_316Ti: "316Ti",
			SST_321: "321",
			SST_321H: "321H",
			SST_347: "347",
			SST_904L: "904L",
			alloy20: "alloy 20",
			alloy400: "alloy 400",
			alloy400_SST304: "stem: alloy 400, flange: 304",
			alloy600: "alloy 600",
			alloy600_SST304: "stem: alloy 600, flange: 304",
			alloy601: "alloy 601",
			alloy625: "alloy 625",
			alloy800: "alloy 800",
			alloy800H_HT: "alloy 800H/HT",
			alloy825: "alloy 825",
			alloyB: "alloy B",
			alloyB3: "alloy B3",
			alloyC22: "alloy C-22",
			alloyC22_SST304: "stem: alloy C-22, flange: 304",
			alloyC22_SST316: "stem: alloy C-22, flange: 316",
			alloyС276: "alloy С-276",
			alloyС4: "alloy С-4",
			alloyС4_SST304: "stem: alloy C-4, flange: 304",
			alloyF44Mo6: "alloy F44 Mo6",
			carbon: "carbon steel",
			CrMo_B11_F11: "stem: CrMo B11, flange: CrMo F11",
			CrMo_B22_F22: "stem: CrMo B22, flange: CrMo F22",
			CrMo_F91: "CrMo F-91",
			duplex2205: "duplex 2205",
			duplex2205_NORSOK: "duplex 2205 NORSOK",
			Mo: "molybdenum",
			Ni: "nickel 200",
			superDuplex: "super duplex",
			superDuplex_NORSOK: "super duplex NORSOK",
			spicial: "special",
			Ti: "titan grade 2",
		}
	}

	static build(parsedObj) {

	}
}

module.exports = CommonRepr;