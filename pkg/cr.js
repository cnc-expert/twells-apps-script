class CommonRepr {

	/**
	 * Build common representation object of parsed 114C order code.
	 * 
	 * @param  {object}  parsedObj  Parsed object.
	 * @return {object}  A common representation object.
	 */
	static represent114C(parsedObj) {
		const commonRepr = new this();

		commonRepr.model = this.params.model.M_114C;
		commonRepr.unit = this.decode.R114C.unit(parsedObj.unit);
		commonRepr.immersionLen = +parsedObj.immerLen;
		commonRepr.style = this.decode.R114C.style(parsedObj.mountStyle);
		commonRepr.options = parsedObj.options || {}; // to-do
		commonRepr.options.flangeType = this.decode.R114C.flangeType(parsedObj.mountStyle);
		commonRepr.procConn = this.decode.R114C.procConn(commonRepr.style, parsedObj.procConn);
		commonRepr.stemStyle = this.decode.R114C.stemStyle(parsedObj.stemStyle);
		commonRepr.material = this.decode.R114C.material(parsedObj.material);
		commonRepr.headLen = +parsedObj.headLen;
		commonRepr.instrConn = this.decode.R114C.instrConn(parsedObj.instrConn);
		
		return commonRepr;
	}

	/**
	 * Build common representation object of parsed D01 order code.
	 * 
	 * @param  {object}  parsedObj  Parsed object.
	 * @return {object}  A common representation object.
	 */
	static representD01(parsedObj) {
		const commonRepr = new this();


		commonRepr.model = this.params.model.M_D01;
		commonRepr.unit = this.params.dimUnit.MM;
		commonRepr.immersionLen = this.decode.D01.immersionLen(parsedObj.immerLen);
		commonRepr.style = this.decode.D01.style(parsedObj.mountStyle);
		const sizeAndStem = this.decode.D01.procConn(parsedObj.mountStyle);
		[ commonRepr.procConn, commonRepr.stemStyle ] = sizeAndStem;
		commonRepr.options = { optSet: parsedObj.optSet };  // to-do
		commonRepr.options.flangeType = this.params.mountFlange.type.PART_WELD;
		commonRepr.material = this.decode.D01.material(parsedObj.material);
		commonRepr.headLen = this.decode.D01.headLen(parsedObj.headLen);
		commonRepr.instrConn = this.decode.D01.instrConn(parsedObj.instrConn);

		return commonRepr;
	}

	toString() {
		return `${this.model} | ${this.unit} | ${this.style} | ` +
			`U=${this.immersionLen} | ${this.procConn} | ${this.stemStyle} | ` +
			`${this.material} | H=${this.headLen} | ${this.instrConn}`;
	}

	rowDescription(withHeaders = false) {
		const headers = ["model", "unit", "mounting style", "immersion length", "process connection", "stem style", "material", "head length", "instr connection"];
		const values = [this.model, this.unit, this.style, this.immersionLen, this.procConn, this.stemStyle, this.material, this.headLen, this.instrConn];
		return withHeaders ? [headers, values] : [values];
	}

	columnDescription(withHeaders = false) {
		const headers = ["model", "unit", "mounting style", "immersion length", "process connection", "stem style", "material", "head length", "instr connection"];
		const values = [this.model, this.unit, this.style, this.immersionLen, this.procConn, this.stemStyle, this.material, this.headLen, this.instrConn];
		return withHeaders ? headers.map((h, i) => [h, values[i]]) : values.map(v => [v]);
	}
}

CommonRepr.params = {
	model: {
		M_114C: "114C",
		M_D01: "D01",
		M_0096: "0096",
	},
	dimUnit: {
		MM: "mm",
		INCH: "inch",
	},
	mountStyle: {
		THREADED: "threaded",
		FLANGE: "flange",
		VAN_STONE: "van stone",
		SOCKET_WELD: "socket weld",
		WELD_IN: "weld-in",  // including DIN 43772 form 4
	},
	mountFlange: {
		type: {
			FULL_WELD: "full",
			PART_WELD: "partial",
			THREADED: "threaded",
			FORGING: "forging",
		},
		size: {
			ASME: {
				D1_CLASS150:  '1" class 150',
				D15_CLASS150: '1,5" class 150',
				D2_CLASS150:  '2" class 150',
				D3_CLASS150:  '3" class 150',
				D4_CLASS150:  '4" class 150',
				D6_CLASS150:  '6" class 150',
				D075_CLASS300: '3/4" class 300',
				D1_CLASS300:   '1" class 300',
				D15_CLASS300:  '1,5" class 300',
				D2_CLASS300:   '2" class 300',
				D1_CLASS400_600:  '1" class 400/600',
				D15_CLASS400_600: '1,5" class 400/600',
				D2_CLASS400_600:  '2" class 400/600',
				D1_CLASS600:  '1" class 600',
				D15_CLASS600: '1,5" class 600',
				D2_CLASS600:  '2" class 600',
				D1_CLASS900_1500:  '1" class 900/1500',
				D15_CLASS900_1500: '1,5" class 900/1500',
				D2_CLASS900_1500:  '2" class 900/1500',
				D1_CLASS1500:  '1" class 1500',
				D15_CLASS1500: '1,5" class 1500',
				D2_CLASS1500:  '2" class 1500',
				D1_CLASS2500:  '1" class 2500',
				D15_CLASS2500: '1,5" class 2500',
				D2_CLASS2500:  '2" class 2500',

				D3_CLASS300:     '3" class 300',
				D3_CLASS400_600: '3" class 400/600',
				D3_CLASS900:     '3" class 900',
				D3_CLASS1500:    '3" class 1500',
				D3_CLASS2500:    '3" class 2500',
			},
			DIN: {
				DN20PN25_6: "DN 20 PN 2.5/6",
				DN20PN10_40: "DN 20 PN 10/16/25/40",
				DN20PN16: "DN 20 PN 16",
				DN20PN63_100: "DN 20 PN 63/100",

				DN25PN25_6: "DN 25 PN 2.5/6",
				DN25PN10_40: "DN 25 PN 10/16/25/40",
				DN25PN16: "DN 25 PN 16",
				DN25PN40: "DN 25 PN 40",
				DN25PN63_100: "DN 25 PN 63/100",
				// DN25PN160: "DN 25 PN 160", // absent since rev.AS
				// DN25PN250: "DN 25 PN 250", // absent since rev.AS
				// DN25PN320: "DN 25 PN 320", // absent since rev.AS
				// DN25PN400: "DN 25 PN 400", // absent since rev.AS

				DN40PN25_6: "DN 40 PN 2.5/6",
				DN40PN10_40: "DN 40 PN 10/16/25/40",
				DN40PN16: "DN 40 PN 16",
				DN40PN40: "DN 40 PN 40",
				DN40PN63_100: "DN 40 PN 63/100",
				// DN40PN160: "DN 40 PN 160", // absent since rev.AS
				// DN40PN250: "DN 40 PN 250", // absent since rev.AS
				// DN40PN320: "DN 40 PN 320", // absent since rev.AS
				// DN40PN400: "DN 40 PN 400", // absent since rev.AS

				DN50PN25_6: "DN 50 PN 2.5/6",
				DN50PN10_16: "DN 50 PN 10/16",
				DN50PN16: "DN 50 PN 16",
				DN50PN25_40: "DN 50 PN 25/40",
				DN50PN40: "DN 50 PN 40",
				DN50PN63: "DN 50 PN 63",
				DN50PN100: "DN 50 PN 100",
				// DN50PN160: "DN 50 PN 160", // absent since rev.AS
				// DN50PN250: "DN 50 PN 250", // absent since rev.AS
				// DN50PN320: "DN 50 PN 320", // absent since rev.AS
				// DN50PN400: "DN 50 PN 400", // absent since rev.AS

				DN65PN25_6: "DN 65 PN 2.5/6",
				DN65PN10_16: "DN 65 PN 10/16",
				DN65PN25_40: "DN 65 PN 25/40",
				DN65PN63: "DN 65 PN 63",
				DN65PN100: "DN 65 PN 100",
				// DN65PN160: "DN 65 PN 160", // absent since rev.AS
				// DN65PN250: "DN 65 PN 250", // absent since rev.AS
				// DN65PN320: "DN 65 PN 320", // absent since rev.AS
				// DN65PN400: "DN 65 PN 400", // absent since rev.AS

				DN80PN25_6: "DN 80 PN 2.5/6",
				DN80PN10_16: "DN 80 PN 10/16",
				DN80PN25_40: "DN 80 PN 25/40",
				DN80PN63: "DN 80 PN 63",
				DN80PN100: "DN 80 PN 100",
				// DN80PN160: "DN 80 PN 160", // absent since rev.AS
				// DN80PN250: "DN 80 PN 250", // absent since rev.AS
				// DN80PN320: "DN 80 PN 320", // absent since rev.AS
				// DN80PN400: "DN 80 PN 400", // absent since rev.AS

				DN100PN25_6: "DN 100 PN 2.5/6",
				DN100PN10_16: "DN 100 PN 10/16",
				DN100PN16: "DN 100 PN 16",
				DN100PN25_40: "DN 100 PN 25/40",
				DN100PN63: "DN 100 PN 63",
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
			D075: '3/4" pipe',
			D1: '1" pipe',
			D125: '1 1/4" pipe',
			D15: '1 1/2" pipe',
			CUSTOM: "custom",
		},
		pipeSizeDIN43772: {
			DIN_18: "18 h7",
			DIN_24: "24 h7",
			DIN_26_12: "26 h7 tip D12,5",
			DIN_26_15: "26 h7 tip D15",
			DIN_32: "32 h11",
			CUSTOM: "custom",
		},
	},
	mountThread: {
		taperedThr: {
			ANPT05: "1/2-14 ANPT",
			ANPT075: "3/4-14 ANPT",
			ANPT1: "1-11.5 ANPT",
			ANPT15: "1,5-11.5 ANPT",
			API05: "1/2 API",
			API075: "3/4 API",
			API1: "1 API",
			BSPT05: "R1/2",
			BSPT075: "R3/4",
			BSPT1: "R1",
			NPT075: "3/4-14 NPT",
		},
		parallelThr: {
			BSPF05: "G1/2",
			BSPF075: "G3/4",
			BSPF1: "G1",
			M14x15: "M14x1,5",
			M18x15: "M18x1,5",
			M20x15: "M20x1,5",
			M22x15: "M22x1,5",
			M24x15: "M24x1,5",
			M24x2: "M24x2",
			M27x15: "M27x1,5",
			M27x2: "M27x2",
			M33x2: "M33x2",
			NPSM05: "1/2-14 NPSM",
		}
	},
	stemStyle: {
		STEPPED: "stepped",
		STRAIGHT: "straight",
		TAPERED: "tapered",
		TWISTED: "twisted square",
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
		special: "special",
		Ti: "titan grade 2",
	}
};

CommonRepr.decode = {
	R114C: {
		unit: (str) => ({
			M: CommonRepr.params.dimUnit.MM,
			E: CommonRepr.params.dimUnit.INCH,
		}[str]),

		style: (str) => ({
			T: CommonRepr.params.mountStyle.THREADED,
			P: CommonRepr.params.mountStyle.FLANGE,
			F: CommonRepr.params.mountStyle.FLANGE,
			G: CommonRepr.params.mountStyle.FLANGE,
			E: CommonRepr.params.mountStyle.FLANGE,
			V: CommonRepr.params.mountStyle.VAN_STONE,
			W: CommonRepr.params.mountStyle.SOCKET_WELD,
			D: CommonRepr.params.mountStyle.WELD_IN,
		}[str]),

		flangeType: (str) => ({
			P: CommonRepr.params.mountFlange.type.PART_WELD,
			F: CommonRepr.params.mountFlange.type.FULL_WELD,
			G: CommonRepr.params.mountFlange.type.FORGING,
			E: CommonRepr.params.mountFlange.type.THREADED,
		}[str]),

		procConnOfThreaded: (str) => ({
			AA: CommonRepr.params.mountThread.taperedThr.ANPT05,
			AB: CommonRepr.params.mountThread.taperedThr.ANPT075,
			AC: CommonRepr.params.mountThread.taperedThr.ANPT1,
			AD: CommonRepr.params.mountThread.taperedThr.ANPT15,
			AE: CommonRepr.params.mountThread.taperedThr.BSPT05,
			AF: CommonRepr.params.mountThread.taperedThr.BSPT075,
			AG: CommonRepr.params.mountThread.taperedThr.BSPT1,
			DA: CommonRepr.params.mountThread.parallelThr.M20x15,
			DB: CommonRepr.params.mountThread.parallelThr.M24x15,
			DC: CommonRepr.params.mountThread.parallelThr.M27x2,
			DD: CommonRepr.params.mountThread.parallelThr.M33x2,
			DE: CommonRepr.params.mountThread.parallelThr.BSPF05,
			DF: CommonRepr.params.mountThread.parallelThr.BSPF075,
			DG: CommonRepr.params.mountThread.parallelThr.BSPF1,
		}[str]),

		procConnOfFlange: (str) => ({
			AA: CommonRepr.params.mountFlange.size.ASME.D1_CLASS150,
			AB: CommonRepr.params.mountFlange.size.ASME.D15_CLASS150,
			AC: CommonRepr.params.mountFlange.size.ASME.D2_CLASS150,
			AD: CommonRepr.params.mountFlange.size.ASME.D3_CLASS150,
			AE: CommonRepr.params.mountFlange.size.ASME.D4_CLASS150,
			AF: CommonRepr.params.mountFlange.size.ASME.D6_CLASS150,
			AG: CommonRepr.params.mountFlange.size.ASME.D075_CLASS300,
			AH: CommonRepr.params.mountFlange.size.ASME.D1_CLASS300,
			AJ: CommonRepr.params.mountFlange.size.ASME.D15_CLASS300,
			AK: CommonRepr.params.mountFlange.size.ASME.D2_CLASS300,
			AL: CommonRepr.params.mountFlange.size.ASME.D1_CLASS400_600,
			AM: CommonRepr.params.mountFlange.size.ASME.D15_CLASS400_600,
			AN: CommonRepr.params.mountFlange.size.ASME.D2_CLASS400_600,
			AP: CommonRepr.params.mountFlange.size.ASME.D1_CLASS900_1500,
			AQ: CommonRepr.params.mountFlange.size.ASME.D15_CLASS900_1500,
			AR: CommonRepr.params.mountFlange.size.ASME.D2_CLASS900_1500,
			AS: CommonRepr.params.mountFlange.size.ASME.D1_CLASS2500,
			AT: CommonRepr.params.mountFlange.size.ASME.D15_CLASS2500,
			AU: CommonRepr.params.mountFlange.size.ASME.D2_CLASS2500,
			AV: CommonRepr.params.mountFlange.size.ASME.D3_CLASS300,
			AW: CommonRepr.params.mountFlange.size.ASME.D3_CLASS400_600,
			AX: CommonRepr.params.mountFlange.size.ASME.D3_CLASS900,
			AY: CommonRepr.params.mountFlange.size.ASME.D3_CLASS1500,
			AZ: CommonRepr.params.mountFlange.size.ASME.D3_CLASS2500,

			FA: CommonRepr.params.mountFlange.size.DIN.DN20PN25_6,
			FE: CommonRepr.params.mountFlange.size.DIN.DN20PN10_40,
			FG: CommonRepr.params.mountFlange.size.DIN.DN20PN63_100,
			GA: CommonRepr.params.mountFlange.size.DIN.DN25PN25_6,
			GE: CommonRepr.params.mountFlange.size.DIN.DN25PN10_40,
			GG: CommonRepr.params.mountFlange.size.DIN.DN25PN63_100,
			// GH: CommonRepr.params.mountFlange.size.DIN.DN25PN160, // absent since rev.AS
			// GJ: CommonRepr.params.mountFlange.size.DIN.DN25PN250, // absent since rev.AS
			// GK: CommonRepr.params.mountFlange.size.DIN.DN25PN320, // absent since rev.AS
			// GL: CommonRepr.params.mountFlange.size.DIN.DN25PN400, // absent since rev.AS
			JA: CommonRepr.params.mountFlange.size.DIN.DN40PN25_6,
			JE: CommonRepr.params.mountFlange.size.DIN.DN40PN10_40,
			JG: CommonRepr.params.mountFlange.size.DIN.DN40PN63_100,
			// JH: CommonRepr.params.mountFlange.size.DIN.DN40PN160, // absent since rev.AS
			// JJ: CommonRepr.params.mountFlange.size.DIN.DN40PN250, // absent since rev.AS
			// JK: CommonRepr.params.mountFlange.size.DIN.DN40PN320, // absent since rev.AS
			// JL: CommonRepr.params.mountFlange.size.DIN.DN40PN400, // absent since rev.AS
			KA: CommonRepr.params.mountFlange.size.DIN.DN50PN25_6,
			KC: CommonRepr.params.mountFlange.size.DIN.DN50PN10_16,
			KE: CommonRepr.params.mountFlange.size.DIN.DN50PN25_40,
			KF: CommonRepr.params.mountFlange.size.DIN.DN50PN63,
			KG: CommonRepr.params.mountFlange.size.DIN.DN50PN100,
			// KH: CommonRepr.params.mountFlange.size.DIN.DN50PN160, // absent since rev.AS
			// KJ: CommonRepr.params.mountFlange.size.DIN.DN50PN250, // absent since rev.AS
			// KK: CommonRepr.params.mountFlange.size.DIN.DN50PN320, // absent since rev.AS
			// KL: CommonRepr.params.mountFlange.size.DIN.DN50PN400, // absent since rev.AS
			LA: CommonRepr.params.mountFlange.size.DIN.DN65PN25_6,
			LC: CommonRepr.params.mountFlange.size.DIN.DN65PN10_16,
			LE: CommonRepr.params.mountFlange.size.DIN.DN65PN25_40,
			LF: CommonRepr.params.mountFlange.size.DIN.DN65PN63,
			LG: CommonRepr.params.mountFlange.size.DIN.DN65PN100,
			// LH: CommonRepr.params.mountFlange.size.DIN.DN65PN160, // absent since rev.AS
			// LJ: CommonRepr.params.mountFlange.size.DIN.DN65PN250, // absent since rev.AS
			// LK: CommonRepr.params.mountFlange.size.DIN.DN65PN320, // absent since rev.AS
			// LL: CommonRepr.params.mountFlange.size.DIN.DN65PN400, // absent since rev.AS
			MA: CommonRepr.params.mountFlange.size.DIN.DN80PN25_6,
			MC: CommonRepr.params.mountFlange.size.DIN.DN80PN10_16,
			ME: CommonRepr.params.mountFlange.size.DIN.DN80PN25_40,
			MF: CommonRepr.params.mountFlange.size.DIN.DN80PN63,
			MG: CommonRepr.params.mountFlange.size.DIN.DN80PN100,
			// MH: CommonRepr.params.mountFlange.size.DIN.DN80PN160, // absent since rev.AS
			// MJ: CommonRepr.params.mountFlange.size.DIN.DN80PN250, // absent since rev.AS
			// MK: CommonRepr.params.mountFlange.size.DIN.DN80PN320, // absent since rev.AS
			// ML: CommonRepr.params.mountFlange.size.DIN.DN80PN400, // absent since rev.AS
			NA: CommonRepr.params.mountFlange.size.DIN.DN100PN25_6,
			NC: CommonRepr.params.mountFlange.size.DIN.DN100PN10_16,
			NE: CommonRepr.params.mountFlange.size.DIN.DN100PN25_40,
			NF: CommonRepr.params.mountFlange.size.DIN.DN100PN63,
			NG: CommonRepr.params.mountFlange.size.DIN.DN100PN100,
			// NH: CommonRepr.params.mountFlange.size.DIN.DN100PN160, // absent since rev.AS
			// NJ: CommonRepr.params.mountFlange.size.DIN.DN100PN250, // absent since rev.AS
			// NK: CommonRepr.params.mountFlange.size.DIN.DN100PN320, // absent since rev.AS
			// NL: CommonRepr.params.mountFlange.size.DIN.DN100PN400, // absent since rev.AS
		}[str]),

		procConnOfVanStone: (str) => ({
			AA: CommonRepr.params.mountFlange.size.ASME.D1_CLASS150,
			AB: CommonRepr.params.mountFlange.size.ASME.D15_CLASS150,
			AC: CommonRepr.params.mountFlange.size.ASME.D2_CLASS150,
			AH: CommonRepr.params.mountFlange.size.ASME.D1_CLASS300,
			AJ: CommonRepr.params.mountFlange.size.ASME.D15_CLASS300,
			AK: CommonRepr.params.mountFlange.size.ASME.D2_CLASS300,

			AL: CommonRepr.params.mountFlange.size.ASME.D1_CLASS400_600,
			AM: CommonRepr.params.mountFlange.size.ASME.D15_CLASS400_600,
			AN: CommonRepr.params.mountFlange.size.ASME.D2_CLASS400_600,

			AP: CommonRepr.params.mountFlange.size.ASME.D1_CLASS900_1500,
			AQ: CommonRepr.params.mountFlange.size.ASME.D15_CLASS900_1500,
			AR: CommonRepr.params.mountFlange.size.ASME.D2_CLASS900_1500,

			AS: CommonRepr.params.mountFlange.size.ASME.D1_CLASS2500,
			AT: CommonRepr.params.mountFlange.size.ASME.D15_CLASS2500,
			AU: CommonRepr.params.mountFlange.size.ASME.D2_CLASS2500,
		}[str]),

		procConnOfSocketWeld: (str) => ({
			AA: CommonRepr.params.mountWeld.pipeSizeInch.D075,
			AB: CommonRepr.params.mountWeld.pipeSizeInch.D1,
			AC: CommonRepr.params.mountWeld.pipeSizeInch.D125,
			AD: CommonRepr.params.mountWeld.pipeSizeInch.D15,
		}[str]),

		procConnOfWeldIn: (str) => ({
			AA: CommonRepr.params.mountWeld.pipeSizeInch.D075,
			AB: CommonRepr.params.mountWeld.pipeSizeInch.D1,
			AC: CommonRepr.params.mountWeld.pipeSizeInch.D125,
			AD: CommonRepr.params.mountWeld.pipeSizeInch.D15,
			AE: CommonRepr.params.mountWeld.pipeSizeInch.CUSTOM,

			DA: CommonRepr.params.mountWeld.pipeSizeDIN43772.DIN_18,
			DB: CommonRepr.params.mountWeld.pipeSizeDIN43772.DIN_24,
			DC: CommonRepr.params.mountWeld.pipeSizeDIN43772.DIN_26_12,
			DD: CommonRepr.params.mountWeld.pipeSizeDIN43772.DIN_26_15,
			DE: CommonRepr.params.mountWeld.pipeSizeDIN43772.DIN_32,
			DH: CommonRepr.params.mountWeld.pipeSizeDIN43772.CUSTOM,
		}[str]),

		procConn: (type, procConnCode) => {
			switch (type) {
				case CommonRepr.params.mountStyle.THREADED:
					return CommonRepr.decode.R114C.procConnOfThreaded(procConnCode);
				case CommonRepr.params.mountStyle.FLANGE:
					return CommonRepr.decode.R114C.procConnOfFlange(procConnCode);
				case CommonRepr.params.mountStyle.VAN_STONE:
					return CommonRepr.decode.R114C.procConnOfVanStone(procConnCode);
				case CommonRepr.params.mountStyle.SOCKET_WELD:
					return CommonRepr.decode.R114C.procConnOfSocketWeld(procConnCode);
				case CommonRepr.params.mountStyle.WELD_IN:
					return CommonRepr.decode.R114C.procConnOfWeldIn(procConnCode);
			}
		},

		stemStyle: (str) => ({
			1: CommonRepr.params.stemStyle.STRAIGHT,
			2: CommonRepr.params.stemStyle.TAPERED,
			3: CommonRepr.params.stemStyle.STEPPED,
			T: CommonRepr.params.stemStyle.TWISTED,
		}[str]),

		material: (str) => ({
			SF: CommonRepr.params.material.SST_304_304L,
			SK: CommonRepr.params.material.SST_304_304L_PTFE,
			SL: CommonRepr.params.material.SST_310,
			SC: CommonRepr.params.material.SST_316_316L,
			SD: CommonRepr.params.material.SST_316_316L_NORSOK,
			SJ: CommonRepr.params.material.SST_316_316L_PFA,
			SH: CommonRepr.params.material.SST_316_316L_TANTALUM,
			SG: CommonRepr.params.material.SST_316Ti,
			SM: CommonRepr.params.material.SST_321,
			SN: CommonRepr.params.material.SST_321H,
			SP: CommonRepr.params.material.SST_347,
			SR: CommonRepr.params.material.SST_904L,
			AG: CommonRepr.params.material.alloy20,
			AH: CommonRepr.params.material.alloy400,
			AJ: CommonRepr.params.material.alloy400_SST304_304L,
			AK: CommonRepr.params.material.alloy600,
			AL: CommonRepr.params.material.alloy600_SST304_304L,
			AM: CommonRepr.params.material.alloy601,
			AN: CommonRepr.params.material.alloy625,
			AP: CommonRepr.params.material.alloy800,
			AQ: CommonRepr.params.material.alloy800H_800HT,
			AR: CommonRepr.params.material.alloy825,
			AB: CommonRepr.params.material.alloyB3,
			AU: CommonRepr.params.material.alloyC22,
			AE: CommonRepr.params.material.alloyC22_SST304_304L,
			AF: CommonRepr.params.material.alloyC22_SST316_316L,
			AC: CommonRepr.params.material.alloyС276,
			AD: CommonRepr.params.material.alloyС4_SST304_304L,
			AS: CommonRepr.params.material.alloyF44Mo6,
			CS: CommonRepr.params.material.carbon,
			CA: CommonRepr.params.material.CrMo_B11_F11,
			CB: CommonRepr.params.material.CrMo_B22_F22,
			CC: CommonRepr.params.material.CrMo_F91,
			DU: CommonRepr.params.material.duplex2205,
			DV: CommonRepr.params.material.duplex2205_NORSOK,
			MO: CommonRepr.params.material.Mo,
			NK: CommonRepr.params.material.Ni,
			DS: CommonRepr.params.material.superDuplex,
			DT: CommonRepr.params.material.superDuplex_NORSOK,
			TT: CommonRepr.params.material.Ti,
		}[str]),

		instrConn: (str) => ({
			A: CommonRepr.params.mountThread.taperedThr.ANPT05,
			B: CommonRepr.params.mountThread.parallelThr.NPSM05,
			C: CommonRepr.params.mountThread.taperedThr.ANPT075,
			D: CommonRepr.params.mountThread.parallelThr.M18x15,
			E: CommonRepr.params.mountThread.parallelThr.M20x15,
			F: CommonRepr.params.mountThread.parallelThr.M24x15,
			G: CommonRepr.params.mountThread.parallelThr.BSPF05,
			H: CommonRepr.params.mountThread.parallelThr.BSPF075,
			J: CommonRepr.params.mountThread.parallelThr.M27x2,
			K: CommonRepr.params.mountThread.parallelThr.M14x15,
		}[str]),
	},

	D01: {

		material: (str) => ({
			B: CommonRepr.params.material.SST_304,
			E: CommonRepr.params.material.SST_304L,
			M: CommonRepr.params.material.SST_304_PTFE,
			V: CommonRepr.params.material.SST_310,
			A: CommonRepr.params.material.SST_316,
			D: CommonRepr.params.material.SST_316L,
			U: CommonRepr.params.material.SST_316_TANTALUM,
			Y: CommonRepr.params.material.SST_316Ti,
			W: CommonRepr.params.material.SST_321,
			F: CommonRepr.params.material.alloy20,
			G: CommonRepr.params.material.alloy400,
			H: CommonRepr.params.material.alloy600,
			L: CommonRepr.params.material.alloyB,
			J: CommonRepr.params.material.alloyС276,
			C: CommonRepr.params.material.carbon,
			Z: CommonRepr.params.material.CrMo_B11_F11,
			P: CommonRepr.params.material.CrMo_B22_F22,
			K: CommonRepr.params.material.Mo,
			R: CommonRepr.params.material.Ni,
			X: CommonRepr.params.material.special,
			T: CommonRepr.params.material.Ti,
		}[str]),

		immersionLen: (str) => {
			const offset = str[0];
			const base = str[1];
			const regularLength = (bases, baseLength) => {
				const lengthStep = 5;
				const numOfOffsets = 10; // 0...9
				const baseStep = numOfOffsets * lengthStep;
				const idx = bases.indexOf(base);
				return (idx == -1) ? undefined : baseLength + idx * baseStep + offset * lengthStep;
			}
			let length = regularLength(
					["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "T"],
					25
				) || regularLength(["V", "W", "X", "Y"], 830) || {
					"0U": 825,  "1U": 2050, "2U": 2060, "3U": 2380, "4U": 2420, "5U": 2710,
					"6U": 2780, "7U": 2600, "8U": 1525, "9U": 88,   "0Z": 1100, "1Z": 1800,
					"2Z": 1665, "3Z": 2000, "4Z": 1250, "5Z": 1060, "6Z": 1120, "7Z": 1300,
				}[str];
			return length;
		},

		style: ([char]) => ({
			T: CommonRepr.params.mountStyle.THREADED,
			W: CommonRepr.params.mountStyle.SOCKET_WELD,
			F: CommonRepr.params.mountStyle.FLANGE,
			D: CommonRepr.params.mountStyle.FLANGE,
			E: CommonRepr.params.mountStyle.WELD_IN,
		}[char]),

		procConn: (procConnCode) => {
			const type = procConnCode[0];
			switch (type) {
				case "T":
					return CommonRepr.decode.D01.procConnOfThreaded(procConnCode);
				case "W":
					return CommonRepr.decode.D01.procConnOfSocketWeld(procConnCode);
				case "F":
					return CommonRepr.decode.D01.procConnOfAsmeFlange(procConnCode);
				case "D":
					return CommonRepr.decode.D01.procConnOfDinFlange(procConnCode);
				case "E":
					return CommonRepr.decode.D01.procConnOfWeldIn(procConnCode);
			}
		},

		procConnOfThreaded: (str) => ({
			T02: [ CommonRepr.params.mountThread.taperedThr.BSPT05,  CommonRepr.params.stemStyle.STEPPED ],
			T04: [ CommonRepr.params.mountThread.taperedThr.BSPT075, CommonRepr.params.stemStyle.STEPPED ],
			T06: [ CommonRepr.params.mountThread.taperedThr.BSPT1,   CommonRepr.params.stemStyle.STEPPED ],
			T08: [ CommonRepr.params.mountThread.taperedThr.BSPT05,  CommonRepr.params.stemStyle.TAPERED ],
			T10: [ CommonRepr.params.mountThread.taperedThr.BSPT075, CommonRepr.params.stemStyle.TAPERED ],
			T12: [ CommonRepr.params.mountThread.taperedThr.BSPT1,   CommonRepr.params.stemStyle.TAPERED ],
			T14: [ CommonRepr.params.mountThread.taperedThr.BSPT05,  CommonRepr.params.stemStyle.STRAIGHT ],
			T16: [ CommonRepr.params.mountThread.taperedThr.BSPT075, CommonRepr.params.stemStyle.STRAIGHT ],
			T18: [ CommonRepr.params.mountThread.taperedThr.BSPT1,   CommonRepr.params.stemStyle.STRAIGHT ],

			T20: [ CommonRepr.params.mountThread.parallelThr.BSPF05,  CommonRepr.params.stemStyle.STEPPED ],
			T22: [ CommonRepr.params.mountThread.parallelThr.BSPF075, CommonRepr.params.stemStyle.STEPPED ],
			T24: [ CommonRepr.params.mountThread.parallelThr.BSPF1,   CommonRepr.params.stemStyle.STEPPED ],
			T26: [ CommonRepr.params.mountThread.parallelThr.BSPF05,  CommonRepr.params.stemStyle.TAPERED ],
			T28: [ CommonRepr.params.mountThread.parallelThr.BSPF075, CommonRepr.params.stemStyle.TAPERED ],
			T30: [ CommonRepr.params.mountThread.parallelThr.BSPF1,   CommonRepr.params.stemStyle.TAPERED ],
			T32: [ CommonRepr.params.mountThread.parallelThr.BSPF05,  CommonRepr.params.stemStyle.STRAIGHT ],
			T34: [ CommonRepr.params.mountThread.parallelThr.BSPF075, CommonRepr.params.stemStyle.STRAIGHT ],
			T36: [ CommonRepr.params.mountThread.parallelThr.BSPF1,   CommonRepr.params.stemStyle.STRAIGHT ],

			T38: [ CommonRepr.params.mountThread.taperedThr.ANPT05,  CommonRepr.params.stemStyle.STEPPED ],
			T40: [ CommonRepr.params.mountThread.taperedThr.ANPT075, CommonRepr.params.stemStyle.STEPPED ],
			T42: [ CommonRepr.params.mountThread.taperedThr.ANPT1,   CommonRepr.params.stemStyle.STEPPED ],
			T44: [ CommonRepr.params.mountThread.taperedThr.ANPT05,  CommonRepr.params.stemStyle.TAPERED ],
			T46: [ CommonRepr.params.mountThread.taperedThr.ANPT075, CommonRepr.params.stemStyle.TAPERED ],
			T48: [ CommonRepr.params.mountThread.taperedThr.ANPT1,   CommonRepr.params.stemStyle.TAPERED ],
			T50: [ CommonRepr.params.mountThread.taperedThr.ANPT05,  CommonRepr.params.stemStyle.STRAIGHT ],
			T52: [ CommonRepr.params.mountThread.taperedThr.ANPT075, CommonRepr.params.stemStyle.STRAIGHT ],
			T54: [ CommonRepr.params.mountThread.taperedThr.ANPT1,   CommonRepr.params.stemStyle.STRAIGHT ],

			T56: [ CommonRepr.params.mountThread.taperedThr.API05,  CommonRepr.params.stemStyle.STEPPED ],
			T58: [ CommonRepr.params.mountThread.taperedThr.API075, CommonRepr.params.stemStyle.STEPPED ],
			T60: [ CommonRepr.params.mountThread.taperedThr.API1,   CommonRepr.params.stemStyle.STEPPED ],
			T62: [ CommonRepr.params.mountThread.taperedThr.API05,  CommonRepr.params.stemStyle.TAPERED ],
			T64: [ CommonRepr.params.mountThread.taperedThr.API075, CommonRepr.params.stemStyle.TAPERED ],
			T66: [ CommonRepr.params.mountThread.taperedThr.API1,   CommonRepr.params.stemStyle.TAPERED ],
			T68: [ CommonRepr.params.mountThread.taperedThr.API05,  CommonRepr.params.stemStyle.STRAIGHT ],
			T70: [ CommonRepr.params.mountThread.taperedThr.API075, CommonRepr.params.stemStyle.STRAIGHT ],
			T72: [ CommonRepr.params.mountThread.taperedThr.API1,   CommonRepr.params.stemStyle.STRAIGHT ],
			
			T74: [ CommonRepr.params.mountThread.parallelThr.M24x15, CommonRepr.params.stemStyle.STEPPED ],
			T90: [ CommonRepr.params.mountThread.parallelThr.M24x15, CommonRepr.params.stemStyle.TAPERED ],
			T93: [ CommonRepr.params.mountThread.parallelThr.M27x2,  CommonRepr.params.stemStyle.TAPERED ],
			T95: [ CommonRepr.params.mountThread.parallelThr.M33x2,  CommonRepr.params.stemStyle.TAPERED ],
			T98: [ CommonRepr.params.mountThread.parallelThr.M20x15, CommonRepr.params.stemStyle.TAPERED ],
		}[str]),

		procConnOfSocketWeld: (str) => ({
			W02: [ CommonRepr.params.mountWeld.pipeSizeInch.D075, CommonRepr.params.stemStyle.STEPPED ],
			W04: [ CommonRepr.params.mountWeld.pipeSizeInch.D1,   CommonRepr.params.stemStyle.STEPPED ],
			W06: [ CommonRepr.params.mountWeld.pipeSizeInch.D125, CommonRepr.params.stemStyle.STEPPED ],
			W08: [ CommonRepr.params.mountWeld.pipeSizeInch.D15,  CommonRepr.params.stemStyle.STEPPED ],
			W10: [ CommonRepr.params.mountWeld.pipeSizeInch.D075, CommonRepr.params.stemStyle.TAPERED ],
			W12: [ CommonRepr.params.mountWeld.pipeSizeInch.D1,   CommonRepr.params.stemStyle.TAPERED ],
			W14: [ CommonRepr.params.mountWeld.pipeSizeInch.D125, CommonRepr.params.stemStyle.TAPERED ],
			W16: [ CommonRepr.params.mountWeld.pipeSizeInch.D15,  CommonRepr.params.stemStyle.TAPERED ],
			W18: [ CommonRepr.params.mountWeld.pipeSizeInch.D075, CommonRepr.params.stemStyle.STRAIGHT ],
			W20: [ CommonRepr.params.mountWeld.pipeSizeInch.D1,   CommonRepr.params.stemStyle.STRAIGHT ],
			W22: [ CommonRepr.params.mountWeld.pipeSizeInch.D125, CommonRepr.params.stemStyle.STRAIGHT ],
			W24: [ CommonRepr.params.mountWeld.pipeSizeInch.D15,  CommonRepr.params.stemStyle.STRAIGHT ],
		}[str]),

		procConnOfAsmeFlange: (str) => ({
			F02: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS150,  CommonRepr.params.stemStyle.STEPPED ],
			F04: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS150,  CommonRepr.params.stemStyle.TAPERED ],
			F06: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS150,  CommonRepr.params.stemStyle.STRAIGHT ],
			F08: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS150, CommonRepr.params.stemStyle.STEPPED ],
			F10: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS150, CommonRepr.params.stemStyle.TAPERED ],
			F12: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS150, CommonRepr.params.stemStyle.STRAIGHT ],
			F14: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS150,  CommonRepr.params.stemStyle.STEPPED ],
			F16: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS150,  CommonRepr.params.stemStyle.TAPERED ],
			F17: [ CommonRepr.params.mountFlange.size.ASME.D3_CLASS150,  CommonRepr.params.stemStyle.TAPERED ],
			F18: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS150,  CommonRepr.params.stemStyle.STRAIGHT ],
			F19: [ CommonRepr.params.mountFlange.size.ASME.D4_CLASS150,  CommonRepr.params.stemStyle.STRAIGHT ],

			F20: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS300,   CommonRepr.params.stemStyle.STEPPED ],
			F21: [ CommonRepr.params.mountFlange.size.ASME.D4_CLASS150,   CommonRepr.params.stemStyle.TAPERED ],
			F22: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS300,   CommonRepr.params.stemStyle.TAPERED ],
			F23: [ CommonRepr.params.mountFlange.size.ASME.D075_CLASS300, CommonRepr.params.stemStyle.TAPERED ],
			F24: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS300,   CommonRepr.params.stemStyle.STRAIGHT ],
			F25: [ CommonRepr.params.mountFlange.size.ASME.D6_CLASS150,   CommonRepr.params.stemStyle.TAPERED ],
			F26: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS300,  CommonRepr.params.stemStyle.STEPPED ],
			F28: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS300,  CommonRepr.params.stemStyle.TAPERED ],
			F30: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS300,  CommonRepr.params.stemStyle.STRAIGHT ],
			F32: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS300,   CommonRepr.params.stemStyle.STEPPED ],
			F34: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS300,   CommonRepr.params.stemStyle.TAPERED ],
			F36: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS300,   CommonRepr.params.stemStyle.STRAIGHT ],

			F38: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS600,  CommonRepr.params.stemStyle.STEPPED ],
			F40: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS600,  CommonRepr.params.stemStyle.TAPERED ],
			F42: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS600,  CommonRepr.params.stemStyle.STRAIGHT ],
			F44: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS600, CommonRepr.params.stemStyle.STEPPED ],
			F48: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS600, CommonRepr.params.stemStyle.TAPERED ],
			F44: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS600, CommonRepr.params.stemStyle.STRAIGHT ],
			F50: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS600,  CommonRepr.params.stemStyle.STEPPED ],
			F52: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS600,  CommonRepr.params.stemStyle.TAPERED ],
			F54: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS600,  CommonRepr.params.stemStyle.STRAIGHT ],

			F56: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS1500,  CommonRepr.params.stemStyle.STEPPED ],
			F58: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS1500,  CommonRepr.params.stemStyle.TAPERED ],
			F60: [ CommonRepr.params.mountFlange.size.ASME.D1_CLASS1500,  CommonRepr.params.stemStyle.STRAIGHT ],
			F62: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS1500, CommonRepr.params.stemStyle.STEPPED ],
			F64: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS1500, CommonRepr.params.stemStyle.TAPERED ],
			F66: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS1500, CommonRepr.params.stemStyle.STRAIGHT ],
			F68: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS1500,  CommonRepr.params.stemStyle.STEPPED ],
			F70: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS1500,  CommonRepr.params.stemStyle.TAPERED ],
			F72: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS1500,  CommonRepr.params.stemStyle.STRAIGHT ],

			F82: [ CommonRepr.params.mountFlange.size.ASME.D15_CLASS2500, CommonRepr.params.stemStyle.TAPERED ],
			F88: [ CommonRepr.params.mountFlange.size.ASME.D2_CLASS2500,  CommonRepr.params.stemStyle.TAPERED ],
		}[str]),

		procConnOfDinFlange: (str) => ({
			D02: [ CommonRepr.params.mountFlange.size.DIN.DN25PN16, CommonRepr.params.stemStyle.STEPPED ],
			D04: [ CommonRepr.params.mountFlange.size.DIN.DN25PN16, CommonRepr.params.stemStyle.TAPERED ],
			D06: [ CommonRepr.params.mountFlange.size.DIN.DN25PN16, CommonRepr.params.stemStyle.STRAIGHT ],
			D08: [ CommonRepr.params.mountFlange.size.DIN.DN25PN40, CommonRepr.params.stemStyle.STEPPED ],
			D10: [ CommonRepr.params.mountFlange.size.DIN.DN25PN40, CommonRepr.params.stemStyle.TAPERED ],
			D12: [ CommonRepr.params.mountFlange.size.DIN.DN25PN40, CommonRepr.params.stemStyle.STRAIGHT ],
			D14: [ CommonRepr.params.mountFlange.size.DIN.DN40PN16, CommonRepr.params.stemStyle.STEPPED ],
			D16: [ CommonRepr.params.mountFlange.size.DIN.DN40PN16, CommonRepr.params.stemStyle.TAPERED ],
			D18: [ CommonRepr.params.mountFlange.size.DIN.DN40PN16, CommonRepr.params.stemStyle.STRAIGHT ],
			D20: [ CommonRepr.params.mountFlange.size.DIN.DN40PN40, CommonRepr.params.stemStyle.STEPPED ],
			D22: [ CommonRepr.params.mountFlange.size.DIN.DN40PN40, CommonRepr.params.stemStyle.TAPERED ],
			D24: [ CommonRepr.params.mountFlange.size.DIN.DN40PN40, CommonRepr.params.stemStyle.STRAIGHT ],
			D28: [ CommonRepr.params.mountFlange.size.DIN.DN50PN40, CommonRepr.params.stemStyle.TAPERED ],
			D33: [ CommonRepr.params.mountFlange.size.DIN.DN50PN40, CommonRepr.params.stemStyle.STRAIGHT ],
			D40: [ CommonRepr.params.mountFlange.size.DIN.DN20PN16, CommonRepr.params.stemStyle.STEPPED ],
			D46: [ CommonRepr.params.mountFlange.size.DIN.DN50PN16, CommonRepr.params.stemStyle.TAPERED ],
			D66: [ CommonRepr.params.mountFlange.size.DIN.DN25PN63_100, CommonRepr.params.stemStyle.TAPERED ],
			D78: [ CommonRepr.params.mountFlange.size.DIN.DN50PN100, CommonRepr.params.stemStyle.TAPERED ],
			D83: [ CommonRepr.params.mountFlange.size.DIN.DN100PN16, CommonRepr.params.stemStyle.TAPERED ],
		}[str]),

		procConnOfWeldIn: (str) => ({
			E01: [ CommonRepr.params.mountWeld.pipeSizeDIN43772.DIN_24, CommonRepr.params.stemStyle.TAPERED ],
			E02: [ CommonRepr.params.mountWeld.pipeSizeDIN43772.DIN_24, CommonRepr.params.stemStyle.TAPERED ],
			E03: [ CommonRepr.params.mountWeld.pipeSizeDIN43772.DIN_24, CommonRepr.params.stemStyle.TAPERED ],
			E04: [ CommonRepr.params.mountWeld.pipeSizeDIN43772.DIN_24, CommonRepr.params.stemStyle.TAPERED ],
			E05: [ CommonRepr.params.mountWeld.pipeSizeDIN43772.DIN_24, CommonRepr.params.stemStyle.TAPERED ],
		}[str]),

		headLen: (str) => ({
			A: 60,    B: 75,    C: 100,    D: 125,    E: 150,    F: 175,
			G: 200,   H: 225,   J: 80,     K: 40,     L: 50,     M: 135,
		}[str]),

		instrConn: (str) => ({
			A: CommonRepr.params.mountThread.parallelThr.M24x15,
			B: CommonRepr.params.mountThread.taperedThr.BSPT05,
			C: CommonRepr.params.mountThread.parallelThr.BSPF05,
			D: CommonRepr.params.mountThread.taperedThr.ANPT05,
			E: CommonRepr.params.mountThread.taperedThr.API05,
			F: CommonRepr.params.mountThread.parallelThr.BSPF075,
			J: CommonRepr.params.mountThread.parallelThr.M20x15,
			K: CommonRepr.params.mountThread.parallelThr.M27x15,
			L: CommonRepr.params.mountThread.parallelThr.M22x15,
			M: CommonRepr.params.mountThread.parallelThr.M24x2,
			P: CommonRepr.params.mountThread.parallelThr.NPSM05,
			R: CommonRepr.params.mountThread.taperedThr.NPT075,
			T: CommonRepr.params.mountThread.parallelThr.M18x15,
		}[str]),
	},

	R0096: {}, // to-do
};

module.exports = CommonRepr;