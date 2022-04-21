# twells-apps-script
Rosemount's Thermowells supporting custom functions for Google Spreadsheet.
Functions provided: [HUMAN](#human), [MAKEWELL](#makewell), [TOD01](#tod01), [TO114C](#to114c), [TO0096](#to0096).


## HUMAN
Display human readable form of an order code.

Format:

`=HUMAN(range, format)`

where:

- `range` - A range containing order codes.
- `format` - A number. If `0` it returns a string. If `1` - a column range. If `2` - a row range.
            If `3` - a column range with headers. If `4` - a row range with headers.
			Last two are calculated only for the first cell of the input `range`.

Readyness: :heavy_check_mark: (done)


## MAKEWELL
Form an order code.

Format:

`=MAKEWELL(model, unit, immersLen, mountStyle, processConn, stemStyle, material, headLen, instrConn, options)`

Parameters:

- `model` - Model: `114C` or `D01`.

- `unit` - Dimensional unit: `mm` or `inch`.

- `immersLen` - Immersion "U" length.

- `mountStyle` - Mounting style. One of:
  - `threaded`;
  - `flange partial` (partial penetration weld);
  - `flange full` (full penetration weld);
  - `flange forging` (single piece forging);
  - `threaded flange`;
  - `van stone`;
  - `socket weld`;
  - `weld-in`.

- `processConn` - Process connection "P":
  - Thread mount thermowells with **tapered thread**:
    - ANPT threads:
      `1/2-14 ANPT`; `3/4-14 ANPT`; `1-11.5 ANPT`; `1 1/2-11.5 ANPT`.
    - Pipe threads:
      `R1/2` or `1/2 BSPT`;
      `R3/4` or `3/4 BSPT`;
      `R1` or `1 BSPT`.
    - API threads:
        `1/2 API`, `3/4 API`, `1 API`.
  - Thread mount thermowells with **parallel thread**:
    - Metric threads:
      `M20x1.5`, `M24x1.5`, `M27x2`, `M33x2`.
    - Pipe threads:
      `G1/2` or `1/2 BSPF`;
      `G3/4` or `3/4 BSPF`;
      `G1` or `1 BSPF`.

  - Flange mount (threaded included) or Van Stone:
    - ASME flange:
      `1" class 150`,
      `1,5" class 150`,
      `2" class 150`,
      `3" class 150`,
      `4" class 150`,
      `6" class 150`,
      `3/4" class 300`,
      `1" class 300`,
      `1,5" class 300`,
      `2" class 300`,
      `1" class 400/600`,
      `1,5" class 400/600`,
      `2" class 400/600`,
      `1" class 900/1500`,
      `1,5" class 900/1500`,
      `2" class 900/1500`,
      `1" class 2500`,
      `1,5" class 2500`,
      `2" class 2500`,
      `3" class 300`,
      `3" class 400/600`,
      `3" class 900`,
      `3" class 1500`,
      `3" class 2500`.
    - DIN flange:
      `DN 20 PN 2.5/6`;
      `DN 20 PN 10/16/25/40`;
      `DN 20 PN 63/100`;
      `DN 25 PN 2.5/6`;
      `DN 25 PN 10/16/25/40`;
      `DN 25 PN 63/100`;
      `DN 40 PN 2.5/6`;
      `DN 40 PN 10/16/25/40`;
      `DN 40 PN 63/100`;
      `DN 50 PN 2.5/6`;
      `DN 50 PN 10/16`;
      `DN 50 PN 25/40`;
      `DN 50 PN 63`;
      `DN 65 PN 2.5/6`;
      `DN 65 PN 10/16`;
      `DN 65 PN 25/40`;
      `DN 65 PN 63`;
      `DN 65 PN 100`;
      `DN 80 PN 2.5/6`;
      `DN 80 PN 10/16`;
      `DN 80 PN 25/40`;
      `DN 80 PN 63`;
      `DN 80 PN 100`;
      `DN 100 PN 2.5/6`;
      `DN 100 PN 10/16`;
      `DN 100 PN 25/40`;
      `DN 100 PN 63`.

  - Weld mount (socket weld included):
    - Inch pipe:
      `3/4"`; `1"`; `1 1/4"`; `1 1/2"`.
    - DIN 43772 form 4:
      `18 h7`; `24 h7`; `26 h7 tip D12.5`; `26 h7 tip D15`; `32 h11`.

- `stemStyle` - Stem form: `straight`, `tapered` or `stepped`.

- `material` - Thermowell material. One of:
  `304`;
  `304L`;
  `304/304L` (any of them);
  `304 Teflon` (with PTFE coating);
  `304L Teflon` (with PTFE coating);
  `304/304L with Teflon coat` (any of them);
  `310`;
  `316`;
  `316L`;
  `316/316L` (any of them);
  `316L PFA` (with PFA coating);
  `316/316L PFA` (any of them, with PFA coating);
  `316/316L NORSOK` (any of them, according to NORSOK standards);
  `316 tantalum` (with tantalum sheath);
  `316/316L tantalum` (any of them, with tantalum sheath);
  `316Ti`;
  `321`;
  `321H`;
  `347`;
  `904L`;
  `alloy 20`;
  `alloy 400`;
  `alloy 400 & 304` (stem & flange);
  `alloy 400 & 304/304L` (stem & flange);
  `alloy 600`;
  `alloy 600 & 304` (stem & flange);
  `alloy 600 & 304/304L` (stem & flange);
  `alloy 601`;
  `alloy 625`;
  `alloy 800`;
  `alloy 800H/800HT` (any of them);
  `alloy 825`;
  `alloy B`;
  `alloy B3`;
  `alloy C-22`;
  `alloy C-22 & 304` (stem & flange);
  `alloy C-22 & 304/304L` (stem & flange);
  `alloy C-22 & 316L` (stem & flange);
  `alloy C-22 & 316/316L` (stem & flange);
  `alloy С-276`;
  `alloy C-4 & 304` (stem & flange);
  `alloy C-4 & 304/304L` (stem & flange);
  `alloy F44 Mo6`;
  `carbon steel`;
  `CrMo B11 & CrMo F11` (chrome-molybdenum, stem & flange);
  `CrMo B22 & CrMo F22` (chrome-molybdenum, stem & flange);
  `CrMo F-91`;
  `duplex 2205`;
  `duplex 2205 NORSOK` (according to NORSOK standards);
  `Mo` (molybdenum);
  `Ni` (nickel 200);
  `super duplex`;
  `super duplex NORSOK` (according to NORSOK standards);
  `Ti` (titanium grade 2).

- `headLen` - Head "H" length.

- `instrConn` - Instrument connection "N". One of:
  - ANPT and NPT threads:
    `1/2-14 ANPT`; `3/4-14 ANPT`; `3/4-14 NPT`;
  - Metric threads:
    `M14x1.5`; `M18x1.5`; `M20x1.5`; `M22x1.5`; `M24x1.5`; `M24x2`; `M27x1.5`; `M27x2`;
  - Pipe threads:
    `G1/2` or `1/2 BSPF`; `G3/4` or `3/4 BSPF`; `R1/2` or `1/2 BSPT`;
  - Others:
    `1/2 API`; `1/2-14 NPSM`.

- `options` - List of options. Separated with any non-letter and non-numeric symbol, or without any separator. May be empty.

Readyness: :x: (in progress)


## TOD01
Recognize order codes (what is a model) and converts to D01 code. Some options may be ignored.

Format:

`=TOD01(range)`

Parameters:

- `range` - A range containing order code strings.

Readyness: :x: (in progress)


## TO114C
Recognize order codes (what is a model) and converts to 114C code. Some options may be ignored.

Format:

`=TO114C(range)`

Parameters:

- `range` - A range containing order code strings.

Readyness: :x: (in progress)


## TO0096
Recognize order codes (what is a model) and converts to 0096 code. Some options may be ignored.

Format:

`=TO0096(range)`

Parameters:

- `range` - A range containing order code strings.

Readyness: :x: (in progress)
