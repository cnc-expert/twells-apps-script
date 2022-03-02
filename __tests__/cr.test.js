const parser = require("../pkg/parser.js");
const repr = require("../pkg/cr.js");

describe("Common representation", () => {

	test("114C", () => {
		const input = parser.parse("114CM0320VAM3SC080AC01");
		// const want = 
		const got = repr.represent114C(input);
		// console.log(got);
		// console.log(got.toString());
		// console.log(got.verboseDescription());
		//expect(got).toEqual(want);
	});
});

describe("D01: immersion length code", () => {
	test("Begin of first regular part", () => {
		const lengthCode = "0A";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 25;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});

	test("Middle of first regular part", () => {
		const lengthCode = "4W";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 900;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});

	test("End of first regular part", () => {
		const lengthCode = "9T";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 820;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});

	test("Irregular: 0U", () => {
		const lengthCode = "0U";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 825;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});

	test("Begin of second regular part", () => {
		const lengthCode = "0V";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 830;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});

	test("Middle of second regular part", () => {
		const lengthCode = "5V";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 855;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});

	test("End of second regular part", () => {
		const lengthCode = "9x";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 975;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});

	test("End of second regular part", () => {
		const lengthCode = "4Y";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 1000;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});

	test("Irregular: 1U", () => {
		const lengthCode = "1U";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 2050;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});

	test("Irregular: 9U", () => {
		const lengthCode = "9U";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 88;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});

	test("Irregular: 7Z", () => {
		const lengthCode = "7Z";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = 1300;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});
});