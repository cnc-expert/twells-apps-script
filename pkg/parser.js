const ThermowellModels = {
	model114C: "114C",
	modelD01:  "D01",
	model0096: "0096",
	modelUnknown: ""
}

/*
 * Detects thermowell model
 * @param  {string}  code  An order code.
 * @return {string}  The order code 114C.
 */
function detectModel(code) {
	switch (true) {
		case !!code.match(/^\s*114/i):
			return ThermowellModels.model114C;
		case !!code.match(/^\s*D0*1/i):
			return ThermowellModels.modelD01;
		case !!code.match(/^\s*0*96/i):
			return ThermowellModels.model0096;
		default:
			return ThermowellModels.modelUnknown;
	}
}

class RosemountTWells {

  /**
   * Parse options string
   * @param  {string}  opts  List of options from thermowell order string
   * @return {string[]}      List of parsed options
   */
  static parseOptions(opts) {
    const reOptions = /[A-Z]{1,2}\d*/ig;
    return opts?.match(reOptions) ?? [];
  }

  /**
   * Parse 114C code order
   * @param  {string}  code  Order code of the thermowell
   * @return {object}        Parsed parameters
   */
  static C114_parse(code) {
    const reMain = new RegExp("114C *(?<unit>.) *(?<immerLen>....) *(?<mntTyp>.) *(?<procConn>..) *(?<stemStyle>.) *(?<mater>..) *(?<headLen>...) *(?<instrCon>.) *(?<opts>.*)", "i");
    const mainParams = reMain.exec(code);
    const optionsList = parseOptions_(mainParams?.groups.opts);
    return { ...mainParams?.groups, optionsList };
  }

  /**
   * Human readable values of parsed code
   * @param  {string}  code  Order code of the thermowell
   * @return {object}        Parsed parameters
   */
  static C114_decode(code) {
    const params = t114C_parse_(code)
    // TO-DO
    return params;
  }

}

module.exports = {
	ThermowellModels,
	detectModel
}