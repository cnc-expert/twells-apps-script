const PARAMS = {
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

class CommonRepr {

	/**
	 * Build common representation object of parsed 114C order code.
	 * 
	 * @param  {object}  parsedObj  Parsed object.
	 * @return {object}  A common representation object.
	 */
	static represent114C(parsedObj) {
		const twell = new CommonRepr();

		twell.model = PARAMS.model.M_114C;
		twell.unit = CommonRepr.decoders.R114C.unit(parsedObj.unit);
		twell.immersionLen = +parsedObj.immerLen;
		twell.style = CommonRepr.decoders.R114C.style(parsedObj.mountStyle);
		twell.procConn = CommonRepr.decoders.R114C.procConn(twell.style, parsedObj.procConn);
		twell.stemStyle = CommonRepr.decoders.R114C.stemStyle(parsedObj.stemStyle);
		twell.material = CommonRepr.decoders.R114C.material(parsedObj.material);
		twell.headLen = +parsedObj.headLen;
		twell.instrConn = CommonRepr.decoders.R114C.instrConn(parsedObj.instrConn);
		
		twell.options = {};
		twell.options.flangeType = CommonRepr.decoders.R114C.flangeType(parsedObj.mountStyle);
		twell.options._optsList = parsedObj.options;  // to-do: decode the list

		return twell;
	}

	/**
	 * Build common representation object of parsed D01 order code.
	 * 
	 * @param  {object}  parsedObj  Parsed object.
	 * @return {object}  A common representation object.
	 */
	static representD01(parsedObj) {
		const twell = new CommonRepr();

		twell.model = PARAMS.model.M_D01;
		twell.unit = PARAMS.dimUnit.MM;
		twell.immersionLen = CommonRepr.decoders.D01.immersionLen(parsedObj.immerLen);
		twell.style = CommonRepr.decoders.D01.style(parsedObj.mountStyle);
		const sizeAndStem = CommonRepr.decoders.D01.procConn(parsedObj.mountStyle);
		[ twell.procConn, twell.stemStyle ] = sizeAndStem;
		twell.material = CommonRepr.decoders.D01.material(parsedObj.material);
		twell.headLen = CommonRepr.decoders.D01.headLen(parsedObj.headLen);
		twell.instrConn = CommonRepr.decoders.D01.instrConn(parsedObj.instrConn);

		twell.options = {};
		twell.options.flangeType = PARAMS.mountFlange.type.PART_WELD; // Default. Depends on R07 option.
		twell.options._optsSet = parsedObj.optsSet;  // to-do: decode the set.

		return twell;
	}

	/**
	 * Build common representation object of parsed 0096 order code.
	 * 
	 * @param  {object}  parsedObj  Parsed object.
	 * @return {object}  A common representation object.
	 */
	static represent0096(parsedObj) {
		const twell = new CommonRepr();

		twell.model = PARAMS.model.M_0096;
		twell.unit = PARAMS.dimUnit.MM;
		twell.immersionLen = +parsedObj.immerLen;
		twell.style = CommonRepr.decoders.D01.style(parsedObj.mountStyle);
		const sizeAndStem = CommonRepr.decoders.D01.procConn(parsedObj.mountStyle);
		[ twell.procConn, twell.stemStyle ] = sizeAndStem;
		twell.material = CommonRepr.decoders.D01.material(parsedObj.material);
		twell.headLen = +parsedObj.headLen;
		twell.instrConn = CommonRepr.decoders.D01.instrConn(parsedObj.instrConn);

		twell.options = {};
		twell.options.flangeType = PARAMS.mountFlange.type.PART_WELD; // Default. Depends on R07 option.
		twell.options._optsList = parsedObj.options;  // to-do: decode the list.

		return twell;
	}

	convertTo114C() {
		// to-do
		return "this is 114C twell";
	}

	convertToD01() {
		// to-do
		return "this is D01 twell";
	}

	convertTo0096() {
		const twell = new CommonRepr();
		twell.model = PARAMS.model.M_0096;

		// to-do
		return `0096-`;
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

CommonRepr.coders = {
	R114C: {
		// to-do
	},

	D01: {
		// to-do
	}
}

CommonRepr.decoders = {
	R114C: {
		unit: (str) => ({
			M: PARAMS.dimUnit.MM,
			E: PARAMS.dimUnit.INCH,
		}[str]),

		style: (str) => ({
			T: PARAMS.mountStyle.THREADED,
			P: PARAMS.mountStyle.FLANGE,
			F: PARAMS.mountStyle.FLANGE,
			G: PARAMS.mountStyle.FLANGE,
			E: PARAMS.mountStyle.FLANGE,
			V: PARAMS.mountStyle.VAN_STONE,
			W: PARAMS.mountStyle.SOCKET_WELD,
			D: PARAMS.mountStyle.WELD_IN,
		}[str]),

		flangeType: (str) => ({
			P: PARAMS.mountFlange.type.PART_WELD,
			F: PARAMS.mountFlange.type.FULL_WELD,
			G: PARAMS.mountFlange.type.FORGING,
			E: PARAMS.mountFlange.type.THREADED,
		}[str]),

		procConnOfThreaded: (str) => ({
			AA: PARAMS.mountThread.taperedThr.ANPT05,
			AB: PARAMS.mountThread.taperedThr.ANPT075,
			AC: PARAMS.mountThread.taperedThr.ANPT1,
			AD: PARAMS.mountThread.taperedThr.ANPT15,
			AE: PARAMS.mountThread.taperedThr.BSPT05,
			AF: PARAMS.mountThread.taperedThr.BSPT075,
			AG: PARAMS.mountThread.taperedThr.BSPT1,
			DA: PARAMS.mountThread.parallelThr.M20x15,
			DB: PARAMS.mountThread.parallelThr.M24x15,
			DC: PARAMS.mountThread.parallelThr.M27x2,
			DD: PARAMS.mountThread.parallelThr.M33x2,
			DE: PARAMS.mountThread.parallelThr.BSPF05,
			DF: PARAMS.mountThread.parallelThr.BSPF075,
			DG: PARAMS.mountThread.parallelThr.BSPF1,
		}[str]),

		procConnOfFlange: (str) => ({
			AA: PARAMS.mountFlange.size.ASME.D1_CLASS150,
			AB: PARAMS.mountFlange.size.ASME.D15_CLASS150,
			AC: PARAMS.mountFlange.size.ASME.D2_CLASS150,
			AD: PARAMS.mountFlange.size.ASME.D3_CLASS150,
			AE: PARAMS.mountFlange.size.ASME.D4_CLASS150,
			AF: PARAMS.mountFlange.size.ASME.D6_CLASS150,
			AG: PARAMS.mountFlange.size.ASME.D075_CLASS300,
			AH: PARAMS.mountFlange.size.ASME.D1_CLASS300,
			AJ: PARAMS.mountFlange.size.ASME.D15_CLASS300,
			AK: PARAMS.mountFlange.size.ASME.D2_CLASS300,
			AL: PARAMS.mountFlange.size.ASME.D1_CLASS400_600,
			AM: PARAMS.mountFlange.size.ASME.D15_CLASS400_600,
			AN: PARAMS.mountFlange.size.ASME.D2_CLASS400_600,
			AP: PARAMS.mountFlange.size.ASME.D1_CLASS900_1500,
			AQ: PARAMS.mountFlange.size.ASME.D15_CLASS900_1500,
			AR: PARAMS.mountFlange.size.ASME.D2_CLASS900_1500,
			AS: PARAMS.mountFlange.size.ASME.D1_CLASS2500,
			AT: PARAMS.mountFlange.size.ASME.D15_CLASS2500,
			AU: PARAMS.mountFlange.size.ASME.D2_CLASS2500,
			AV: PARAMS.mountFlange.size.ASME.D3_CLASS300,
			AW: PARAMS.mountFlange.size.ASME.D3_CLASS400_600,
			AX: PARAMS.mountFlange.size.ASME.D3_CLASS900,
			AY: PARAMS.mountFlange.size.ASME.D3_CLASS1500,
			AZ: PARAMS.mountFlange.size.ASME.D3_CLASS2500,

			FA: PARAMS.mountFlange.size.DIN.DN20PN25_6,
			FE: PARAMS.mountFlange.size.DIN.DN20PN10_40,
			FG: PARAMS.mountFlange.size.DIN.DN20PN63_100,
			GA: PARAMS.mountFlange.size.DIN.DN25PN25_6,
			GE: PARAMS.mountFlange.size.DIN.DN25PN10_40,
			GG: PARAMS.mountFlange.size.DIN.DN25PN63_100,
			// GH: PARAMS.mountFlange.size.DIN.DN25PN160, // absent since rev.AS
			// GJ: PARAMS.mountFlange.size.DIN.DN25PN250, // absent since rev.AS
			// GK: PARAMS.mountFlange.size.DIN.DN25PN320, // absent since rev.AS
			// GL: PARAMS.mountFlange.size.DIN.DN25PN400, // absent since rev.AS
			JA: PARAMS.mountFlange.size.DIN.DN40PN25_6,
			JE: PARAMS.mountFlange.size.DIN.DN40PN10_40,
			JG: PARAMS.mountFlange.size.DIN.DN40PN63_100,
			// JH: PARAMS.mountFlange.size.DIN.DN40PN160, // absent since rev.AS
			// JJ: PARAMS.mountFlange.size.DIN.DN40PN250, // absent since rev.AS
			// JK: PARAMS.mountFlange.size.DIN.DN40PN320, // absent since rev.AS
			// JL: PARAMS.mountFlange.size.DIN.DN40PN400, // absent since rev.AS
			KA: PARAMS.mountFlange.size.DIN.DN50PN25_6,
			KC: PARAMS.mountFlange.size.DIN.DN50PN10_16,
			KE: PARAMS.mountFlange.size.DIN.DN50PN25_40,
			KF: PARAMS.mountFlange.size.DIN.DN50PN63,
			KG: PARAMS.mountFlange.size.DIN.DN50PN100,
			// KH: PARAMS.mountFlange.size.DIN.DN50PN160, // absent since rev.AS
			// KJ: PARAMS.mountFlange.size.DIN.DN50PN250, // absent since rev.AS
			// KK: PARAMS.mountFlange.size.DIN.DN50PN320, // absent since rev.AS
			// KL: PARAMS.mountFlange.size.DIN.DN50PN400, // absent since rev.AS
			LA: PARAMS.mountFlange.size.DIN.DN65PN25_6,
			LC: PARAMS.mountFlange.size.DIN.DN65PN10_16,
			LE: PARAMS.mountFlange.size.DIN.DN65PN25_40,
			LF: PARAMS.mountFlange.size.DIN.DN65PN63,
			LG: PARAMS.mountFlange.size.DIN.DN65PN100,
			// LH: PARAMS.mountFlange.size.DIN.DN65PN160, // absent since rev.AS
			// LJ: PARAMS.mountFlange.size.DIN.DN65PN250, // absent since rev.AS
			// LK: PARAMS.mountFlange.size.DIN.DN65PN320, // absent since rev.AS
			// LL: PARAMS.mountFlange.size.DIN.DN65PN400, // absent since rev.AS
			MA: PARAMS.mountFlange.size.DIN.DN80PN25_6,
			MC: PARAMS.mountFlange.size.DIN.DN80PN10_16,
			ME: PARAMS.mountFlange.size.DIN.DN80PN25_40,
			MF: PARAMS.mountFlange.size.DIN.DN80PN63,
			MG: PARAMS.mountFlange.size.DIN.DN80PN100,
			// MH: PARAMS.mountFlange.size.DIN.DN80PN160, // absent since rev.AS
			// MJ: PARAMS.mountFlange.size.DIN.DN80PN250, // absent since rev.AS
			// MK: PARAMS.mountFlange.size.DIN.DN80PN320, // absent since rev.AS
			// ML: PARAMS.mountFlange.size.DIN.DN80PN400, // absent since rev.AS
			NA: PARAMS.mountFlange.size.DIN.DN100PN25_6,
			NC: PARAMS.mountFlange.size.DIN.DN100PN10_16,
			NE: PARAMS.mountFlange.size.DIN.DN100PN25_40,
			NF: PARAMS.mountFlange.size.DIN.DN100PN63,
			NG: PARAMS.mountFlange.size.DIN.DN100PN100,
			// NH: PARAMS.mountFlange.size.DIN.DN100PN160, // absent since rev.AS
			// NJ: PARAMS.mountFlange.size.DIN.DN100PN250, // absent since rev.AS
			// NK: PARAMS.mountFlange.size.DIN.DN100PN320, // absent since rev.AS
			// NL: PARAMS.mountFlange.size.DIN.DN100PN400, // absent since rev.AS
		}[str]),

		procConnOfVanStone: (str) => ({
			AA: PARAMS.mountFlange.size.ASME.D1_CLASS150,
			AB: PARAMS.mountFlange.size.ASME.D15_CLASS150,
			AC: PARAMS.mountFlange.size.ASME.D2_CLASS150,
			AH: PARAMS.mountFlange.size.ASME.D1_CLASS300,
			AJ: PARAMS.mountFlange.size.ASME.D15_CLASS300,
			AK: PARAMS.mountFlange.size.ASME.D2_CLASS300,

			AL: PARAMS.mountFlange.size.ASME.D1_CLASS400_600,
			AM: PARAMS.mountFlange.size.ASME.D15_CLASS400_600,
			AN: PARAMS.mountFlange.size.ASME.D2_CLASS400_600,

			AP: PARAMS.mountFlange.size.ASME.D1_CLASS900_1500,
			AQ: PARAMS.mountFlange.size.ASME.D15_CLASS900_1500,
			AR: PARAMS.mountFlange.size.ASME.D2_CLASS900_1500,

			AS: PARAMS.mountFlange.size.ASME.D1_CLASS2500,
			AT: PARAMS.mountFlange.size.ASME.D15_CLASS2500,
			AU: PARAMS.mountFlange.size.ASME.D2_CLASS2500,
		}[str]),

		procConnOfSocketWeld: (str) => ({
			AA: PARAMS.mountWeld.pipeSizeInch.D075,
			AB: PARAMS.mountWeld.pipeSizeInch.D1,
			AC: PARAMS.mountWeld.pipeSizeInch.D125,
			AD: PARAMS.mountWeld.pipeSizeInch.D15,
		}[str]),

		procConnOfWeldIn: (str) => ({
			AA: PARAMS.mountWeld.pipeSizeInch.D075,
			AB: PARAMS.mountWeld.pipeSizeInch.D1,
			AC: PARAMS.mountWeld.pipeSizeInch.D125,
			AD: PARAMS.mountWeld.pipeSizeInch.D15,
			AE: PARAMS.mountWeld.pipeSizeInch.CUSTOM,

			DA: PARAMS.mountWeld.pipeSizeDIN43772.DIN_18,
			DB: PARAMS.mountWeld.pipeSizeDIN43772.DIN_24,
			DC: PARAMS.mountWeld.pipeSizeDIN43772.DIN_26_12,
			DD: PARAMS.mountWeld.pipeSizeDIN43772.DIN_26_15,
			DE: PARAMS.mountWeld.pipeSizeDIN43772.DIN_32,
			DH: PARAMS.mountWeld.pipeSizeDIN43772.CUSTOM,
		}[str]),

		procConn: (type, procConnCode) => {
			switch (type) {
				case PARAMS.mountStyle.THREADED:
					return CommonRepr.decoders.R114C.procConnOfThreaded(procConnCode);
				case PARAMS.mountStyle.FLANGE:
					return CommonRepr.decoders.R114C.procConnOfFlange(procConnCode);
				case PARAMS.mountStyle.VAN_STONE:
					return CommonRepr.decoders.R114C.procConnOfVanStone(procConnCode);
				case PARAMS.mountStyle.SOCKET_WELD:
					return CommonRepr.decoders.R114C.procConnOfSocketWeld(procConnCode);
				case PARAMS.mountStyle.WELD_IN:
					return CommonRepr.decoders.R114C.procConnOfWeldIn(procConnCode);
			}
		},

		stemStyle: (str) => ({
			1: PARAMS.stemStyle.STRAIGHT,
			2: PARAMS.stemStyle.TAPERED,
			3: PARAMS.stemStyle.STEPPED,
			T: PARAMS.stemStyle.TWISTED,
		}[str]),

		material: (str) => ({
			SF: PARAMS.material.SST_304_304L,
			SK: PARAMS.material.SST_304_304L_PTFE,
			SL: PARAMS.material.SST_310,
			SC: PARAMS.material.SST_316_316L,
			SD: PARAMS.material.SST_316_316L_NORSOK,
			SJ: PARAMS.material.SST_316_316L_PFA,
			SH: PARAMS.material.SST_316_316L_TANTALUM,
			SG: PARAMS.material.SST_316Ti,
			SM: PARAMS.material.SST_321,
			SN: PARAMS.material.SST_321H,
			SP: PARAMS.material.SST_347,
			SR: PARAMS.material.SST_904L,
			AG: PARAMS.material.alloy20,
			AH: PARAMS.material.alloy400,
			AJ: PARAMS.material.alloy400_SST304_304L,
			AK: PARAMS.material.alloy600,
			AL: PARAMS.material.alloy600_SST304_304L,
			AM: PARAMS.material.alloy601,
			AN: PARAMS.material.alloy625,
			AP: PARAMS.material.alloy800,
			AQ: PARAMS.material.alloy800H_800HT,
			AR: PARAMS.material.alloy825,
			AB: PARAMS.material.alloyB3,
			AU: PARAMS.material.alloyC22,
			AE: PARAMS.material.alloyC22_SST304_304L,
			AF: PARAMS.material.alloyC22_SST316_316L,
			AC: PARAMS.material.alloyС276,
			AD: PARAMS.material.alloyС4_SST304_304L,
			AS: PARAMS.material.alloyF44Mo6,
			CS: PARAMS.material.carbon,
			CA: PARAMS.material.CrMo_B11_F11,
			CB: PARAMS.material.CrMo_B22_F22,
			CC: PARAMS.material.CrMo_F91,
			DU: PARAMS.material.duplex2205,
			DV: PARAMS.material.duplex2205_NORSOK,
			MO: PARAMS.material.Mo,
			NK: PARAMS.material.Ni,
			DS: PARAMS.material.superDuplex,
			DT: PARAMS.material.superDuplex_NORSOK,
			TT: PARAMS.material.Ti,
		}[str]),

		instrConn: (str) => ({
			A: PARAMS.mountThread.taperedThr.ANPT05,
			B: PARAMS.mountThread.parallelThr.NPSM05,
			C: PARAMS.mountThread.taperedThr.ANPT075,
			D: PARAMS.mountThread.parallelThr.M18x15,
			E: PARAMS.mountThread.parallelThr.M20x15,
			F: PARAMS.mountThread.parallelThr.M24x15,
			G: PARAMS.mountThread.parallelThr.BSPF05,
			H: PARAMS.mountThread.parallelThr.BSPF075,
			J: PARAMS.mountThread.parallelThr.M27x2,
			K: PARAMS.mountThread.parallelThr.M14x15,
		}[str]),
	},

	D01: {

		material: (str) => ({
			B: PARAMS.material.SST_304,
			E: PARAMS.material.SST_304L,
			M: PARAMS.material.SST_304_PTFE,
			V: PARAMS.material.SST_310,
			A: PARAMS.material.SST_316,
			D: PARAMS.material.SST_316L,
			U: PARAMS.material.SST_316_TANTALUM,
			Y: PARAMS.material.SST_316Ti,
			W: PARAMS.material.SST_321,
			F: PARAMS.material.alloy20,
			G: PARAMS.material.alloy400,
			H: PARAMS.material.alloy600,
			L: PARAMS.material.alloyB,
			J: PARAMS.material.alloyС276,
			C: PARAMS.material.carbon,
			Z: PARAMS.material.CrMo_B11_F11,
			P: PARAMS.material.CrMo_B22_F22,
			K: PARAMS.material.Mo,
			R: PARAMS.material.Ni,
			X: PARAMS.material.special,
			T: PARAMS.material.Ti,
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
			T: PARAMS.mountStyle.THREADED,
			W: PARAMS.mountStyle.SOCKET_WELD,
			F: PARAMS.mountStyle.FLANGE,
			D: PARAMS.mountStyle.FLANGE,
			E: PARAMS.mountStyle.WELD_IN,
		}[char]),

		procConn: (procConnCode) => {
			const type = procConnCode[0];
			switch (type) {
				case "T":
					return CommonRepr.decoders.D01.procConnOfThreaded(procConnCode);
				case "W":
					return CommonRepr.decoders.D01.procConnOfSocketWeld(procConnCode);
				case "F":
					return CommonRepr.decoders.D01.procConnOfAsmeFlange(procConnCode);
				case "D":
					return CommonRepr.decoders.D01.procConnOfDinFlange(procConnCode);
				case "E":
					return CommonRepr.decoders.D01.procConnOfWeldIn(procConnCode);
			}
		},

		procConnOfThreaded: (str) => ({
			T02: [ PARAMS.mountThread.taperedThr.BSPT05,  PARAMS.stemStyle.STEPPED ],
			T04: [ PARAMS.mountThread.taperedThr.BSPT075, PARAMS.stemStyle.STEPPED ],
			T06: [ PARAMS.mountThread.taperedThr.BSPT1,   PARAMS.stemStyle.STEPPED ],
			T08: [ PARAMS.mountThread.taperedThr.BSPT05,  PARAMS.stemStyle.TAPERED ],
			T10: [ PARAMS.mountThread.taperedThr.BSPT075, PARAMS.stemStyle.TAPERED ],
			T12: [ PARAMS.mountThread.taperedThr.BSPT1,   PARAMS.stemStyle.TAPERED ],
			T14: [ PARAMS.mountThread.taperedThr.BSPT05,  PARAMS.stemStyle.STRAIGHT ],
			T16: [ PARAMS.mountThread.taperedThr.BSPT075, PARAMS.stemStyle.STRAIGHT ],
			T18: [ PARAMS.mountThread.taperedThr.BSPT1,   PARAMS.stemStyle.STRAIGHT ],

			T20: [ PARAMS.mountThread.parallelThr.BSPF05,  PARAMS.stemStyle.STEPPED ],
			T22: [ PARAMS.mountThread.parallelThr.BSPF075, PARAMS.stemStyle.STEPPED ],
			T24: [ PARAMS.mountThread.parallelThr.BSPF1,   PARAMS.stemStyle.STEPPED ],
			T26: [ PARAMS.mountThread.parallelThr.BSPF05,  PARAMS.stemStyle.TAPERED ],
			T28: [ PARAMS.mountThread.parallelThr.BSPF075, PARAMS.stemStyle.TAPERED ],
			T30: [ PARAMS.mountThread.parallelThr.BSPF1,   PARAMS.stemStyle.TAPERED ],
			T32: [ PARAMS.mountThread.parallelThr.BSPF05,  PARAMS.stemStyle.STRAIGHT ],
			T34: [ PARAMS.mountThread.parallelThr.BSPF075, PARAMS.stemStyle.STRAIGHT ],
			T36: [ PARAMS.mountThread.parallelThr.BSPF1,   PARAMS.stemStyle.STRAIGHT ],

			T38: [ PARAMS.mountThread.taperedThr.ANPT05,  PARAMS.stemStyle.STEPPED ],
			T40: [ PARAMS.mountThread.taperedThr.ANPT075, PARAMS.stemStyle.STEPPED ],
			T42: [ PARAMS.mountThread.taperedThr.ANPT1,   PARAMS.stemStyle.STEPPED ],
			T44: [ PARAMS.mountThread.taperedThr.ANPT05,  PARAMS.stemStyle.TAPERED ],
			T46: [ PARAMS.mountThread.taperedThr.ANPT075, PARAMS.stemStyle.TAPERED ],
			T48: [ PARAMS.mountThread.taperedThr.ANPT1,   PARAMS.stemStyle.TAPERED ],
			T50: [ PARAMS.mountThread.taperedThr.ANPT05,  PARAMS.stemStyle.STRAIGHT ],
			T52: [ PARAMS.mountThread.taperedThr.ANPT075, PARAMS.stemStyle.STRAIGHT ],
			T54: [ PARAMS.mountThread.taperedThr.ANPT1,   PARAMS.stemStyle.STRAIGHT ],

			T56: [ PARAMS.mountThread.taperedThr.API05,  PARAMS.stemStyle.STEPPED ],
			T58: [ PARAMS.mountThread.taperedThr.API075, PARAMS.stemStyle.STEPPED ],
			T60: [ PARAMS.mountThread.taperedThr.API1,   PARAMS.stemStyle.STEPPED ],
			T62: [ PARAMS.mountThread.taperedThr.API05,  PARAMS.stemStyle.TAPERED ],
			T64: [ PARAMS.mountThread.taperedThr.API075, PARAMS.stemStyle.TAPERED ],
			T66: [ PARAMS.mountThread.taperedThr.API1,   PARAMS.stemStyle.TAPERED ],
			T68: [ PARAMS.mountThread.taperedThr.API05,  PARAMS.stemStyle.STRAIGHT ],
			T70: [ PARAMS.mountThread.taperedThr.API075, PARAMS.stemStyle.STRAIGHT ],
			T72: [ PARAMS.mountThread.taperedThr.API1,   PARAMS.stemStyle.STRAIGHT ],
			
			T74: [ PARAMS.mountThread.parallelThr.M24x15, PARAMS.stemStyle.STEPPED ],
			T90: [ PARAMS.mountThread.parallelThr.M24x15, PARAMS.stemStyle.TAPERED ],
			T93: [ PARAMS.mountThread.parallelThr.M27x2,  PARAMS.stemStyle.TAPERED ],
			T95: [ PARAMS.mountThread.parallelThr.M33x2,  PARAMS.stemStyle.TAPERED ],
			T98: [ PARAMS.mountThread.parallelThr.M20x15, PARAMS.stemStyle.TAPERED ],
		}[str]),

		procConnOfSocketWeld: (str) => ({
			W02: [ PARAMS.mountWeld.pipeSizeInch.D075, PARAMS.stemStyle.STEPPED ],
			W04: [ PARAMS.mountWeld.pipeSizeInch.D1,   PARAMS.stemStyle.STEPPED ],
			W06: [ PARAMS.mountWeld.pipeSizeInch.D125, PARAMS.stemStyle.STEPPED ],
			W08: [ PARAMS.mountWeld.pipeSizeInch.D15,  PARAMS.stemStyle.STEPPED ],
			W10: [ PARAMS.mountWeld.pipeSizeInch.D075, PARAMS.stemStyle.TAPERED ],
			W12: [ PARAMS.mountWeld.pipeSizeInch.D1,   PARAMS.stemStyle.TAPERED ],
			W14: [ PARAMS.mountWeld.pipeSizeInch.D125, PARAMS.stemStyle.TAPERED ],
			W16: [ PARAMS.mountWeld.pipeSizeInch.D15,  PARAMS.stemStyle.TAPERED ],
			W18: [ PARAMS.mountWeld.pipeSizeInch.D075, PARAMS.stemStyle.STRAIGHT ],
			W20: [ PARAMS.mountWeld.pipeSizeInch.D1,   PARAMS.stemStyle.STRAIGHT ],
			W22: [ PARAMS.mountWeld.pipeSizeInch.D125, PARAMS.stemStyle.STRAIGHT ],
			W24: [ PARAMS.mountWeld.pipeSizeInch.D15,  PARAMS.stemStyle.STRAIGHT ],
		}[str]),

		procConnOfAsmeFlange: (str) => ({
			F02: [ PARAMS.mountFlange.size.ASME.D1_CLASS150,  PARAMS.stemStyle.STEPPED ],
			F04: [ PARAMS.mountFlange.size.ASME.D1_CLASS150,  PARAMS.stemStyle.TAPERED ],
			F06: [ PARAMS.mountFlange.size.ASME.D1_CLASS150,  PARAMS.stemStyle.STRAIGHT ],
			F08: [ PARAMS.mountFlange.size.ASME.D15_CLASS150, PARAMS.stemStyle.STEPPED ],
			F10: [ PARAMS.mountFlange.size.ASME.D15_CLASS150, PARAMS.stemStyle.TAPERED ],
			F12: [ PARAMS.mountFlange.size.ASME.D15_CLASS150, PARAMS.stemStyle.STRAIGHT ],
			F14: [ PARAMS.mountFlange.size.ASME.D2_CLASS150,  PARAMS.stemStyle.STEPPED ],
			F16: [ PARAMS.mountFlange.size.ASME.D2_CLASS150,  PARAMS.stemStyle.TAPERED ],
			F17: [ PARAMS.mountFlange.size.ASME.D3_CLASS150,  PARAMS.stemStyle.TAPERED ],
			F18: [ PARAMS.mountFlange.size.ASME.D2_CLASS150,  PARAMS.stemStyle.STRAIGHT ],
			F19: [ PARAMS.mountFlange.size.ASME.D4_CLASS150,  PARAMS.stemStyle.STRAIGHT ],

			F20: [ PARAMS.mountFlange.size.ASME.D1_CLASS300,   PARAMS.stemStyle.STEPPED ],
			F21: [ PARAMS.mountFlange.size.ASME.D4_CLASS150,   PARAMS.stemStyle.TAPERED ],
			F22: [ PARAMS.mountFlange.size.ASME.D1_CLASS300,   PARAMS.stemStyle.TAPERED ],
			F23: [ PARAMS.mountFlange.size.ASME.D075_CLASS300, PARAMS.stemStyle.TAPERED ],
			F24: [ PARAMS.mountFlange.size.ASME.D1_CLASS300,   PARAMS.stemStyle.STRAIGHT ],
			F25: [ PARAMS.mountFlange.size.ASME.D6_CLASS150,   PARAMS.stemStyle.TAPERED ],
			F26: [ PARAMS.mountFlange.size.ASME.D15_CLASS300,  PARAMS.stemStyle.STEPPED ],
			F28: [ PARAMS.mountFlange.size.ASME.D15_CLASS300,  PARAMS.stemStyle.TAPERED ],
			F30: [ PARAMS.mountFlange.size.ASME.D15_CLASS300,  PARAMS.stemStyle.STRAIGHT ],
			F32: [ PARAMS.mountFlange.size.ASME.D2_CLASS300,   PARAMS.stemStyle.STEPPED ],
			F34: [ PARAMS.mountFlange.size.ASME.D2_CLASS300,   PARAMS.stemStyle.TAPERED ],
			F36: [ PARAMS.mountFlange.size.ASME.D2_CLASS300,   PARAMS.stemStyle.STRAIGHT ],

			F38: [ PARAMS.mountFlange.size.ASME.D1_CLASS600,  PARAMS.stemStyle.STEPPED ],
			F40: [ PARAMS.mountFlange.size.ASME.D1_CLASS600,  PARAMS.stemStyle.TAPERED ],
			F42: [ PARAMS.mountFlange.size.ASME.D1_CLASS600,  PARAMS.stemStyle.STRAIGHT ],
			F44: [ PARAMS.mountFlange.size.ASME.D15_CLASS600, PARAMS.stemStyle.STEPPED ],
			F48: [ PARAMS.mountFlange.size.ASME.D15_CLASS600, PARAMS.stemStyle.TAPERED ],
			F44: [ PARAMS.mountFlange.size.ASME.D15_CLASS600, PARAMS.stemStyle.STRAIGHT ],
			F50: [ PARAMS.mountFlange.size.ASME.D2_CLASS600,  PARAMS.stemStyle.STEPPED ],
			F52: [ PARAMS.mountFlange.size.ASME.D2_CLASS600,  PARAMS.stemStyle.TAPERED ],
			F54: [ PARAMS.mountFlange.size.ASME.D2_CLASS600,  PARAMS.stemStyle.STRAIGHT ],

			F56: [ PARAMS.mountFlange.size.ASME.D1_CLASS1500,  PARAMS.stemStyle.STEPPED ],
			F58: [ PARAMS.mountFlange.size.ASME.D1_CLASS1500,  PARAMS.stemStyle.TAPERED ],
			F60: [ PARAMS.mountFlange.size.ASME.D1_CLASS1500,  PARAMS.stemStyle.STRAIGHT ],
			F62: [ PARAMS.mountFlange.size.ASME.D15_CLASS1500, PARAMS.stemStyle.STEPPED ],
			F64: [ PARAMS.mountFlange.size.ASME.D15_CLASS1500, PARAMS.stemStyle.TAPERED ],
			F66: [ PARAMS.mountFlange.size.ASME.D15_CLASS1500, PARAMS.stemStyle.STRAIGHT ],
			F68: [ PARAMS.mountFlange.size.ASME.D2_CLASS1500,  PARAMS.stemStyle.STEPPED ],
			F70: [ PARAMS.mountFlange.size.ASME.D2_CLASS1500,  PARAMS.stemStyle.TAPERED ],
			F72: [ PARAMS.mountFlange.size.ASME.D2_CLASS1500,  PARAMS.stemStyle.STRAIGHT ],

			F82: [ PARAMS.mountFlange.size.ASME.D15_CLASS2500, PARAMS.stemStyle.TAPERED ],
			F88: [ PARAMS.mountFlange.size.ASME.D2_CLASS2500,  PARAMS.stemStyle.TAPERED ],
		}[str]),

		procConnOfDinFlange: (str) => ({
			D02: [ PARAMS.mountFlange.size.DIN.DN25PN16, PARAMS.stemStyle.STEPPED ],
			D04: [ PARAMS.mountFlange.size.DIN.DN25PN16, PARAMS.stemStyle.TAPERED ],
			D06: [ PARAMS.mountFlange.size.DIN.DN25PN16, PARAMS.stemStyle.STRAIGHT ],
			D08: [ PARAMS.mountFlange.size.DIN.DN25PN40, PARAMS.stemStyle.STEPPED ],
			D10: [ PARAMS.mountFlange.size.DIN.DN25PN40, PARAMS.stemStyle.TAPERED ],
			D12: [ PARAMS.mountFlange.size.DIN.DN25PN40, PARAMS.stemStyle.STRAIGHT ],
			D14: [ PARAMS.mountFlange.size.DIN.DN40PN16, PARAMS.stemStyle.STEPPED ],
			D16: [ PARAMS.mountFlange.size.DIN.DN40PN16, PARAMS.stemStyle.TAPERED ],
			D18: [ PARAMS.mountFlange.size.DIN.DN40PN16, PARAMS.stemStyle.STRAIGHT ],
			D20: [ PARAMS.mountFlange.size.DIN.DN40PN40, PARAMS.stemStyle.STEPPED ],
			D22: [ PARAMS.mountFlange.size.DIN.DN40PN40, PARAMS.stemStyle.TAPERED ],
			D24: [ PARAMS.mountFlange.size.DIN.DN40PN40, PARAMS.stemStyle.STRAIGHT ],
			D28: [ PARAMS.mountFlange.size.DIN.DN50PN40, PARAMS.stemStyle.TAPERED ],
			D33: [ PARAMS.mountFlange.size.DIN.DN50PN40, PARAMS.stemStyle.STRAIGHT ],
			D40: [ PARAMS.mountFlange.size.DIN.DN20PN16, PARAMS.stemStyle.STEPPED ],
			D46: [ PARAMS.mountFlange.size.DIN.DN50PN16, PARAMS.stemStyle.TAPERED ],
			D66: [ PARAMS.mountFlange.size.DIN.DN25PN63_100, PARAMS.stemStyle.TAPERED ],
			D78: [ PARAMS.mountFlange.size.DIN.DN50PN100, PARAMS.stemStyle.TAPERED ],
			D83: [ PARAMS.mountFlange.size.DIN.DN100PN16, PARAMS.stemStyle.TAPERED ],
		}[str]),

		procConnOfWeldIn: (str) => ({
			E01: [ PARAMS.mountWeld.pipeSizeDIN43772.DIN_24, PARAMS.stemStyle.TAPERED ],
			E02: [ PARAMS.mountWeld.pipeSizeDIN43772.DIN_24, PARAMS.stemStyle.TAPERED ],
			E03: [ PARAMS.mountWeld.pipeSizeDIN43772.DIN_24, PARAMS.stemStyle.TAPERED ],
			E04: [ PARAMS.mountWeld.pipeSizeDIN43772.DIN_24, PARAMS.stemStyle.TAPERED ],
			E05: [ PARAMS.mountWeld.pipeSizeDIN43772.DIN_24, PARAMS.stemStyle.TAPERED ],
		}[str]),

		headLen: (str) => ({
			A: 60,    B: 75,    C: 100,    D: 125,    E: 150,    F: 175,
			G: 200,   H: 225,   J: 80,     K: 40,     L: 50,     M: 135,
		}[str]),

		instrConn: (str) => ({
			A: PARAMS.mountThread.parallelThr.M24x15,
			B: PARAMS.mountThread.taperedThr.BSPT05,
			C: PARAMS.mountThread.parallelThr.BSPF05,
			D: PARAMS.mountThread.taperedThr.ANPT05,
			E: PARAMS.mountThread.taperedThr.API05,
			F: PARAMS.mountThread.parallelThr.BSPF075,
			J: PARAMS.mountThread.parallelThr.M20x15,
			K: PARAMS.mountThread.parallelThr.M27x15,
			L: PARAMS.mountThread.parallelThr.M22x15,
			M: PARAMS.mountThread.parallelThr.M24x2,
			P: PARAMS.mountThread.parallelThr.NPSM05,
			R: PARAMS.mountThread.taperedThr.NPT075,
			T: PARAMS.mountThread.parallelThr.M18x15,
		}[str]),
	},
};

module.exports = CommonRepr;