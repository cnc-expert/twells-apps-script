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
	
	/*
	 * Parse any thermowell order code.
	 *
	 * @param  {string}  code  An order code.
	 * @return {string}  Parsed parameters or null if cannot parse.
	 */
	static parse(code) {
		const model = this.detectModel(code);
		const parsed = {
			[this.models.M_114C]: this.parse114C(code),
			[this.models.M_D01]: this.parseD01(code),
			[this.models.M_0096]: this.parse0096(code),
		}[model];
		if (parsed) parsed.model = model;
		return parsed;
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
	 * Parse 114C order code.
	 * 
	 * @param  {string}  code  Order code of the thermowell.
	 * @return {object}  Parsed parameters or null if cannot parse.
	 */
	static parse114C(code) {
		const delim = "(\\s|[-_.,])*";
		const mainParams = code.match(new RegExp(
			`(?<model>114C)${delim}` +
			`(?<unit>\\w)${delim}` +
			`(?<immerLen>\\d\\d\\d\\d)${delim}` +
			`(?<mountStyle>\\w)${delim}` +
			`(?<procConn>\\w\\w)${delim}` +
			`(?<stemStyle>\\w)${delim}` +
			`(?<material>\\w\\w)${delim}` +
			`(?<headLen>\\d\\d\\d)${delim}` +
			`(?<instrConn>\\w)${delim}` +
			`(?<opts>.*)`, "i"));
		if (!mainParams) return null;
		const options = this.parseOptions(mainParams.groups.opts);
		delete mainParams.groups.opts;
		return { ...mainParams.groups, options };
	}

	/**
	 * Parse D01 order code.
	 * 
	 * @param  {string}  code  Order code of the thermowell.
	 * @return {object}  Parsed parameters or null if cannot parse.
	 */
	static parseD01(code) {
		const delim = "(\\s|[-_.,])*";
		const mainParams = code.match(new RegExp(
			`(?<model>D0*1)${delim}` +
			`(?<material>\\w)${delim}` +
			`(?<immerLen>\\w\\w)${delim}` +
			`(?<mountStyle>\\w\\w\\w)${delim}` +
			`(?<headLen>\\w)${delim}` +
			`(?<instrConn>\\w)${delim}` +
			`(?:N(?<optSet>\\d\\d\\d))?`, "i"));
		if (!mainParams) return null;
		return { ...mainParams.groups };
	}


	/**
	 * Parse 0096 order code.
	 * 
	 * @param  {string}  code  Order code of the thermowell.
	 * @return {object}  Parsed parameters or null if cannot parse.
	 */
	static parse0096(code) {
		const delim = "(\\s|[-_.,])*";
		const mainParams = code.match(new RegExp(
			`(?<model>0*96)${delim}` +
			`(?<material>\\w)${delim}` +
			`(?<immerLen>\\d\\d\\d\\d)${delim}` +
			`(?<mountStyle>\\w\\w\\w)${delim}` +
			`T(?<headLen>\\d{1,3})${delim}` +
			`(?<instrConn>\\w)${delim}` +
			`(?<opts>.*)`, "i"));
		if (!mainParams) return null;
		const options = this.parseOptions(mainParams.groups.opts);
		delete mainParams.groups.opts;
		return { ...mainParams.groups, options };
	}
}

module.exports = ThermowellParser;