# twells-apps-script
Thermowell supporting custom functions for Google Spreadsheet.

## C114HUMAN
Display human readable form of 114C order code.

Format:

`=C114HUMAN(range, multiline)`

where:

- `range` - a range containing 114C order codes.
- `multiline` - a boolean value. If false (default), then it outputs in one line (laconic mode).
Otherwise it emits one line per item (verbose mode).

## D01HUMAN
Display human readable form of D01 order code.

Format:

`=D01HUMAN(range, multiline)`

Parameters:

- `range` - a range containing D01 order codes.
- `multiline` - a boolean value. If false (default), then it outputs in one line (laconic mode).
Otherwise it emits one line per item (verbose mode).

## MAKEC114
Form an order code for the 114C thermowell.

Format:

`=MAKEC114(unit, immersLen, mountStyle, processConn, stemStyle, material, headLen, instrConn, options)`

Parameters:

- `unit` - dimensional unit: `mm` or `inch`.
- `immersLen` - immersion "U" length.
- `mountStyle` - mounting style. One of:
  - `threaded`;
  - `flange, partial weld`;
  - `flange, full weld`;
  - `flange, forging`;
  - `threaded flange`;
  - `van stone`;
  - `socket weld`;
  - `weld-in`.
- `processConn` - process connection "P". Now supported:
  - Thread mount thermowells with **tapered thread**:
    - ANPT threads:
	  `1/2-14 ANPT`; `3/4-14 ANPT`; `1-11.5 ANPT`; `1 1/2-11.5 ANPT`.
	- pipe threads:
	  `R1/2` or `1/2 BSPT`;
	  `R3/4` or `3/4 BSPT`;
	  `R1` or `1 BSPT`.
  - Thread mount thermowells with **parallel thread**:
	- metric threads:
      `M20x1.5`, `M24x1.5`, `M27x2`, `M33x2`.
	- pipe threads:
	  `G1/2` or `1/2 BSPF`;
	  `G3/4` or `3/4 BSPF`;
	  `G1` or `1 BSPF`.
  <!-- TO-DO: Flange mount thermowells -->
  <!-- TO-DO: Flange mount thermowells -->
  <!-- TO-DO: Threaded flange -->
  <!-- TO-DO: Van stone / Lap flange thermowells -->
  <!-- TO-DO: Weld mount thermowells - socket weld -->
  <!-- TO-DO: Weld mount - weld-in thermowells -->
  <!-- TO-DO: Weld mount thermowells - DIN form 4 -->
- `stemStyle` - stem form: `straight`, `tapered` or `stepped`.
- `material` - thermowell material. One of:

  `304` or `304L`; `310`;
  `316` or `316L`; `316 NORSOK` or `316L NORSOK` (NORSOK standards);
  `316Ti`;
  `316 tantalum`  or `316L tantalum` (with tantalum sheath);
  `316 PFA` or `316L PFA` (with PFA coating);
  `321`; `321H`; `347`; `904L`;
  `alloy 20`; `alloy 400`; `alloy 400 & 304` (stem & flange);
  `alloy 600`; `alloy 600 & 304` (stem & flange); `alloy 601`; `alloy 625`;
  `alloy 800`; `alloy 800H/HT`; `alloy 825`;
  `alloy B3`;
  `alloy C-4`;
  `alloy C-22`; `alloy C-22 & 304` (stem & flange); `alloy C-22 & 316` (stem & flange);
  `alloy C-276`;
  `alloy F44 Mo6`;
  `carbon steel`;
  `chrome-moly: B-11 & F-11` (stem & flange);
  `chrome-moly: B-22 & F-22` (stem & flange);
  `chrome-moly: F-91`;
  `duplex 2205`; `duplex 2205 NORSOK`;
  `molybdenum`; `nickel 200`;
  `super duplex`; `super duplex NORSOK`; `titan grade 2`.
- `headLen` - head "H" length.
- `instrConn` - instrument connection "N". One of:
  - `1/2-14 ANPT`;
  - `1/2-14 NPSM`;
  - `3/4-14 ANPT`;
  - `M14x1.5`;
  - `M18x1.5`;
  - `M20x1.5`;
  - `M24x1.5`;
  - `M27x2`;
  - `G1/2`;
  - `G3/4`.
- `options` - list of options. Separated with any non-letter and non-numeric symbol, or without any separator.

## MAKED01
Form an order code for the D01 thermowell.

Format:

`=MAKED01(immersLen, mountStyle, processConn, stemStyle, material, headLen, instrConn, options)`

Parameters:

- `immersLen` - immersion "U" length.
- `mountStyle` - mounting style. One of:
  - `threaded`;
  - `flange`;
  - `weld-in`.
- `processConn` - process connection "P". Now supported:
  - Thread mount thermowells with **tapered thread**:
    - ANPT threads:
	  `1/2-14 ANPT`; `3/4-14 ANPT`; `1-11.5 ANPT`.
	- pipe threads:
	  `R1/2` or `1/2 BSPT`;
	  `R3/4` or `3/4 BSPT`;
	  `R1` or `1 BSPT`.
  - Thread mount thermowells with **parallel thread**:
	- metric threads:
      `M20x1.5`, `M24x1.5`, `M27x2`, `M33x2`.
	- pipe threads:
	  `G1/2` or `1/2 BSPF`;
	  `G3/4` or `3/4 BSPF`;
	  `G1` or `1 BSPF`.
  <!-- TO-DO: Weld-in thermowells -->
  <!-- TO-DO: Flange mount thermowells -->
- `stemStyle` - stem form: `straight`, `tapered` or `stepped`.
- `material` - thermowell material. One of:

  `304`; `304L`; `304 teflon` (with PFA coating); `310`;
  `316`; `316L`; `316Ti`; `316 tantalum` (with tantalum sheath); `321`;
  `alloy 20`; `alloy 400`; `alloy 600`; `alloy B`; `alloy C`;
  `carbon steel`; `chrome-moly F11`; `chrome-moly F22`;
  `molybednum`; `nickel 200`; `special`; `titanium`;
- `headLen` - head "T" length.
- `instrConn` - instrument connection "N". One of:
  + `M18x1.5`;
  + `M20x1.5`;
  + `M22x1.5`;
  + `M24x1.5`;
  + `M24x2`;
  + `M27x1.5`;
  + `1/2 API`.
  + `1/2-14 ANPT`;
  + `1/2-14 NPSM`;
  + `3/4-14 NPT`;
  + `R1/2` or `1/2 BSPT`;
  + `G1/2` or `1/2 BSPF`;
  + `G3/4` or `3/4 BSPF`;
- `options` - list of options. Separated with any non-letter and non-numeric symbol, or without any separator.

## C114TOD01
Converts 114C order code to D01 code. Some options may be ignored.

Format:

`=C114TOD01(code114C)`

Parameters:

- `code114C` - order code of 114C thermowell.


## D01TOC114
Converts D01 order code to 114C code. Some options may be ignored.

Format:

`=D01TOC114(codeD01)`

Parameters:

- `codeD01` - order code of D01 thermowell.

## D01TOD96
Converts D01 order code to 0096 format.

Format:

`=D01TOD96(codeD01)`

Parameters:

- `codeD01` - order code of D01 thermowell.

## D96TOD01
Converts 0096 order code to D01 format.

Format:

`=D96TOD01(code0096)`

Parameters:

- `code0096` - order code in 0096 format.
