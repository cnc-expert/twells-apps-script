const parser = require("../pkg/parser.js");

describe("Detection of model", () => {

	test("D01", () => {
		const input = "D01D5CT46ADN000";
		const want = parser.models.M_D01;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	});

	test("114C", () => {
		const input = "  114CM0355VAR1SC100AWR5C02Q5R16R60TR \ Re";
		const want = parser.models.M_114C;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	});

	test("0096", () => {
		const input = "096-Y-0350-T98";
		const want = parser.models.M_0096;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	});

	test("bad D01", () => {
		const input = "thermowell D01D5CT46ADN000";
		const want = parser.models.M_UNKNOWN;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	});

	test("bad 114C", () => {
		const input = "ll4CM0355VAR1SC100AWR5C02Q5R16R60TR \ Re";
		const want = parser.models.M_UNKNOWN;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	});
	
	test("bad 0096", () => {
		const input = "009b-Y-0350-T98";
		const want = parser.models.M_UNKNOWN;
		const got = parser.detectModel(input);
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
		const got = parser.parseOptions(input);
		expect(got).toEqual(want);
	});
});



describe("Parsing 114C", () => {

	test("Parsing 114C without options", () => {
		const input = "114C_ - M 0355V-AR1SC100A";
		const got = parser.parse114C(input)
		const want = {
			model: '114C',
			unit: 'M',
			immerLen: '0355',
			mountStyle: 'V',
			procConn: 'AR',
			stemStyle: '1',
			material: 'SC',
			headLen: '100',
			instrConn: 'A',
			options: [],
		};
		expect(got).toEqual(want);
	});

	test("Parsing 114C with options", () => {
		const input = "114CM0355VAR1SC100A - WR5C02Q5 ,R16R60TR \ ";
		const got = parser.parse(input)
		const want = {
			model: '114C',
			unit: 'M',
			immerLen: '0355',
			mountStyle: 'V',
			procConn: 'AR',
			stemStyle: '1',
			material: 'SC',
			headLen: '100',
			instrConn: 'A',
			options: [
				{ sym: 'WR', num: 5 },
				{ sym: 'C', num: 2 },
				{ sym: 'Q', num: 5 },
				{ sym: 'R', num: 16 },
				{ sym: 'R', num: 60 },
				{ sym: 'TR', num: 0 },
			],
		};
		expect(got).toEqual(want);
	});
});



describe("Parsing D01", () => {

	test("Parsing D01", () => {
		const input = "D01Y6JT26KDN000 \ Rev.BV 0096-Y-0455-T26";
		const got = parser.parse(input)
		const want = {
			model: 'D01',
			material: 'Y',
			immerLen: '6J',
			mountStyle: 'T26',
			headLen: 'K',
			instrConn: 'D',
			optSet: '000',
		};
		expect(got).toEqual(want);
	});


	console.log(parser.parse("D01D5CT98KDN000"));  // to-do: remove
});



describe("Parsing 0096", () => {

	test("Parsing 0096", () => {
		const input = "0096-Y-0210-T98 T040-J";
		const got = parser.parse(input)
		const want = {
			model: '0096',
			material: 'Y',
			immerLen: '0210',
			mountStyle: 'T98',
			headLen: '040',
			instrConn: 'J',
			options: [],
		};
		expect(got).toEqual(want);
	});

});