/** @OnlyCurrentDoc */

function test_HUMAN_() {
	const input1 = [["114CE0110PAC2SC035AA050B040Q76Q73R16Q8Q3", "D01Y4CT95KJN000 Rev.BV 0096-Y-0145-T95", "114CM0110PAC2SC035AA050B040Q76Q73R16Q8Q3"]];
	const input2 = 1;
	const got = HUMAN(input1, input2);
	Logger.log(got);
}

const humanFmt = {
	STR: 0,
	COL: 1,
	ROW: 2,
	COL_WITH_HEADERS: 3,
	ROW_WITH_HEADERS: 4,
}

function rowsAndCols_(range, fmt) {
	const values = Array.isArray(range) ? range : [[range]];
	const formatsReadingOneRow = [humanFmt.COL, humanFmt.COL_HEADERS, humanFmt.ROW_HEADERS];
	const formatsReadingOneCol = [humanFmt.ROW, humanFmt.COL_HEADERS, humanFmt.ROW_HEADERS];
	const rows = formatsReadingOneRow.includes(fmt) ? 1 : values.length;
	const cols = formatsReadingOneCol.includes(fmt) ? 1 : values[0].length;
	return { values, rows, cols };
}

function representFunction_(model) {
	const reprFunc = {
		[ThermowellParser.models.M_114C]: CommonRepr.represent114C,
		[ThermowellParser.models.M_D01]: CommonRepr.representD01,
	}[model];
	return reprFunc?.bind(CommonRepr);
}

function addColumnToMatrix_(matrix, column) {
	column.forEach(([val], i) => {
		matrix[i] = matrix[i] || [];
		matrix[i].push(val);
	});
	return matrix;
}

/**
 * Display human readable form of an order code.
 * @param  {any}     range   A range containing order codes.
 * @param  {number}  format  If 0 returns a string.
 *    If 1 returns a column range. If 2 returns a row range.
 *    If 3 returns a column range with headers. If 4 returns a row range with headers.
 *    If format with headers chosen, only first cell of the range processed.
 * @return {string} The string with decoded parameters.
 * @customfunction
 */
function HUMAN(range, format) {
	const { values, rows, cols } = rowsAndCols_(range, format);
	const outArray = [];

	for (let r = 0; r < rows; r++) {
		outArray[r] = outArray[r] || [];

		for (let c = 0; c < cols; c++) {

			const parsed = ThermowellParser.parse(values[r][c]);
			if (!parsed) {
				outArray[r][c] = "Error: cannot parse";
				continue;
			}
			const reprFunc = representFunction_(parsed.model);
			if (!reprFunc) {
				outArray[r][c] = `Error: not implemented yet`;
				continue;
			}
			const repr = reprFunc(parsed);

			if (fmt == humanFmt.STR) outArray[r][c] = repr.toString();
			if (fmt == humanFmt.COL) addColumnToMatrix_(outArray, repr.columnDescription());
			if (fmt == humanFmt.ROW) [outArray[r]] = repr.rowDescription();
			if (fmt == humanFmt.COL_WITH_HEADERS) return repr.columnDescription(true);
			if (fmt == humanFmt.ROW_WITH_HEADERS) return repr.rowDescription(true);
		}
	}
	return outArray;
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