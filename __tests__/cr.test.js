const parser = require("../pkg/parser.js");
const repr = require("../pkg/cr.js");
const { parse } = require("../pkg/parser.js");

describe("Common representation", () => {

	test("114C", () => { // to-do
		const input = "114CM0320VAM3SC080AC01";
		const parsed = parser.parse(input);
		const got = repr.represent114C(parsed);

		// const want =
		// console.log(got);
		//expect(got).toEqual(want);
	});

	test("D01", () => { // to-do
		const input = "D01D5DT44ADN162";
		const parsed = parser.parse(input);
		const got = repr.representD01(parsed);
		
		// const want = 
		console.log(got);
		// expect(got).toEqual(want);
	});

	test("0096", () => { // to-do
		const input = "0096-D-0400-T26-T100-R R01 R05 R07";
		const parsed = parser.parse(input);
		const got = repr.represent0096(parsed);
		
		// const want = 
		// console.log(got);
		// expect(got).toEqual(want);
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

	test("Irregular: incorrect", () => {
		const lengthCode = "bO";
		const input = parser.parse(`D01D${lengthCode}T98KDN000`);
		const want = undefined;
		const twell = repr.representD01(input);
		const got = twell.immersionLen;
		expect(got).toBe(want);
	});
});

describe("Convertion to 0096 format", () => {

	test("114C", () => { // to-do
		const inputMaterial = "AC";
		const input = `114CM0320VAM3${inputMaterial}080AC01`;
		const parsed = parser.parse(input);

		const got = repr.represent114C(parsed).convertTo0096();

		const wantMaterial = "J";
		const want = new RegExp(`0096-${wantMaterial}-`);
		expect(got).toMatch(want)
	});

	test("D01", () => { // to-do
		const inputMaterial = "Z";
		const inputImmersion = "9B";
		const input = `D01${inputMaterial}${inputImmersion}T95KJN000 \ Rev.BV 0096-Y-0120-T95`;
		const parsed = parser.parse(input);

		const got = repr.representD01(parsed).convertTo0096();

		const wantMaterial = inputMaterial;
		const wantImmersion = "0120"
		const want = new RegExp(`0096-${wantMaterial}-`); // to-do: use wantImmersion
		expect(got).toMatch(want);
	});

	test("0096", () => { // to-do
		const inputMaterial = "D";
		const inputImmersion = "0400";
		const input = `0096-${inputMaterial}-${inputImmersion}-T26-T100-R R01 R05 R07`;
		const parsed = parser.parse(input);

		const got = repr.represent0096(parsed).convertTo0096();

		const wantMaterial = inputMaterial;
		const wantImmersion = inputImmersion;
		const want = new RegExp(`0096-${wantMaterial}-${wantImmersion}-`);
		expect(got).toMatch(want);
	});
});