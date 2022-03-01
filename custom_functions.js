/** @OnlyCurrentDoc */

/**
   * Display human readable form of an order code.
   * @param  {Range}    range      A range containing order codes.
   * @param  {boolean}  multiline  A boolean value.
   * 	If false (default), then it outputs in one line (laconic mode).
   * 	Otherwise it emits one line per item (verbose mode).
   * @return {string} The string with decoded parameters.
   * @customfunction
   */
function HUMAN(range, multiline) {
	const values = Array.isArray(range) ? range : [[range]];
	for (let i = 0; i < values.length; i++) {
		for (let j = 0; j < values[i].length; j++) {
			const parsed = ThermowellParser.parse(values[i][j]);
			const repr = {
				[ThermowellParser.models.M_114C]: CommonRepr.represent114C(parsed),
				[ThermowellParser.models.M_D01]: CommonRepr.representD01(parsed),
			}[parsed.model];
			if (multiline) return repr ? repr.verboseDescription() : "not implemented yet";
			values[i][j] = repr ? repr.toString() : "not implemented yet";
		}
	}
	return values;
}

/**
   * Form an order code for the 114C thermowell.
   * @param  {string}  unit         Dimensional unit: mm or inch.
   * @param  {string}  immersLen    Immersion "U" length.
   * @param  {string}  mountStyle   Mounting style.
   * @param  {string}  processConn  Process connection "P".
   * @param  {string}  stemStyle    Stem form: straight, tapered or stepped.
   * @param  {string}  material     Thermowell material.
   * @param  {string}  headLen      Head "H" length.
   * @param  {string}  instrConn    Instrument connection "N".
   * @param  {string}  options      List of options.
   * 	Separated with any non-letter and non-numeric symbol, or without any separator.
   * 	May be empty.
   * @return {string} The order code 114C.
   * @customfunction
   */
function MAKE114C(unit, immersLen, mountStyle, processConn, stemStyle, material, headLen, instrConn, options) {
	return "MAKE114C: to-do";
}

/**
   * Form an order code for the D01 thermowell.
   * @param  {string}  immersLen    Immersion "U" length.
   * @param  {string}  mountStyle   Mounting style.
   * @param  {string}  processConn  Process connection "P".
   * @param  {string}  stemStyle    Stem form: straight, tapered or stepped.
   * @param  {string}  material     Thermowell material.
   * @param  {string}  headLen      Head "T" length.
   * @param  {string}  instrConn    Instrument connection "N".
   * @param  {string}  options      List of options.
   * 	Separated with any non-letter and non-numeric symbol, or without any separator.
   * 	May be empty.
   * @return {string} The order code D01.
   * @customfunction
   */
function MAKED01(immersLen, mountStyle, processConn, stemStyle, material, headLen, instrConn, options) {
	return "MAKED01: to-do";
}

/**
   * Recognize order codes (what is a model) and converts to D01 code. Some options may be ignored.
   * @param  {Range}  range  A range containing order code strings.
   * @return {string} The order code D01.
   * @customfunction
   */
function TOD01(range) {
	return "TOD01: to-do";
}

/**
   * Recognize order codes (what is a model) and converts to 114C code. Some options may be ignored.
   * @param  {Range}  range  A range containing order code strings.
   * @return {string} The order code 114C.
   * @customfunction
   */
function TO114C(range) {
	return "TO114C: to-do";
}
	
/**
 * Recognize order codes (what is a model) and converts to 0096 code. Some options may be ignored.
 * @param  {Range}  range  A range containing order code strings.
 * @return {string} The order code in 0096 format.
 * @customfunction
 */
function TO0096(range) {
	return "TO0096: to-do";
}

var module = {}; // GAS doesn't understand CommonJS