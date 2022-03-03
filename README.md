# twells-apps-script
Rosemount's Thermowells supporting custom functions for Google Spreadsheet.

## HUMAN
Display human readable form of an order code.

Format:

`=HUMAN(range, format)`

where:

- `range` - A range containing order codes.
- `format` - A number. If `0` it returns a string. If `1` - a column range. If `2` - a row range.
            If `3` - a column range with headers. If `4` - a row range with headers.
			Last two are calculated only for the first cell of the input `range`.



## MAKE114C
Form an order code for the 114C thermowell.

Format:

`=MAKE114C(unit, immersLen, mountStyle, processConn, stemStyle, material, headLen, instrConn, options)`

Parameters:

- `unit` - Dimensional unit: `mm` or `inch`.
- `immersLen` - Immersion "U" length.
- `mountStyle` - Mounting style. One of:
  - `threaded`;
  - `flange, partial weld`;
  - `flange, full weld`;
  - `flange, forging`;
  - `threaded flange`;
  - `van stone`;
  - `socket weld`;
  - `weld-in`.
- `processConn` - Process connection "P". Now supported:
  - Thread mount thermowells with **tapered thread**:
    - ANPT threads:
	  `1/2-14 ANPT`; `3/4-14 ANPT`; `1-11.5 ANPT`; `1 1/2-11.5 ANPT`.
	- Pipe threads:
	  `R1/2` or `1/2 BSPT`;
	  `R3/4` or `3/4 BSPT`;
	  `R1` or `1 BSPT`.
  - Thread mount thermowells with **parallel thread**:
	- Metric threads:
      `M20x1.5`, `M24x1.5`, `M27x2`, `M33x2`.
	- Pipe threads:
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
- `stemStyle` - Stem form: `straight`, `tapered` or `stepped`.
- `material` - Thermowell material. One of:

  `304/304L`; `304/304L PTFE` (with teflon coating); `310`;
  `316/316L`; `316/316L NORSOK` (NORSOK standards);
  `316Ti`;
  `316/316L tantalum` (with tantalum sheath);
  `316/316L PFA` (with PFA coating);
  `321`; `321H`; `347`; `904L`;
  `alloy 20`; `alloy 400`; `alloy 400 & 304/304L` (stem & flange);
  `alloy 600`; `alloy 600 & 304/304L` (stem & flange);
  `alloy 601`; `alloy 625`;
  `alloy 800`; `alloy 800H/800HT`; `alloy 825`;
  `alloy B3`;
  `alloy C-4 & 304/304L` (stem & flange);
  `alloy C-22`; `alloy C-22 & 304/304L` (stem & flange);
  `alloy C-22 & 316/316L` (stem & flange);
  `alloy C-276`;
  `alloy F44 Mo6`;
  `carbon steel`;
  `Cr-Mo: B-11 & F-11` (stem & flange);
  `Cr-Mo: B-22 & F-22` (stem & flange);
  `Cr-Mo: F-91`;
  `duplex 2205`; `duplex 2205 NORSOK`;
  `Mo` (for molybdenum); `Ni` (for nickel 200);
  `super duplex`; `super duplex NORSOK`; `Ti` (for titan grade 2).
- `headLen` - Head "H" length.
- `instrConn` - Instrument connection "N". One of:
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
- `options` - List of options. Separated with any non-letter and non-numeric symbol, or without any separator. May be empty.



## MAKED01
Form an order code for the D01 thermowell.

Format:

`=MAKED01(immersLen, mountStyle, processConn, stemStyle, material, headLen, instrConn, options)`

Parameters:

- `immersLen` - Immersion "U" length.
- `mountStyle` - Mounting style. One of:
  - `threaded`;
  - `flange`;
  - `weld-in`.
- `processConn` - Process connection "P". Now supported:
  - Thread mount thermowells with **tapered thread**:
    - ANPT threads:
	  `1/2-14 ANPT`; `3/4-14 ANPT`; `1-11.5 ANPT`.
	- Pipe threads:
	  `R1/2` or `1/2 BSPT`;
	  `R3/4` or `3/4 BSPT`;
	  `R1` or `1 BSPT`.
  - Thread mount thermowells with **parallel thread**:
	- Metric threads:
      `M20x1.5`, `M24x1.5`, `M27x2`, `M33x2`.
	- Pipe threads:
	  `G1/2` or `1/2 BSPF`;
	  `G3/4` or `3/4 BSPF`;
	  `G1` or `1 BSPF`.
  <!-- TO-DO: Weld-in thermowells -->
  <!-- TO-DO: Flange mount thermowells -->
- `stemStyle` - Stem form: `straight`, `tapered` or `stepped`.
- `material` - Thermowell material. One of:

  `304`; `304L`; `304 PTFE` (with teflon coating); `310`;
  `316`; `316L`; `316L PFA`; (with PFA coating);
  `316Ti`; `316 tantalum` (with tantalum sheath); `321`;
  `alloy 20`;
  `alloy 400`; `alloy 400 & 304` (stem & flange);
  `alloy 600`; `alloy 600 & 304` (stem & flange);
  `alloy B`;
  `alloy C`; `alloy C-4 & 304` (stem & flange);
  `alloy C-22 & 304` (stem & flange);
  `alloy C-22 & 316L` (stem & flange);
  `carbon steel`; `Cr-Mo: F11`; `Cr-Mo: F22`; `Cr-Mo: F-91`; `duplex 2205`;
  `Mo` (for molybdenum); `Ni` (for nickel 200);
  `special`; `super duplex`; `Ti` (for titan grade 2);
- `headLen` - Head "T" length.
- `instrConn` - Instrument connection "N". One of:
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
- `options` - List of options. Separated with any non-letter and non-numeric symbol, or without any separator. May be empty.



## TOD01
Recognize order codes (what is a model) and converts to D01 code. Some options may be ignored.

Format:

`=TOD01(range)`

Parameters:

- `range` - A range containing order code strings.



## TO114C
Recognize order codes (what is a model) and converts to 114C code. Some options may be ignored.

Format:

`=TO114C(range)`

Parameters:

- `range` - A range containing order code strings.



## TO0096
Recognize order codes (what is a model) and converts to 0096 code. Some options may be ignored.

Format:

`=TO0096(range)`

Parameters:

- `range` - A range containing order code strings.
