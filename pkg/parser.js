class ThermowellParser {

	static models = {
		M_114C: "114C",
		M_D01: "D01",
		M_0096: "0096",
		M_UNKNOWN: "",
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
				return this.models.M_114C;
			case !!code.match(/^\s*D0*1/i):
				return this.models.M_D01;
			case !!code.match(/^\s*0*96/i):
				return this.models.M_0096;
			default:
				return this.models.M_UNKNOWN;
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
		return strOptions.map(this.parseOption);
	}

	/**
	 * Parse 114C code order.
	 * 
	 * @param  {string}  code  Order code of the thermowell.
	 * @return {object}        Parsed parameters or null if cannot parse.
	 */
	static parse114C(code) {
		const delim = "(\\s|[-_.,])*";
		const mainParams = code.match(new RegExp(
			`(?<model>114C)${delim}` +
			`(?<unit>\\w)${delim}` +
			`(?<immerLen>\\d\\d\\d\\d)${delim}` +
			`(?<mntTyp>\\w)${delim}` +
			`(?<procConn>\\w\\w)${delim}` +
			`(?<stemStyle>\\w)${delim}` +
			`(?<mater>\\w\\w)${delim}` +
			`(?<headLen>\\d\\d\\d)${delim}` +
			`(?<instrCon>\\w)${delim}` +
			`(?<opts>.*)`, "i"));
		if (!mainParams) return null;
		const optionsList = this.parseOptions(mainParams.groups.opts);
		delete mainParams.groups.opts;
		return { ...mainParams?.groups, optionsList };
	}

	/*
	 * Parse any thermowell order code.
	 *
	 * @param  {string}  code  An order code.
	 * @return {string}  Parsed parameters or null if cannot parse.
	 */
	static parse(code) {
		const model = this.detectModel(code);
		switch (model) {
			case this.models.M_114C:
				return this.parse114C(code);
			default:
				throw new Error(`Model ${model} is not implemented.`);
		}
	}
}

module.exports = ThermowellParser;