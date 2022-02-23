/** @OnlyCurrentDoc */

/**
   * Display human readable form of 114C order code.
   * @param  {Range}    range      A range containing 114C order codes.
   * @param  {boolean}  multiline  A boolean value.
   * 	If false (default), then it outputs in one line (laconic mode).
   * 	Otherwise it emits one line per item (verbose mode).
   * @return {string} The string with decoded parameters.
   * @customfunction
   */
function C114HUMAN(range, multiline) {
	multiline = multiline ? true : false;

	// to-do

	return "C114HUMAN: to-do";
}

/**
   * Display human readable form of D01 order code.
   * @param  {Range}    range      A range containing D01 order codes.
   * @param  {boolean}  multiline  A boolean value.
   * 	If false (default), then it outputs in one line (laconic mode).
   * 	Otherwise it emits one line per item (verbose mode).
   * @return {string} The string with decoded parameters.
   * @customfunction
   */
function D01HUMAN(range, multiline) {
	multiline = multiline ? true : false;

	// to-do

	return "D01HUMAN: to-do";
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
function MAKEC114(unit, immersLen, mountStyle, processConn, stemStyle, material, headLen, instrConn, options) {
	return "MAKEC114: to-do";
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
   * Converts 114C order code to D01 code. Some options may be ignored.
   * @param  {Range}  range  A range containing order code strings of 114C thermowells.
   * @return {string} The order code D01.
   * @customfunction
   */
function C114TOD01(range) {
	return "C114TOD01: to-do";
}

/**
   * Converts D01 order code to 0096 format. Some options may be ignored.
   * @param  {Range}  range  A range containing order code strings of D01 thermowell.
   * @return {string} The order code 114C.
   * @customfunction
   */
function D01TOC114(range) {
	return "D01TOC114: to-do";
}
	
/**
 * Converts D01 order code to 0096 format.
 * @param  {Range}  range  A range containing order code strings of D01 thermowell.
 * @return {string} The order code in 0096 format.
 * @customfunction
 */
function D01TOD96(range) {
	return "D01TOD96: to-do";
}

/**
   * Converts 0096 order code to D01 format.
   * @param  {Range}  range  A range containing order code strings of 0096 format.
   * @return {string} Order code of D01 thermowell.
   * @customfunction
   */
function D96TOD01(range) {
	return "D96TOD01: to-do";
}
