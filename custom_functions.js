/** @OnlyCurrentDoc */

/**
 * Display human readable form of an order code.
 * @param  {any}     range  A range containing order codes.
 * @param  {number}  fmt    If 0 returns a string.
 *    If 1 returns a column range. If 2 returns a row range.
 *    If 3 returns a column range with headers. If 4 returns a row range with headers.
 *    If format with headers chosen, only first cell of the range processed.
 * @return {string} The string with decoded parameters.
 * @customfunction
 */
function HUMAN(range, fmt) {
	const values = formatSizeOfRange_(range, fmt);

	switch (fmt) {	
		case humanFmt.STR:
			return representMatrix_(values, repr => repr.toString());
		case humanFmt.COL:
			return representRow_(values, repr => repr.columnDescription().flat());
		case humanFmt.ROW:
			return representColumn_(values, repr => repr.rowDescription().flat());
		case humanFmt.COL_WITH_HEADERS:
			return represent_(values[0][0], repr => repr.columnDescription(true));
		case humanFmt.ROW_WITH_HEADERS:
			return represent_(values[0][0], repr => repr.rowDescription(true));
	}
}

/**
   * Form an thermowell order code.
   * @param  {string}  model        Thermowell model: 114C or D01.
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
   * @return {string} The order code.
   * @customfunction
   */
function MAKEWELL(model, unit, immersLen, mountStyle, processConn, stemStyle, material, headLen, instrConn, options) {
	return "MAKEWELL: to-do";
}

/**
   * Recognize order codes (what is a model) and converts to D01 code. Some options may be ignored.
   * @param  {Range}  range  A range containing order code strings.
   * @return {string} The order code D01.
   * @customfunction
   */
function TOD01(range) {
	const values = valueToMatrix(range);
	return representMatrix_(values, repr => repr.convertToD01());
}

/**
   * Recognize order codes (what is a model) and converts to 114C code. Some options may be ignored.
   * @param  {Range}  range  A range containing order code strings.
   * @return {string} The order code 114C.
   * @customfunction
   */
function TO114C(range) {
	const values = valueToMatrix(range);
	return representMatrix_(values, repr => repr.convertTo114C());
}

/**
 * Recognize order codes (what is a model) and converts to 0096 code. Some options may be ignored.
 * @param  {Range}  range  A range containing order code strings.
 * @return {string} The order code in 0096 format.
 * @customfunction
 */
function TO0096(range) {
	const values = valueToMatrix(range);
	return representMatrix_(values, repr => repr.convertTo0096());
}

function valueToMatrix(value) {
	return Array.isArray(value) ? value : [[value]];
}

const humanFmt = {
	STR: 0,
	COL: 1,
	ROW: 2,
	COL_WITH_HEADERS: 3,
	ROW_WITH_HEADERS: 4,
}

function formatSizeOfRange_(range, fmt) {
	const matrix = valueToMatrix(range);

	const formatsReadingOneRow = [humanFmt.COL, humanFmt.COL_HEADERS, humanFmt.ROW_HEADERS];
	const formatsReadingOneCol = [humanFmt.ROW, humanFmt.COL_HEADERS, humanFmt.ROW_HEADERS];
	const rows = formatsReadingOneRow.includes(fmt) ? 1 : matrix.length;
	const cols = formatsReadingOneCol.includes(fmt) ? 1 : matrix[0].length;
	matrix.splice(rows);
	matrix.forEach(row => row?.splice(cols));

	return matrix;
}

function representMatrix_(matrix, callback) {
	const outArray = [];

	for (let r = 0; r < matrix.length; r++) {
		outArray[r] = outArray[r] || [];
		for (let c = 0; c < matrix[0].length; c++) {

			try {
				outArray[r][c] = represent_(matrix[r][c], callback);
			} catch (e) {
				outArray[r][c] = "Error: " + e.message;
			}
		}
	}

	return outArray;
}

function representRow_(rowMatrix, callback) {
	const outArray = [];

	for (let c = 0; c < rowMatrix[0].length; c++) {
		try {
			const col = represent_(rowMatrix[0][c], callback);
			col.forEach((val, i) => {
				outArray[i] = outArray[i] || Array(c);
				outArray[i].push(val);
			});
		} catch (e) {
			outArray.forEach(row => row.push(""));
			outArray[0][c] = "Error: " + e.message;
		}
	}

	return outArray;
}

function representColumn_(columnMatrix, callback) {
	const outArray = [];

	for (let r = 0; r < columnMatrix.length; r++) {
		try {
			outArray[r] = represent_(columnMatrix[r][0], callback);
		} catch (e) {
			outArray[r] = [ "Error: " + e.message ];
		}
	}

	return outArray;
}

function represent_(codeStr, callback) {
	const parsed = ThermowellParser.parse(codeStr);
	if (!parsed) throw new Error("cannot parse");

	const func = chooseFuncToRepresentModel_(parsed.model);
	if (!func) throw new Error("not implemented yet");

	const innerRepr = func(parsed);
	return callback(innerRepr);
}

function chooseFuncToRepresentModel_(thermowellModel) {
	const reprFunc = {
		[ThermowellParser.models.M_114C]: CommonRepr.represent114C,
		[ThermowellParser.models.M_D01]:  CommonRepr.representD01,
		[ThermowellParser.models.M_0096]: CommonRepr.represent0096,
	}[thermowellModel];
	return reprFunc?.bind(CommonRepr);
}

var module = {}; // GAS doesn't understand CommonJS needed by Jest