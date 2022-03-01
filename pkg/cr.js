class CommonRepr {

	static params = {
		model: {
			M_114C: "114C",
			M_D01: "D01",
			M_0096: "0096",
		},
		dimUnit: {
			MM: "mm",
			INCH: "inch",
		},
		mountType: {
			THREADED:    "threaded",
			FLANGE:      "flange",
			VAN_STONE:   "van stone",
			SOCKET_WELD: "socket weld", 
			WELD_IN:     "weld-in",  // including DIN 43772
		},
		mountFlange: {
			type: {
				FULL_WELD: "full",
				PART_WELD: "partial",
				THREADED:  "threaded",
				FORGING:   "forging",
			},
			size: {
				ASME: {
					D1_CLASS150:  '1" class 150',
					D15_CLASS150: '1,5" class 150',
					D2_CLASS150:  '2" class 150',
					D3_CLASS150:  '3" class 150',
					D4_CLASS150:  '4" class 150',
					D6_CLASS150:  '6" class 150',
					D075_CLASS300:  '3/4" class 300',
					D1_CLASS300:    '1" class 300',
					D15_CLASS300:   '1,5" class 300',
					D2_CLASS300:    '2" class 300',
					D1_CLASS400_600:  '1" class 400/600',
					D15_CLASS400_600: '1,5" class 400/600',
					D2_CLASS400_600:  '2" class 400/600',
					D1_CLASS900_1500:  '1" class 900/1500',
					D15_CLASS900_1500: '1,5" class 900/1500',
					D2_CLASS900_1500:  '2" class 900/1500',
					D1_CLASS2500:  '1" class 2500',
					D15_CLASS2500: '1,5" class 2500',
					D2_CLASS2500:  '2" class 2500',
					D3_CLASS300:      '3" class 300',
					D3_CLASS400_600:  '3" class 400/600',
					D3_CLASS900:      '3" class 900',
					D3_CLASS1500:     '3" class 1500',
					D3_CLASS2500:     '3" class 2500',
				},
				DIN: {
					DN20PN25_6: "DN 20 PN 2.5/6",
					DN20PN10_40: "DN 20 PN 10/16/25/40",
					DN20PN63_100: "DN 20 PN 63/100",

					DN25PN25_6: "DN 25 PN 2.5/6",
					DN25PN10_40: "DN 25 PN 10/16/25/40",
					DN25PN63_100: "DN 25 PN 63/100",
					// DN25PN160: "DN 25 PN 160", // absent since rev.AS
					// DN25PN250: "DN 25 PN 250", // absent since rev.AS
					// DN25PN320: "DN 25 PN 320", // absent since rev.AS
					// DN25PN400: "DN 25 PN 400", // absent since rev.AS

					DN40PN25_6: "DN 40 PN 2.5/6",
					DN40PN10_40: "DN 40 PN 10/16/25/40",
					DN40PN63_100: "DN 40 PN 63/100",
					// DN40PN160: "DN 40 PN 160", // absent since rev.AS
					// DN40PN250: "DN 40 PN 250", // absent since rev.AS
					// DN40PN320: "DN 40 PN 320", // absent since rev.AS
					// DN40PN400: "DN 40 PN 400", // absent since rev.AS

					DN50PN25_6: "DN 50 PN 2.5/6",
					DN50PN10_16: "DN 50 PN 10/16",
					DN50PN25_40: "DN 50 PN 25/40",
					DN50PN63:  "DN 50 PN 63",
					// DN50PN100: "DN 50 PN 100", // absent since rev.AS
					// DN50PN160: "DN 50 PN 160", // absent since rev.AS
					// DN50PN250: "DN 50 PN 250", // absent since rev.AS
					// DN50PN320: "DN 50 PN 320", // absent since rev.AS
					// DN50PN400: "DN 50 PN 400", // absent since rev.AS

					DN65PN25_6: "DN 65 PN 2.5/6",
					DN65PN10_16: "DN 65 PN 10/16",
					DN65PN25_40: "DN 65 PN 25/40",
					DN65PN63:  "DN 65 PN 63",
					DN65PN100: "DN 65 PN 100",
					// DN65PN160: "DN 65 PN 160", // absent since rev.AS
					// DN65PN250: "DN 65 PN 250", // absent since rev.AS
					// DN65PN320: "DN 65 PN 320", // absent since rev.AS
					// DN65PN400: "DN 65 PN 400", // absent since rev.AS

					DN80PN25_6: "DN 80 PN 2.5/6",
					DN80PN10_16: "DN 80 PN 10/16",
					DN80PN25_40: "DN 80 PN 25/40",
					DN80PN63:  "DN 80 PN 63",
					DN80PN100: "DN 80 PN 100",
					// DN80PN160: "DN 80 PN 160", // absent since rev.AS
					// DN80PN250: "DN 80 PN 250", // absent since rev.AS
					// DN80PN320: "DN 80 PN 320", // absent since rev.AS
					// DN80PN400: "DN 80 PN 400", // absent since rev.AS

					DN100PN25_6: "DN 100 PN 2.5/6",
					DN100PN10_16: "DN 100 PN 10/16",
					DN100PN25_40: "DN 100 PN 25/40",
					DN100PN63:  "DN 100 PN 63",
					// DN100PN100: "DN 100 PN 100",
					// DN100PN160: "DN 100 PN 160", // absent since rev.AS
					// DN100PN250: "DN 100 PN 250", // absent since rev.AS
					// DN100PN320: "DN 100 PN 320", // absent since rev.AS
					// DN100PN400: "DN 100 PN 400", // absent since rev.AS
				}
			},
		},
		mountWeld: {
			pipeSizeInch: {
				D075: '3/4"',
				D1:   '1"',
				D125: '1 1/4"',
				D15:  '1 1/2"',
				CUSTOM: "custom",
			},
			pipeSizeDIN43772: {
				DIN_18: "18",
				DIN_24: "24",
				DIN_26_12: "26 tip D12,5",
				DIN_26_15: "26 tip D15",
				DIN_32: "32",
				CUSTOM: "custom",
			},
		},
		mountThread: {
			taperedThr: {
				ANPT05:  "1/2-14 ANPT",
				ANPT075: "3/4-14 ANPT",
				ANPT1:   "1-11.5 ANPT",
				ANPT15:  "1,5-11.5 ANPT",
				API05:   "1/2 API",
				API075:  "3/4 API",
				API1:    "1 API",
				BSPT05:  "R1/2",
				BSPT075: "R3/4",
				BSPT1:   "R1",
				NPT075:  "3/4-14 NPT",
			},
			parallelThr: {
				BSPF05:  "G1/2",
				BSPF075: "G3/4",
				BSPF1:   "G1",
				M14x15:  "M14x1,5",
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
			SST_304_304L: "304/304L",
			SST_304_PTFE: "304 with Teflon coat",
			SST_304L_PTFE: "304L with Teflon coat",
			SST_304_304L_PTFE: "304/304L with Teflon coat",
			SST_310: "310",
			SST_316: "316",
			SST_316L: "316L",
			SST_316_316L: "316/316L",
			SST_316L_PFA: "316L with PFA coat",
			SST_316_316L_PFA: "316/316L with PFA coat",
			SST_316_316L_NORSOK: "316/316L NORSOK",
			SST_316_TANTALUM: "316 with tantalum sheath",
			SST_316_316L_TANTALUM: "316/316L with tantalum sheath",
			SST_316Ti: "316Ti",
			SST_321: "321",
			SST_321H: "321H",
			SST_347: "347",
			SST_904L: "904L",
			alloy20: "alloy 20",
			alloy400: "alloy 400",
			alloy400_SST304: "alloy 400 & 304 (stem & flange)",
			alloy400_SST304_304L: "alloy 400 & 304/304L (stem & flange)",
			alloy600: "alloy 600",
			alloy600_SST304: "alloy 600 & 304 (stem & flange)",
			alloy600_SST304_304L: "alloy 600 & 304/304L (stem & flange)",
			alloy601: "alloy 601",
			alloy625: "alloy 625",
			alloy800: "alloy 800",
			alloy800H_800HT: "alloy 800H/800HT",
			alloy825: "alloy 825",
			alloyB: "alloy B",
			alloyB3: "alloy B3",
			alloyC22: "alloy C-22",
			alloyC22_SST304: "alloy C-22 & 304 (stem & flange)",
			alloyC22_SST304_304L: "alloy C-22 & 304/304L (stem & flange)",
			alloyC22_SST316L: "alloy C-22 & 316L (stem & flange)",
			alloyC22_SST316_316L: "alloy C-22 & 316/316L (stem & flange)",
			alloyС276: "alloy С-276",
			alloyС4_SST304: "alloy C-4 & 304 (stem & flange)",
			alloyС4_SST304_304L: "alloy C-4 & 304/304L (stem & flange)",
			alloyF44Mo6: "alloy F44 Mo6",
			carbon: "carbon steel",
			CrMo_B11_F11: "CrMo B11 & CrMo F11 (stem & flange)",
			CrMo_B22_F22: "CrMo B22 & CrMo F22 (stem & flange)",
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

	/**
	 * Build common representation object of parsed 114C order code.
	 * 
	 * @param  {object}  parsedObj  Parsed object.
	 * @return {object}  A common representation object.
	 */
	static represent114C(parsedObj) {
		const commonRepr = new this();

		commonRepr.options = parsedObj.options; // to-do

		commonRepr.model = this.params.model.M_114C;
		commonRepr.unit = this.decode.M_114C.unit(parsedObj.unit);
		commonRepr.immersionLen = +parsedObj.immerLen;
		commonRepr.type = this.decode.M_114C.type(parsedObj.mntTyp);
		commonRepr.options.flangeType = this.decode.M_114C.flangeType(parsedObj.mntTyp);
		commonRepr.procConn = this.decode.M_114C.procConn(commonRepr.type, parsedObj.procConn);
		commonRepr.stemStyle = this.decode.M_114C.stemStyle(parsedObj.stemStyle);
		commonRepr.material = this.decode.M_114C.material(parsedObj.material);
		commonRepr.headLen = +parsedObj.headLen;
		commonRepr.instrConn = this.decode.M_114C.instrConn(parsedObj.instrConn);
		return commonRepr;
	}

	static decode = {
		M_114C: {
			unit: (str) => ({
				M: this.params.dimUnit.MM,
				E: this.params.dimUnit.INCH,
			}[str]),

			type: (str) => ({
				T: this.params.mountType.THREADED,
				P: this.params.mountType.FLANGE,
				F: this.params.mountType.FLANGE,
				G: this.params.mountType.FLANGE,
				E: this.params.mountType.FLANGE,
				V: this.params.mountType.VAN_STONE,
				W: this.params.mountType.SOCKET_WELD,
				D: this.params.mountType.WELD_IN,
			}[str]),

			flangeType: (str) => ({
				P: this.params.mountFlange.type.PART_WELD,
				F: this.params.mountFlange.type.FULL_WELD,
				G: this.params.mountFlange.type.FORGING,
				E: this.params.mountFlange.type.THREADED,
			}[str]),

			procConnOfThreaded: (str) => ({
				AA: this.params.mountThread.taperedThr.ANPT05,
				AB: this.params.mountThread.taperedThr.ANPT075,
				AC: this.params.mountThread.taperedThr.ANPT1,
				AD: this.params.mountThread.taperedThr.ANPT15,
				AE: this.params.mountThread.taperedThr.BSPT05,
				AF: this.params.mountThread.taperedThr.BSPT075,
				AG: this.params.mountThread.taperedThr.BSPT1,
				DA: this.params.mountThread.parallelThr.M20x15,
				DB: this.params.mountThread.parallelThr.M24x15,
				DC: this.params.mountThread.parallelThr.M27x2,
				DD: this.params.mountThread.parallelThr.M33x2,
				DE: this.params.mountThread.parallelThr.BSPF05,
				DF: this.params.mountThread.parallelThr.BSPF075,
				DG: this.params.mountThread.parallelThr.BSPF1,
			}[str]),

			procConnOfFlange: (str) => ({
				AA: this.params.mountFlange.size.ASME.D1_CLASS150,
				AB: this.params.mountFlange.size.ASME.D15_CLASS150,
				AC: this.params.mountFlange.size.ASME.D2_CLASS150,
				AD: this.params.mountFlange.size.ASME.D3_CLASS150,
				AE: this.params.mountFlange.size.ASME.D4_CLASS150,
				AF: this.params.mountFlange.size.ASME.D6_CLASS150,
				AG: this.params.mountFlange.size.ASME.D075_CLASS300,
				AH: this.params.mountFlange.size.ASME.D1_CLASS300,
				AJ: this.params.mountFlange.size.ASME.D15_CLASS300,
				AK: this.params.mountFlange.size.ASME.D2_CLASS300,
				AL: this.params.mountFlange.size.ASME.D1_CLASS400_600,
				AM: this.params.mountFlange.size.ASME.D15_CLASS400_600,
				AN: this.params.mountFlange.size.ASME.D2_CLASS400_600,
				AP: this.params.mountFlange.size.ASME.D1_CLASS900_1500,
				AQ: this.params.mountFlange.size.ASME.D15_CLASS900_1500,
				AR: this.params.mountFlange.size.ASME.D2_CLASS900_1500,
				AS: this.params.mountFlange.size.ASME.D1_CLASS2500,
				AT: this.params.mountFlange.size.ASME.D15_CLASS2500,
				AU: this.params.mountFlange.size.ASME.D2_CLASS2500,
				AV: this.params.mountFlange.size.ASME.D3_CLASS300,
				AW: this.params.mountFlange.size.ASME.D3_CLASS400_600,
				AX: this.params.mountFlange.size.ASME.D3_CLASS900,
				AY: this.params.mountFlange.size.ASME.D3_CLASS1500,
				AZ: this.params.mountFlange.size.ASME.D3_CLASS2500,

				FA: this.params.mountFlange.size.DIN.DN20PN25_6,
				FE: this.params.mountFlange.size.DIN.DN20PN10_40,
				FG: this.params.mountFlange.size.DIN.DN20PN63_100,
				GA: this.params.mountFlange.size.DIN.DN25PN25_6,
				GE: this.params.mountFlange.size.DIN.DN25PN10_40,
				GG: this.params.mountFlange.size.DIN.DN25PN63_100,
				// GH: this.params.mountFlange.size.DIN.DN25PN160, // absent since rev.AS
				// GJ: this.params.mountFlange.size.DIN.DN25PN250, // absent since rev.AS
				// GK: this.params.mountFlange.size.DIN.DN25PN320, // absent since rev.AS
				// GL: this.params.mountFlange.size.DIN.DN25PN400, // absent since rev.AS
				JA: this.params.mountFlange.size.DIN.DN40PN25_6,
				JE: this.params.mountFlange.size.DIN.DN40PN10_40,
				JG: this.params.mountFlange.size.DIN.DN40PN63_100,
				// JH: this.params.mountFlange.size.DIN.DN40PN160, // absent since rev.AS
				// JJ: this.params.mountFlange.size.DIN.DN40PN250, // absent since rev.AS
				// JK: this.params.mountFlange.size.DIN.DN40PN320, // absent since rev.AS
				// JL: this.params.mountFlange.size.DIN.DN40PN400, // absent since rev.AS
				KA: this.params.mountFlange.size.DIN.DN50PN25_6,
				KC: this.params.mountFlange.size.DIN.DN50PN10_16,
				KE: this.params.mountFlange.size.DIN.DN50PN25_40,
				KF: this.params.mountFlange.size.DIN.DN50PN63,
				KG: this.params.mountFlange.size.DIN.DN50PN100,
				// KH: this.params.mountFlange.size.DIN.DN50PN160, // absent since rev.AS
				// KJ: this.params.mountFlange.size.DIN.DN50PN250, // absent since rev.AS
				// KK: this.params.mountFlange.size.DIN.DN50PN320, // absent since rev.AS
				// KL: this.params.mountFlange.size.DIN.DN50PN400, // absent since rev.AS
				LA: this.params.mountFlange.size.DIN.DN65PN25_6,
				LC: this.params.mountFlange.size.DIN.DN65PN10_16,
				LE: this.params.mountFlange.size.DIN.DN65PN25_40,
				LF: this.params.mountFlange.size.DIN.DN65PN63,
				LG: this.params.mountFlange.size.DIN.DN65PN100,
				// LH: this.params.mountFlange.size.DIN.DN65PN160, // absent since rev.AS
				// LJ: this.params.mountFlange.size.DIN.DN65PN250, // absent since rev.AS
				// LK: this.params.mountFlange.size.DIN.DN65PN320, // absent since rev.AS
				// LL: this.params.mountFlange.size.DIN.DN65PN400, // absent since rev.AS
				MA: this.params.mountFlange.size.DIN.DN80PN25_6,
				MC: this.params.mountFlange.size.DIN.DN80PN10_16,
				ME: this.params.mountFlange.size.DIN.DN80PN25_40,
				MF: this.params.mountFlange.size.DIN.DN80PN63,
				MG: this.params.mountFlange.size.DIN.DN80PN100,
				// MH: this.params.mountFlange.size.DIN.DN80PN160, // absent since rev.AS
				// MJ: this.params.mountFlange.size.DIN.DN80PN250, // absent since rev.AS
				// MK: this.params.mountFlange.size.DIN.DN80PN320, // absent since rev.AS
				// ML: this.params.mountFlange.size.DIN.DN80PN400, // absent since rev.AS
				NA: this.params.mountFlange.size.DIN.DN100PN25_6,
				NC: this.params.mountFlange.size.DIN.DN100PN10_16,
				NE: this.params.mountFlange.size.DIN.DN100PN25_40,
				NF: this.params.mountFlange.size.DIN.DN100PN63,
				NG: this.params.mountFlange.size.DIN.DN100PN100,
				// NH: this.params.mountFlange.size.DIN.DN100PN160, // absent since rev.AS
				// NJ: this.params.mountFlange.size.DIN.DN100PN250, // absent since rev.AS
				// NK: this.params.mountFlange.size.DIN.DN100PN320, // absent since rev.AS
				// NL: this.params.mountFlange.size.DIN.DN100PN400, // absent since rev.AS
			}[str]),

			procConnOfVanStone: (str) => ({
				AA: this.params.mountFlange.size.ASME.D1_CLASS150,
				AB: this.params.mountFlange.size.ASME.D15_CLASS150,
				AC: this.params.mountFlange.size.ASME.D2_CLASS150,
				AH: this.params.mountFlange.size.ASME.D1_CLASS300,
				AJ: this.params.mountFlange.size.ASME.D15_CLASS300,
				AK: this.params.mountFlange.size.ASME.D2_CLASS300,

				AL: this.params.mountFlange.size.ASME.D1_CLASS400_600,
				AM: this.params.mountFlange.size.ASME.D15_CLASS400_600,
				AN: this.params.mountFlange.size.ASME.D2_CLASS400_600,

				AP: this.params.mountFlange.size.ASME.D1_CLASS900_1500,
				AQ: this.params.mountFlange.size.ASME.D15_CLASS900_1500,
				AR: this.params.mountFlange.size.ASME.D2_CLASS900_1500,

				AS: this.params.mountFlange.size.ASME.D1_CLASS2500,
				AT: this.params.mountFlange.size.ASME.D15_CLASS2500,
				AU: this.params.mountFlange.size.ASME.D2_CLASS2500,
			}[str]),

			procConnOfSocketWeld: (str) => ({
				AA: this.params.mountWeld.pipeSizeInch.D075,
				AB: this.params.mountWeld.pipeSizeInch.D1,
				AC: this.params.mountWeld.pipeSizeInch.D125,
				AD: this.params.mountWeld.pipeSizeInch.D15,
			}[str]),

			procConnOfWeldIn: (str) => ({
				AA: this.params.mountWeld.pipeSizeInch.D075,
				AB: this.params.mountWeld.pipeSizeInch.D1,
				AC: this.params.mountWeld.pipeSizeInch.D125,
				AD: this.params.mountWeld.pipeSizeInch.D15,
				AE: this.params.mountWeld.pipeSizeInch.CUSTOM,

				DA: this.params.mountWeld.pipeSizeDIN43772.DIN_18,
				DB: this.params.mountWeld.pipeSizeDIN43772.DIN_24,
				DC: this.params.mountWeld.pipeSizeDIN43772.DIN_26_12,
				DD: this.params.mountWeld.pipeSizeDIN43772.DIN_26_15,
				DE: this.params.mountWeld.pipeSizeDIN43772.DIN_32,
				DH: this.params.mountWeld.pipeSizeDIN43772.CUSTOM,
			}[str]),

			procConn: (type, procConnCode) => {
				switch (type) {
					case this.params.mountType.THREADED:
						return this.decode.M_114C.procConnOfThreaded(procConnCode);
					case this.params.mountType.FLANGE:
						return this.decode.M_114C.procConnOfFlange(procConnCode);
					case this.params.mountType.VAN_STONE:
						return this.decode.M_114C.procConnOfVanStone(procConnCode);
					case this.params.mountType.SOCKET_WELD:
						return this.decode.M_114C.procConnOfSocketWeld(procConnCode);
					case this.params.mountType.WELD_IN:
						return this.decode.M_114C.procConnOfWeldIn(procConnCode);
					default:
						return null;
				}
			},

			stemStyle: (str) => ({
				1: this.params.stemStyle.STRAIGHT,
				2: this.params.stemStyle.TAPERED,
				3: this.params.stemStyle.STEPPED,
			}[str]),

			material: (str) => ({
				SF: this.params.material.SST_304_304L,
				SK: this.params.material.SST_304_304L_PTFE,
				SL: this.params.material.SST_310,
				SC: this.params.material.SST_316_316L,
				SD: this.params.material.SST_316_316L_NORSOK,
				SJ: this.params.material.SST_316_316L_PFA,
				SH: this.params.material.SST_316_316L_TANTALUM,
				SG: this.params.material.SST_316Ti,
				SM: this.params.material.SST_321,
				SN: this.params.material.SST_321H,
				SP: this.params.material.SST_347,
				SR: this.params.material.SST_904L,
				AG: this.params.material.alloy20,
				AH: this.params.material.alloy400,
				AJ: this.params.material.alloy400_SST304_304L,
				AK: this.params.material.alloy600,
				AL: this.params.material.alloy600_SST304_304L,
				AM: this.params.material.alloy601,
				AN: this.params.material.alloy625,
				AP: this.params.material.alloy800,
				AQ: this.params.material.alloy800H_800HT,
				AR: this.params.material.alloy825,
				AB: this.params.material.alloyB3,
				AU: this.params.material.alloyC22,
				AE: this.params.material.alloyC22_SST304_304L,
				AF: this.params.material.alloyC22_SST316_316L,
				AC: this.params.material.alloyС276,
				AD: this.params.material.alloyС4_SST304_304L,
				AS: this.params.material.alloyF44Mo6,
				CS: this.params.material.carbon,
				CA: this.params.material.CrMo_B11_F11,
				CB: this.params.material.CrMo_B22_F22,
				CC: this.params.material.CrMo_F91,
				DU: this.params.material.duplex2205,
				DV: this.params.material.duplex2205_NORSOK,
				MO: this.params.material.Mo,
				NK: this.params.material.Ni,
				DS: this.params.material.superDuplex,
				DT: this.params.material.superDuplex_NORSOK,
				TT: this.params.material.Ti,
			}[str]),

			instrConn: (str) => ({
				A: this.params.mountThread.taperedThr.ANPT05,
				B: this.params.mountThread.parallelThr.NPSM05,
				C: this.params.mountThread.taperedThr.ANPT075,
				D: this.params.mountThread.parallelThr.M18x15,
				E: this.params.mountThread.parallelThr.M20x15,
				F: this.params.mountThread.parallelThr.M24x15,
				G: this.params.mountThread.parallelThr.BSPF05,
				H: this.params.mountThread.parallelThr.BSPF075,
				J: this.params.mountThread.parallelThr.M27x2,
				K: this.params.mountThread.parallelThr.M14x15,
			}[str]),
		},

		M_D01: {},  // to-do
		M_0096: {}, // to-do
	}


}

module.exports = CommonRepr;