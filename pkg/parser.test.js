const parser = require("./parser.js")

describe("Detection of model", () => {
	test("D01", () => {
		const input = "D01D5CT46ADN000";
		const want = parser.ThermowellModels.modelD01;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	})
	test("114C", () => {
		const input = "  114CM0355VAR1SC100AWR5C02Q5R16R60TR \ Re";
		const want = parser.ThermowellModels.model114C;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	})
	test("0096", () => {
		const input = "096-Y-0350-T98";
		const want = parser.ThermowellModels.model0096;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	})
	test("bad D01", () => {
		const input = "thermowell D01D5CT46ADN000";
		const want = parser.ThermowellModels.modelUnknown;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	})
	test("bad 114C", () => {
		const input = "ll4CM0355VAR1SC100AWR5C02Q5R16R60TR \ Re";
		const want = parser.ThermowellModels.modelUnknown;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	})
	test("bad 0096", () => {
		const input = "009b-Y-0350-T98";
		const want = parser.ThermowellModels.modelUnknown;
		const got = parser.detectModel(input);
		expect(got).toBe(want);
	})
})