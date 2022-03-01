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

	test("D01", () => {
		const input = parser.parse("D01D5CT98KDN000");
		// const want = 
		const got = repr.representD01(input);
		// console.log(got);
		// console.log(got.toString());
		// console.log(got.verboseDescription());
		//expect(got).toEqual(want);
	});

});