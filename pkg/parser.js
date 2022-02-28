class ThermowellParser {

	static ThermowellModels = {
		model114C: "114C",
		modelD01: "D01",
		model0096: "0096",
		modelUnknown: ""
	}

	/*
	 * Detects thermowell model.
	 *
	 * @param  {string}  code  An order code.
	 * @return {string}  The order code 114C.
	 */
	static detectModel(code) {
		switch (true) {
			case !!code.match(/^\s*114/i):
				return ThermowellParser.ThermowellModels.model114C;
			case !!code.match(/^\s*D0*1/i):
				return ThermowellParser.ThermowellModels.modelD01;
			case !!code.match(/^\s*0*96/i):
				return ThermowellParser.ThermowellModels.model0096;
			default:
				return ThermowellParser.ThermowellModels.modelUnknown;
		}
	}

	/**
	 * Parse an option.
	 * 
	 * @param  {string}  opt  An option.
	 * @return {object}  An object with keys "sym" and "num".
	 */
	static parseOption(optCode) {
		const matched = optCode.match(/(?<sym>[A-Z]*)(?<num>\d*)/i);
		return {
			sym: matched?.groups.sym.toUpperCase(),
			num: matched?.groups.num | 0
		};
	}

	/**
	 * Parse options string.
	 * 
	 * @param  {string}  optString  List of options from thermowell order string.
	 * @return {string[]}  List of parsed options.
	 */
	static parseOptions(optString) {
		const reOptions = /[A-Z]{1,2}\d*/ig;
		const strOptions = optString?.match(reOptions) ?? [];
		return strOptions.map(ThermowellParser.parseOption);
	}

	/**
	 * Parse 114C code order.
	 * 
	 * @param  {string}  code  Order code of the thermowell.
	 * @return {object}        Parsed parameters or null if cannot parse.
	 */
	static parse114C(code) {
		const reMain = /(?<model>114C) *(?<unit>.) *(?<immerLen>....) *(?<mntTyp>.) *(?<procConn>..) *(?<stemStyle>.) *(?<mater>..) *(?<headLen>...) *(?<instrCon>.) *(?<opts>.*)/i;
		const mainParams = code.match(reMain);
		if (!mainParams) return null;
		const optionsList = ThermowellParser.parseOptions(mainParams.groups.opts);
		delete mainParams.groups.opts;
		return { ...mainParams?.groups, optionsList };
	}
}

module.exports = ThermowellParser;