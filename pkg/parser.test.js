const parser = require("./parser.js");

describe("Detection of model", () => {

	test("D01", () => {
		const input = "D01D5CT46ADN000";
		const want = parser.ThermowellModels.modelD01;
		const got = parser.ThermowellParser.detectModel(input);
		expect(got).toBe(want);
	});

	test("114C", () => {
		const input = "  114CM0355VAR1SC100AWR5C02Q5R16R60TR \ Re";
		const want = parser.ThermowellModels.model114C;
		const got = parser.ThermowellParser.detectModel(input);
		expect(got).toBe(want);
	});

	test("0096", () => {
		const input = "096-Y-0350-T98";
		const want = parser.ThermowellModels.model0096;
		const got = parser.ThermowellParser.detectModel(input);
		expect(got).toBe(want);
	});

	test("bad D01", () => {
		const input = "thermowell D01D5CT46ADN000";
		const want = parser.ThermowellModels.modelUnknown;
		const got = parser.ThermowellParser.detectModel(input);
		expect(got).toBe(want);
	});

	test("bad 114C", () => {
		const input = "ll4CM0355VAR1SC100AWR5C02Q5R16R60TR \ Re";
		const want = parser.ThermowellModels.modelUnknown;
		const got = parser.ThermowellParser.detectModel(input);
		expect(got).toBe(want);
	});
	
	test("bad 0096", () => {
		const input = "009b-Y-0350-T98";
		const want = parser.ThermowellModels.modelUnknown;
		const got = parser.ThermowellParser.detectModel(input);
		expect(got).toBe(want);
	});
});



describe("Parsing option list", () => {

	test("Options of 114C and 0096", () => {
		const input = " , Q17Q5Q73 R06TRR01R05, R07m523";
		const want = [
			{ sym: "Q", num: 17 },
			{ sym: "Q", num: 5},
			{ sym: "Q", num: 73},
			{ sym: "R", num: 6},
			{ sym: "TR", num: 0},
			{ sym: "R", num: 1},
			{ sym: "R", num: 5},
			{ sym: "R", num: 7},
			{ sym: "M", num: 523},
		]
		const got = parser.ThermowellParser.parseOptions(input);
		expect(got).toEqual(want);
	});
});



describe("Parsing 114C", () => {

	test("Parsing 114C without options", () => {
		const input = "114CM0355VAR1SC100A";
		const got = parser.ThermowellParser.parse114C(input)
		const want = {
			model: '114C',
			unit: 'M',
			immerLen: '0355',
			mntTyp: 'V',
			procConn: 'AR',
			stemStyle: '1',
			mater: 'SC',
			headLen: '100',
			instrCon: 'A',
			optionsList: []
		};
		expect(got).toEqual(want);
	});

	test("Parsing 114C with options", () => {
		const input = "114CM0355VAR1SC100AWR5C02Q5R16R60TR \ ";
		const got = parser.ThermowellParser.parse114C(input)
		const want = {
			model: '114C',
			unit: 'M',
			immerLen: '0355',
			mntTyp: 'V',
			procConn: 'AR',
			stemStyle: '1',
			mater: 'SC',
			headLen: '100',
			instrCon: 'A',
			optionsList: [
				{ sym: 'WR', num: 5 },
				{ sym: 'C', num: 2 },
				{ sym: 'Q', num: 5 },
				{ sym: 'R', num: 16 },
				{ sym: 'R', num: 60 },
				{ sym: 'TR', num: 0 }
			]
		};
		expect(got).toEqual(want);
	});
});