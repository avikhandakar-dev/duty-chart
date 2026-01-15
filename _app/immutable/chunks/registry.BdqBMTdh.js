const e=`{
  "shortName": "EMA baseline",
  "calc": [
    { "name": "ema_fast", "type": "ema", "source": "close", "period": 20 },
    { "name": "sma_slow", "type": "sma", "source": "close", "period": 50 }
  ],
  "panes": [
    {
      "pane": "main",
      "plots": [
        {
          "name": "price",
          "source": "close",
          "type": "line",
          "color": "#4b5563",
          "width": 2
        },
        {
          "name": "ema_fast_plot",
          "source": "ema_fast",
          "type": "line",
          "color": "#22c55e",
          "width": 2
        },
        {
          "name": "sma_slow_plot",
          "source": "sma_slow",
          "type": "line",
          "color": "#3b82f6",
          "width": 2
        }
      ]
    }
  ]
}
`,n=`{
  "shortName": "Labels + Shapes",
  "calc": [
    { "name": "ema_fast", "type": "ema", "source": "close", "period": 13 },
    { "name": "sma_slow", "type": "sma", "source": "close", "period": 34 }
  ],
  "panes": [
    {
      "pane": "main",
      "plots": [
        {
          "name": "close_line",
          "source": "close",
          "type": "line",
          "color": "#6b7280",
          "width": 2
        },
        {
          "name": "ema_fast_plot",
          "source": "ema_fast",
          "type": "line",
          "color": "#10b981",
          "width": 2
        },
        {
          "name": "sma_slow_plot",
          "source": "sma_slow",
          "type": "line",
          "color": "#6366f1",
          "width": 2
        }
      ],
      "labels": [
        {
          "whenExpr": "ema_fast > sma_slow",
          "text": "Fast above slow",
          "shape": "arrowUp",
          "position": "below",
          "source": "ema_fast",
          "color": "#16a34a",
          "bgColor": "#dcfce7"
        },
        {
          "whenExpr": "ema_fast < sma_slow",
          "text": "Fast below slow",
          "shape": "arrowDown",
          "position": "above",
          "source": "sma_slow",
          "color": "#ef4444",
          "bgColor": "#fee2e2"
        }
      ]
    }
  ]
}
`,o=`{
  "shortName": "Polyline + Path",
  "calc": [
    { "name": "ema_base", "type": "ema", "source": "close", "period": 21 }
  ],
  "panes": [
    {
      "pane": "main",
      "plots": [
        {
          "name": "price",
          "source": "close",
          "type": "line",
          "color": "#334155",
          "width": 2
        },
        {
          "name": "ema_base_plot",
          "source": "ema_base",
          "type": "line",
          "color": "#f59e0b",
          "width": 2
        }
      ],
      "runtimeDrawOps": [
        {
          "kind": "polyline_new",
          "assign": "swing_path",
          "once": true,
          "when": "true",
          "points": [
            {
              "x": "bar_index - 30",
              "y": "ema_base + 0.8",
              "xloc": "bar_index",
              "yloc": "price"
            },
            {
              "x": "bar_index - 15",
              "y": "ema_base - 0.4",
              "xloc": "bar_index",
              "yloc": "price"
            },
            {
              "x": "bar_index - 5",
              "y": "ema_base + 0.2",
              "xloc": "bar_index",
              "yloc": "price"
            },
            {
              "x": "bar_index",
              "y": "ema_base",
              "xloc": "bar_index",
              "yloc": "price"
            }
          ],
          "color": "#f97316",
          "width": 2,
          "layer": "overlay",
          "includeInAutoscale": true
        },
        {
          "kind": "path_new",
          "assign": "arrow_path",
          "once": true,
          "when": "true",
          "commands": [
            {
              "cmd": "M",
              "x": "bar_index - 8",
              "y": "ema_base + 1",
              "xloc": "bar_index",
              "yloc": "price"
            },
            {
              "cmd": "L",
              "x": "bar_index - 2",
              "y": "ema_base + 1",
              "xloc": "bar_index",
              "yloc": "price"
            },
            {
              "cmd": "L",
              "x": "bar_index - 5",
              "y": "ema_base + 1.8",
              "xloc": "bar_index",
              "yloc": "price"
            }
          ],
          "color": "#22c55e",
          "width": 2,
          "opacity": 0.9,
          "layer": "overlay"
        }
      ]
    }
  ]
}
`,i=`{
  "shortName": "Layer ordering",
  "calc": [
    { "name": "sma_mid", "type": "sma", "source": "close", "period": 30 }
  ],
  "panes": [
    {
      "pane": "main",
      "plots": [
        {
          "name": "background_area",
          "source": "close",
          "type": "area",
          "color": "rgba(14,165,233,0.25)",
          "layer": "background",
          "width": 1
        },
        {
          "name": "midline",
          "source": "sma_mid",
          "type": "line",
          "color": "#0ea5e9",
          "width": 3,
          "layer": "foreground"
        }
      ],
      "runtimeLabels": [
        {
          "x": "bar_index - 5",
          "y": "sma_mid",
          "when": "true",
          "text": "Foreground label",
          "shape": "label",
          "bgColor": "#0f172a",
          "textColor": "#f8fafc",
          "layer": "overlay",
          "zIndex": 30
        },
        {
          "x": "bar_index - 5",
          "y": "sma_mid - 1.5",
          "when": "true",
          "text": "Background label",
          "shape": "label",
          "bgColor": "#cbd5e1",
          "textColor": "#0f172a",
          "layer": "background",
          "zIndex": 5
        }
      ]
    }
  ]
}
`,t=`{
  "shortName": "Autoscale exclusion",
  "calc": [
    { "name": "ema_anchor", "type": "ema", "source": "close", "period": 10 }
  ],
  "panes": [
    {
      "pane": "main",
      "plots": [
        {
          "name": "close_line",
          "source": "close",
          "type": "line",
          "color": "#475569",
          "width": 2
        },
        {
          "name": "ema_anchor_plot",
          "source": "ema_anchor",
          "type": "line",
          "color": "#14b8a6",
          "width": 2
        }
      ],
      "runtimeLines": [
        {
          "x1": "bar_index - 12",
          "y1": "ema_anchor + 5",
          "x2": "bar_index + 8",
          "y2": "ema_anchor + 5",
          "when": "true",
          "color": "#f97316",
          "width": 2,
          "xloc": "bar_index",
          "includeInAutoscale": false,
          "layer": "overlay"
        }
      ],
      "runtimeBoxes": [
        {
          "left": "bar_index - 6",
          "right": "bar_index - 2",
          "top": "ema_anchor + 3",
          "bottom": "ema_anchor + 1",
          "when": "true",
          "bgColor": "rgba(248,113,113,0.35)",
          "borderColor": "#ef4444",
          "xloc": "bar_index",
          "includeInAutoscale": false,
          "layer": "overlay",
          "zIndex": 15
        }
      ]
    }
  ]
}
`,l=`{
  "shortName": "Draw clear + for_each",
  "calc": [
    { "name": "sma_base", "type": "sma", "source": "close", "period": 20 }
  ],
  "panes": [
    {
      "pane": "main",
      "plots": [
        {
          "name": "price",
          "source": "close",
          "type": "line",
          "color": "#0f172a",
          "width": 2
        },
        {
          "name": "sma_base_plot",
          "source": "sma_base",
          "type": "line",
          "color": "#10b981",
          "width": 2
        }
      ],
      "runtimeDrawOps": [
        {
          "kind": "line_new",
          "assign": "grid_top",
          "once": true,
          "when": "true",
          "x1": "bar_index - 40",
          "y1": "sma_base + 3",
          "x2": "bar_index",
          "y2": "sma_base + 3",
          "xloc": "bar_index",
          "color": "#cbd5e1",
          "width": 1,
          "layer": "background",
          "groupId": "grid",
          "tags": ["gridline"]
        },
        {
          "kind": "line_new",
          "assign": "grid_mid",
          "once": true,
          "when": "true",
          "x1": "bar_index - 40",
          "y1": "sma_base",
          "x2": "bar_index",
          "y2": "sma_base",
          "xloc": "bar_index",
          "color": "#94a3b8",
          "width": 1,
          "layer": "background",
          "groupId": "grid",
          "tags": ["gridline"]
        },
        {
          "kind": "line_new",
          "assign": "grid_bottom",
          "once": true,
          "when": "true",
          "x1": "bar_index - 40",
          "y1": "sma_base - 3",
          "x2": "bar_index",
          "y2": "sma_base - 3",
          "xloc": "bar_index",
          "color": "#cbd5e1",
          "width": 1,
          "layer": "background",
          "groupId": "grid",
          "tags": ["gridline"]
        },
        {
          "kind": "draw_for_each",
          "once": true,
          "when": "true",
          "filterKind": "line",
          "groupId": "grid",
          "updates": {
            "color": "#eab308",
            "width": 2,
            "opacity": 0.9
          }
        },
        {
          "kind": "label_new",
          "assign": "temp_label",
          "once": true,
          "when": "true",
          "x": "bar_index",
          "y": "sma_base + 2",
          "text": "to be cleared",
          "shape": "label",
          "bgColor": "#f97316",
          "textColor": "#0f172a",
          "xloc": "bar_index",
          "groupId": "temp",
          "tags": ["ephemeral"]
        },
        {
          "kind": "draw_clear",
          "once": true,
          "when": "true",
          "filterKind": "label",
          "groupId": "temp"
        }
      ]
    }
  ]
}
`,r=`//@pine
//@version=5
indicator("Golden EMA Baseline", overlay=true)

emaFast = ta.ema(close, 21)
smaSlow = ta.sma(close, 50)

plot(close, title="Close", color=color.gray, linewidth=2)
plot(emaFast, title="EMA 21", color=color.lime, linewidth=2)
plot(smaSlow, title="SMA 50", color=color.blue, linewidth=2)
`,a=`//@pine
//@version=5
indicator("Golden History + NZ", overlay=false)

prev1 = close[1]
prev2 = close[2]
diff = prev1 - prev2
cleaned = nz(diff, 0)
masked = prev2 == prev2 ? cleaned : na

plot(cleaned, title="NZ diff", color=color.orange, linewidth=2)
plot(masked, title="Masked", color=color.blue, linewidth=1)
`,s=`//@pine
//@version=5
indicator("Golden History Zero", overlay=false)

cur = close[0]
prev1 = close[1]
prev2 = close[2]

delta0 = cur - close
delta1 = cur - prev1
delta2 = cur - prev2

plot(delta0, title="Delta0", color=color.gray, linewidth=1)
plot(delta1, title="Delta1", color=color.blue, linewidth=1)
plot(delta2, title="Delta2", color=color.orange, linewidth=1)
`,c=`//@pine
//@version=5
indicator("Golden Var State", overlay=false)

var float counter = 0
counter := counter + 1

plot(counter, title="Counter", color=color.green, linewidth=2)
`,d=`//@pine
//@version=5
indicator("Golden Var Init Once", overlay=false)

var float counter = 0
counter := counter + 1

plot(counter, title="Counter", color=color.green, linewidth=2)
`,p=`//@pine
//@version=5
indicator("Golden IF Series Basic", overlay=false)

cond = close > open
x = cond ? 1 : 0

var float y = na
if cond
    y := close
else
    y := na

plot(x, title="X", color=color.blue, linewidth=1)
plot(y, title="Y", color=color.orange, linewidth=2)
`,b=`//@pine
//@version=5
indicator("Golden IF + Ternary Mix", overlay=false)

cond = close > open

var float s = 0
if cond
    s := s + 1
else
    s := s + 2

t = cond ? s : s[1]

plot(t, title="T", color=color.orange, linewidth=2)
`,x=`//@pine
//@version=5
indicator("Golden Ternary Nested", overlay=false)

cond1 = close > open
cond2 = close > close[1]

a = cond1 ? (cond2 ? 10 : 20) : 30

plot(a, title="A", color=color.green, linewidth=2)
`,h=`//@pine
//@version=5
indicator("Golden Array Basic Float", overlay=false)

var a = array.new_float(0)
array.push(a, close)

v = array.get(a, array.size(a) - 1)

plot(v, title="V", color=color.blue, linewidth=2)
`,m=`//@pine
//@version=5
indicator("Golden Array Set/Get", overlay=false)

var a = array.new_float(3, na)
array.set(a, 1, close)

plot(array.get(a, 1), title="V", color=color.green, linewidth=2)
`,w=`//@pine
//@version=5
indicator("Golden Array Size", overlay=false)

var a = array.new_int(0)
if bar_index < 3
    array.push(a, bar_index + 1)

plot(array.size(a), title="Size", color=color.orange, linewidth=2)
`,y=`//@pine
//@version=5
indicator("array.from basic", overlay=true)

levels = array.from(10, 20, 30)
plot(array.get(levels, 0), title="L1", color="#f59e0b")
plot(array.get(levels, 1), title="L2", color="#22c55e")
plot(array.get(levels, 2), title="L3", color="#3b82f6")
`,_=`//@pine
//@version=5
indicator("Array String Basic", overlay=false)

a = array.new_string(0)
array.push(a, "A")
array.push(a, "B")
array.push(a, "C")

last = array.get(a, array.size(a) - 1)

plot(array.size(a), title="Size", color=color.orange, linewidth=2)
plot(last, title="Last", color=color.blue, linewidth=2)
plotshape(last == "C", style=shape.triangleup, location=location.abovebar, text="C", color=color.green)
`,g=`//@pine
//@version=5
indicator("Golden Plotshape Location + Style", overlay=true)

cond_up = close > open
cond_dn = close < open

plotshape(cond_up, location=location.abovebar, style=shape.triangleup, text="UP", color=color.green, textcolor=color.white, size=size.small)
plotshape(cond_dn, location=location.belowbar, style=shape.triangledown, text="DN", color=color.red, textcolor=color.white, size=size.small)
`,f=`//@pine
//@version=5
indicator("Golden Plotshape Size + Color", overlay=true)

cond = bar_index % 5 == 0

plotshape(cond, location=location.abovebar, style=shape.circle, text="C", color=color.blue, textcolor=color.white, size=size.large)
`,u=`//@pine
//@version=5
indicator("Golden Plotchar Basic", overlay=true)

cond = bar_index % 7 == 0

plotchar(cond, char="X", location=location.belowbar, color=color.orange, textcolor=color.black, size=size.tiny)
`,v=`//@pine
//@version=5
indicator("Plot OHLC family", overlay=true)

plotcandle(open, high, low, close, title="Candles", color="#16a34a", wickcolor="#166534", bordercolor="#166534")
plotbar(open, high, low, close, title="Bars", color="#2563eb")
plotohlc(open, high, low, close, title="OHLC", color="#f97316")
`,L=`//@pine
//@version=5
indicator("plotfill + hline + plotarrow", overlay=true)

fast = ta.ema(close, 9)
slow = ta.sma(close, 21)

pFast = plot(fast, title="EMA 9", color="#22c55e")
pSlow = plot(slow, title="SMA 21", color="#0ea5e9")
plotfill(pFast, pSlow, color="rgba(34,197,94,0.15)")
fill(pFast, pSlow, color="rgba(14,165,233,0.12)")

hline(0, "Zero", color="#94a3b8")
plotarrow(close - open, colorup="#16a34a", colordown="#ef4444")
`,B=`//@pine
//@version=5
indicator("Golden Label Box Line", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

isLabel = bar_index % 15 == 0
isLine = bar_index % 20 == 0
isBox = bar_index % 25 == 0

if isLabel
    label.new(bar_index, high, text="L", style=label.style_label_down, color=color.new(color.blue, 0), textcolor=color.white)

if isLine
    line.new(bar_index - 5, low, bar_index, high, color=color.orange, width=2)

if isBox
    box.new(bar_index - 3, high + 1, bar_index + 3, low - 1, border_color=color.teal, bgcolor=color.new(color.teal, 80))
`,A=`//@pine
//@version=5
indicator("Label Basic (Bar Index)", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

var l = label.new(bar_index, close, "init", xloc=xloc.bar_index, color=color.orange, textcolor=color.black)
if bar_index > 0
    label.set_xy(l, bar_index, close)
    label.set_text(l, "live")
`,C=`//@pine
//@version=5
indicator("Label Tooltip + Align", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 10
    label.new(bar_index, high, "Tip", textalign=text.align_left, tooltip="Hello", color=color.yellow, textcolor=color.black)
`,k=`//@pine
//@version=5
indicator("Label Xloc Time Between", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 5
    label.new(time + 30000, close, "time", xloc=xloc.bar_time, color=color.green)
`,z=`//@pine
//@version=5
indicator("Label Yloc Price", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 6
    label.new(bar_index, close, "price", yloc=yloc.price, color=color.blue, textcolor=color.white)
`,S=`//@pine
//@version=5
indicator("Label Yloc Above", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 6
    label.new(bar_index, na, "above", yloc=yloc.abovebar, color=color.green, textcolor=color.black)
`,V=`//@pine
//@version=5
indicator("Label Yloc Below", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 6
    label.new(bar_index, na, "below", yloc=yloc.belowbar, color=color.red, textcolor=color.white)
`,T=`//@pine
//@version=5
indicator("Label Location Alias", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 8
    label.new(bar_index, na, "loc", location=location.belowbar, color=color.orange, textcolor=color.black)
`,M=`//@pine
//@version=5
indicator("Golden Label Style BG Border", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 4
    label.new(bar_index, close, "bg", yloc=yloc.price, bgcolor=color.rgb(37, 99, 235), bordercolor=color.rgb(239, 68, 68), border_width=3, textcolor=color.white)
`,D=`//@pine
//@version=5
indicator("Golden Label Size Mapping", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 2
    label.new(bar_index, close, "tiny", size=size.tiny)
if bar_index == 3
    label.new(bar_index, close, "small", size=size.small)
if bar_index == 4
    label.new(bar_index, close, "normal", size=size.normal)
if bar_index == 5
    label.new(bar_index, close, "large", size=size.large)
if bar_index == 6
    label.new(bar_index, close, "huge", size=size.huge)
if bar_index == 7
    label.new(bar_index, close, "min", size=4)
if bar_index == 8
    label.new(bar_index, close, "max", size=40)
`,E=`//@pine
//@version=5
indicator("Golden Label Text Ellipsis", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 3
    label.new(bar_index, close, "This is a very long label text example")
`,P=`//@pine
//@version=5
indicator("Golden Label Tooltip Ellipsis", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 3
    label.new(bar_index, close, "tip", tooltip="This tooltip string is intentionally long to exceed the eighty character limit for truncation.")
`,I=`//@pine
//@version=5
indicator("Box Basic", overlay=true)

var box b = na

if bar_index == 5
    b := box.new(bar_index, high + 1, bar_index + 3, low - 1,
        border_color=color.purple,
        bgcolor=color.new(color.purple, 85),
        border_width=2,
        border_style=line.style_solid,
        text="Range",
        text_color=color.white,
        text_size=size.normal,
        text_halign=text.align_center,
        text_valign=text.align_middle)

if bar_index == 7
    box.set_left(b, bar_index - 1)
    box.set_right(b, bar_index + 2)
    box.set_top(b, high + 2)
    box.set_bottom(b, low - 2)
    box.set_text(b, "Update")
    box.set_text_size(b, size.large)
    box.set_border_width(b, 3)
`,G=`//@pine
//@version=5
indicator("Box Delete Then Set", overlay=true)

var box b = na

if bar_index == 5
    b := box.new(bar_index, high + 1, bar_index + 2, low - 1,
        border_color=color.red,
        bgcolor=color.new(color.red, 85))

if bar_index == 6
    box.delete(b)

if bar_index == 7
    box.set_left(b, bar_index - 2)
`,O=`//@pine
//@version=5
indicator("Box Extend None", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 20
    box.new(bar_index - 2, high, bar_index + 2, low, extend=extend.none, border_color=color.gray)
`,R=`//@pine
//@version=5
indicator("Box Extend Left", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 20
    box.new(bar_index - 2, high, bar_index + 2, low, extend=extend.left, border_color=color.green)
`,F=`//@pine
//@version=5
indicator("Box Extend Right", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 20
    box.new(bar_index - 2, high, bar_index + 2, low, extend=extend.right, border_color=color.blue)
`,N=`//@pine
//@version=5
indicator("Box Extend Both", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 20
    box.new(bar_index - 2, high, bar_index + 2, low, extend=extend.both, border_color=color.orange)
`,H=`//@pine
//@version=5
indicator("Box Extend Time", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 20
    box.new(time, high, time + 60000, low, xloc=xloc.bar_time, extend=extend.both, border_color=color.red)
`,j=`//@pine
//@version=5
indicator("Box Style BG Border", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if barstate.islast
    box.new(bar_index - 6, high, bar_index - 1, low,
        bgcolor=color.new(color.orange, 70),
        border_color=color.orange,
        border_width=2,
        text="bg+border")
    box.new(bar_index + 1, high, bar_index + 6, low,
        bgcolor=color.new(color.blue, 80),
        border_width=3,
        text="bg default border")
`,U=`//@pine
//@version=5
indicator("Box Style Dash", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if barstate.islast
    box.new(bar_index - 8, high, bar_index - 2, low,
        border_color=color.green,
        border_style=line.style_dashed,
        border_width=1,
        text="dashed")
    box.new(bar_index + 2, high, bar_index + 8, low,
        border_color=color.red,
        border_style=line.style_dotted,
        border_width=3,
        text="dotted")
`,W=`//@pine
//@version=5
indicator("Box Text Align", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if barstate.islast
    box.new(bar_index - 9, high, bar_index - 5, low,
        text="LT",
        text_halign=text.align_left,
        text_valign=text.align_top,
        bgcolor=color.new(color.gray, 85))
    box.new(bar_index - 2, high, bar_index + 2, low,
        text="CM",
        text_halign=text.align_center,
        text_valign=text.align_middle,
        bgcolor=color.new(color.gray, 85))
    box.new(bar_index + 5, high, bar_index + 9, low,
        text="RB",
        text_halign=text.align_right,
        text_valign=text.align_bottom,
        bgcolor=color.new(color.gray, 85))
`,K=`//@pine
//@version=5
indicator("Box Text Ellipsis", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

longText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789--extra"
longTip = "tooltip-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789--extra"

if barstate.islast
    box.new(bar_index - 8, high, bar_index + 8, low,
        text=longText,
        tooltip=longTip,
        text_halign=text.align_left,
        text_valign=text.align_top,
        border_color=color.teal,
        bgcolor=color.new(color.teal, 85))
`,X=`//@pine
//@version=5
indicator("Box Border Width Clamp", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if barstate.islast
    box.new(bar_index - 6, high, bar_index + 6, low,
        border_color=color.fuchsia,
        border_width=bar_index,
        bgcolor=color.new(color.fuchsia, 85),
        text="bw clamp")
`,Y=`//@pine
//@version=5
indicator("Label Limit Delete Frees", overlay=true)

for i = 0 to 299
    label.new(bar_index, barstate.islast ? close + i * syminfo.mintick : na, text="A", group="drop")

for i = 0 to 199
    label.new(bar_index, barstate.islast ? close + (i + 300) * syminfo.mintick : na, text="B", group="keep")

draw.clear(kind="label", group="drop", when=barstate.islast)

for i = 0 to 199
    label.new(bar_index, barstate.islast ? close - i * syminfo.mintick : na, text="C", group="more")
`,Z=`//@pine
//@version=5
indicator("Label Limit Diag Once", overlay=true)

for i = 0 to 599
    label.new(bar_index, barstate.islast ? close + i * syminfo.mintick : na, text="A")

for i = 0 to 599
    label.new(bar_index, barstate.islast ? close + (i + 600) * syminfo.mintick : na, text="B")

for i = 0 to 599
    label.new(bar_index, barstate.islast ? close - i * syminfo.mintick : na, text="C")
`,q=`//@pine
//@version=5
indicator("Example Clear By Group Mixed", overlay=true)

for i = 0 to 4
    line.new(bar_index - 1, close + i * syminfo.mintick, bar_index, close + (i + 1) * syminfo.mintick, group="drop", when=barstate.islast)

for i = 0 to 4
    label.new(bar_index, close + (i + 6) * syminfo.mintick, text="L", group="drop", when=barstate.islast)

for i = 0 to 4
    box.new(bar_index, close + (i + 12) * syminfo.mintick, bar_index + 1, close + (i + 11) * syminfo.mintick, group="drop", when=barstate.islast)

draw.clear(group="drop", when=barstate.islast)

for i = 0 to 4
    line.new(bar_index - 1, close - i * syminfo.mintick, bar_index, close - (i + 1) * syminfo.mintick, group="keep", when=barstate.islast)

for i = 0 to 4
    label.new(bar_index, close - (i + 6) * syminfo.mintick, text="R", group="keep", when=barstate.islast)

for i = 0 to 4
    box.new(bar_index, close - (i + 12) * syminfo.mintick, bar_index + 1, close - (i + 11) * syminfo.mintick, group="keep", when=barstate.islast)
`,Q=`//@pine
//@version=5
indicator("Example Clear By Tags Mixed", overlay=true)

for i = 0 to 4
    line.new(bar_index - 1, close + i * syminfo.mintick, bar_index, close + (i + 1) * syminfo.mintick, tags="drop", when=barstate.islast)

for i = 0 to 4
    label.new(bar_index, close + (i + 6) * syminfo.mintick, text="T", tags="drop", when=barstate.islast)

for i = 0 to 4
    box.new(bar_index, close + (i + 12) * syminfo.mintick, bar_index + 1, close + (i + 11) * syminfo.mintick, tags="drop", when=barstate.islast)

draw.clear(tag="drop", when=barstate.islast)

for i = 0 to 4
    line.new(bar_index - 1, close - i * syminfo.mintick, bar_index, close - (i + 1) * syminfo.mintick, tags="keep", when=barstate.islast)

for i = 0 to 4
    label.new(bar_index, close - (i + 6) * syminfo.mintick, text="U", tags="keep", when=barstate.islast)

for i = 0 to 4
    box.new(bar_index, close - (i + 12) * syminfo.mintick, bar_index + 1, close - (i + 11) * syminfo.mintick, tags="keep", when=barstate.islast)
`,J=`//@pine
//@version=5
indicator("Golden Draw Clear/ForEach", overlay=true)

base = ta.sma(close, 12)
plot(base, title="Base", color=color.gray, linewidth=1)

line.new(bar_index - 6, base - 0.4, bar_index, base + 0.4, color=color.orange, width=2, group="g")
label.new(bar_index, base + 0.6, text="A", style=label.style_label_up, color=color.new(color.yellow, 0), textcolor=color.black, group="g")

if bar_index % 18 == 0
    line.new(bar_index - 3, base - 0.2, bar_index, base + 0.2, color=color.blue, width=1, group="g")

// Update line styling, then clear labels for the group.
draw.for_each(kind="line", group="g", color=color.red, width=3)
draw.clear(kind="label", group="g")
`,$=`//@pine
//@version=5
indicator("Golden Line Basic", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

var l = line.new(bar_index, close, bar_index, close, color=color.blue, width=2)
var kill = line.new(bar_index, low, bar_index, low, color=color.red, width=1)

if bar_index > 0
    line.set_xy1(l, bar_index - 1, close[1])
    line.set_xy2(l, bar_index, close)
    line.set_color(l, color.new(color.blue, 0))
    line.set_width(l, 2)

if bar_index == 5
    line.delete(kill)
`,ee=`//@pine
//@version=5
indicator("Golden Line Style + Extend", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

var l1 = line.new(bar_index, high, bar_index + 1, high, color=color.green, style=line.style_solid, extend=extend.none, width=1)
var l2 = line.new(bar_index, low, bar_index + 1, low, color=color.orange, style=line.style_dashed, extend=extend.right, width=2)
var l3 = line.new(bar_index, close, bar_index + 1, close, color=color.purple, style=line.style_dotted, extend=extend.left, width=2)

if bar_index % 7 == 0
    line.set_style(l1, line.style_dotted)
    line.set_extend(l1, extend.both)
`,ne=`//@pine
//@version=5
indicator("Line lifecycle update", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

var l = line.new(bar_index, close, bar_index, close, color=color.blue, width=2)
if bar_index > 0
    line.set_xy1(l, bar_index - 1, close[1])
    line.set_xy2(l, bar_index, close)
`,oe=`//@pine
//@version=5
indicator("Line lifecycle order", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

var l1 = line.new(bar_index, high, bar_index + 1, high, color=color.green, width=2)
var l2 = line.new(bar_index, low, bar_index + 1, low, color=color.orange, width=2)

if bar_index > 0
    line.set_xy1(l1, bar_index - 1, high[1])
    line.set_xy2(l2, bar_index, low)
`,ie=`//@pine
//@version=5
indicator("Golden Line Extend Right", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 20
    line.new(bar_index - 5, low, bar_index + 5, high, color=color.orange, width=2, extend=extend.right)
    label.new(bar_index, high, "right")
`,te=`//@pine
//@version=5
indicator("Golden Line Extend Vertical", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 20
    line.new(bar_index, low, bar_index, high, color=color.red, width=2, extend=extend.both)
    label.new(bar_index, high, "vertical")
`,le=`//@pine
//@version=5
indicator("Golden Line Style Dashed", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 20
    line.new(bar_index - 5, close, bar_index + 5, close, color=color.orange, width=2, style=line.style_dashed, extend=extend.none)
`,re=`//@pine
//@version=5
indicator("Golden Line Style Width 3", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

if bar_index == 20
    line.new(bar_index - 5, close + 0.2, bar_index + 5, close + 0.2, color=color.orange, width=3, style=line.style_dashed, extend=extend.none)
    line.new(bar_index - 5, close - 0.2, bar_index + 5, close - 0.2, color=color.purple, width=3, style=line.style_dotted, extend=extend.none)
`,ae=`//@pine
//@version=5
indicator("Golden Line xloc time", overlay=true)

plot(close, title="Close", color=color.gray, linewidth=1)

var tline = line.new(time, high, time + 60000, high, xloc=xloc.bar_time, color=color.teal, width=1)
line.set_xloc(tline, xloc.bar_time)

if bar_index > 0
    line.set_xy2(tline, time + 60000, high)
`,se=`//@pine
//@version=5
indicator("xloc demo clean", overlay=true)

var lExact = line.new(time, high + 1, time + 60000, high + 1, xloc=xloc.bar_time, color=color.green, extend=extend.right)
var lBetween = line.new(time + 30000, high + 2, time + 90000, high + 2, xloc=xloc.bar_time, color=color.orange, extend=extend.right)
var lBefore = line.new(time - 60000, high + 3, time - 30000, high + 3, xloc=xloc.bar_time, color=color.red, extend=extend.right)
`,ce=`//@pine
//@version=5
indicator("Pine ta.bbands", overlay=true)

[basis, upper, lower] = ta.bbands(close, 20, 2)

plot(basis, title="BB Basis", color="#22c55e", width=2)
plot(upper, title="BB Upper", color="#60a5fa", width=1, style="dashed")
plot(lower, title="BB Lower", color="#60a5fa", width=1, style="dashed")

plotshape(close > upper, text="U", color=color.red, location=location.abovebar, style=shape.triangledown)
`,de=`//@pine
//@version=5
indicator("Pine ta.macd", overlay=false)

[macdLine, signalLine, histLine] = ta.macd(close, 12, 26, 9)

plot(macdLine, title="MACD", color="#22c55e", width=2)
plot(signalLine, title="Signal", color="#f59e0b", width=1)
plot(histLine, title="Hist", color="#64748b", style="histogram")

plotshape(macdLine > signalLine, text="M", color=color.green, location=location.abovebar, style=shape.circle)
`,pe=`//@pine
//@version=5
indicator("Pine ta.stoch", overlay=false)

[k, d] = ta.stoch(high, low, close, 14, 3)

plot(k, title="%K", color="#60a5fa", width=2)
plot(d, title="%D", color="#f97316", width=1, style="dashed")

plotshape(k > 80, text="OB", color=color.orange, location=location.abovebar, style=shape.triangleup)
`,be=`//@pine
//@version=5
indicator("Pine ta.cci", overlay=false)

cciVal = ta.cci(high, low, close, 20)

plot(cciVal, title="CCI", color="#38bdf8", width=2)
plotshape(cciVal > 100, text="HI", color=color.green, location=location.abovebar, style=shape.triangleup)
`,xe=`//@pine
//@version=5
indicator("Pine ta.mfi", overlay=false)

mfiVal = ta.mfi(high, low, close, volume, 14)

plot(mfiVal, title="MFI", color="#a855f7", width=2)
plotshape(mfiVal < 20, text="LO", color=color.red, location=location.belowbar, style=shape.triangledown)
`,he=`//@pine
//@version=5
indicator("Pine ta.obv", overlay=false)

obvVal = ta.obv(close, volume)

plot(obvVal, title="OBV", color="#10b981", width=2)
plotshape(obvVal > obvVal[1], text="UP", color=color.green, location=location.abovebar, style=shape.circle)
`,me=`//@pine
//@version=5
indicator("Pine ta.williamsr", overlay=false)

wr = ta.williamsr(14)

plot(wr, title="WR", color="#60a5fa", linewidth=2)
plotshape(wr < -80, text="OS", color=color.teal, style=shape.triangleup)
plotshape(wr > -20, text="OB", color=color.orange, style=shape.triangledown)
`,we=`//@pine
//@version=5
indicator("Pine ta.dmi", overlay=false)

[plus, minus, adx] = ta.dmi(14, 14)

plot(plus, title="+DI", color="#22c55e")
plot(minus, title="-DI", color="#ef4444")
plot(adx, title="ADX", color="#60a5fa")
plotshape(plus > minus, text="+", color=color.green, style=shape.triangleup)
`,ye=`//@pine
//@version=5
indicator("Pine ta.plus_di/minus_di", overlay=false)

plus = ta.plus_di(14)
minus = ta.minus_di(14)

plot(plus, title="+DI", color="#22c55e")
plot(minus, title="-DI", color="#ef4444")
plotshape(plus > minus, text="+", color=color.green, style=shape.triangleup)
plotshape(minus > plus, text="-", color=color.red, style=shape.triangledown)
`,_e=`//@pine
//@version=5
indicator("ta.highest/ta.lowest", overlay=true)

len = 5
hi_base = highest(close, len)
hi_ta = ta.highest(close, len)
lo_base = lowest(close, len)
lo_ta = ta.lowest(close, len)

eq_hi = abs(nz(hi_base, 0) - nz(hi_ta, 0)) < 1e-6
eq_lo = abs(nz(lo_base, 0) - nz(lo_ta, 0)) < 1e-6

plot(hi_base, title="Highest", color="#22c55e", width=2)
plot(hi_ta, title="Highest ta", color="#16a34a", width=1, style="dashed")
plot(lo_base, title="Lowest", color="#3b82f6", width=2)
plot(lo_ta, title="Lowest ta", color="#2563eb", width=1, style="dashed")

plotshape(eq_hi, title="EQ HI", text="H", color=color.green, location=location.abovebar, style=shape.circle)
plotshape(eq_lo, title="EQ LO", text="L", color=color.blue, location=location.belowbar, style=shape.circle)
`,ge=`//@pine
//@version=5
indicator("ta.sum alias", overlay=false)

s1 = sum(close, 5)
s2 = ta.sum(close, 5)

plot(s1, title="sum", color=color.blue)
plot(s2, title="ta.sum", color=color.orange)
plotshape(nz(s1 - s2, 0) == 0, text="EQ", style=shape.circle, location=location.bottom, color=color.green)
`,fe=`//@pine
//@version=5
indicator("ta.rising/ta.falling", overlay=false)

src_up = bar_index % 6
src_down = 5 - (bar_index % 6)

rise = ta.rising(src_up, 3)
fall = ta.falling(src_down, 3)

plot(src_up, title="Up", color=color.blue)
plot(src_down, title="Down", color=color.orange)
plotshape(rise, text="RISE", style=shape.triangleup, price=src_up, color=color.green)
plotshape(fall, text="FALL", style=shape.triangledown, price=src_down, color=color.red)
`,ue=`//@pine
//@version=5
indicator("Pine ta.valuewhen basic", overlay=true)

cond = close > open

v0 = ta.valuewhen(cond, close, 0)
v1 = ta.valuewhen(cond, close, 1)

plot(v0, title="VW 0", color="#22c55e", width=2)
plot(v1, title="VW 1", color="#60a5fa", width=1, style="dashed")
plotshape(cond, text="C", color=color.green, location=location.abovebar, style=shape.circle)
`,ve=`//@pine
//@version=5
indicator("Pine ta.pivot basic", overlay=true)

src = close
ph = ta.pivothigh(src, 3, 3)
pl = ta.pivotlow(src, 3, 3)

plot(ph, title="PH", color="#22c55e", width=2)
plot(pl, title="PL", color="#ef4444", width=2)

plotshape(ph, text="PH", color=color.green, location=location.abovebar, style=shape.triangleup)
plotshape(pl, text="PL", color=color.red, location=location.belowbar, style=shape.triangledown)
`,Le=`//@pine
//@version=5
indicator("Pine ta extended MAs", overlay=false)

src = close

demaVal = ta.dema(src, 20)
temaVal = ta.tema(src, 20)
hmaVal = ta.hma(src, 20)
kamaVal = ta.kama(src, 10, 2, 30)
almaVal = ta.alma(src, 20, 0.85, 6)
t3Val = ta.t3(src, 10, 0.7)
trimaVal = ta.trima(src, 20)
swmaVal = ta.swma(src, 20)
evwmaVal = ta.evwma(close, volume, 20)

plot(demaVal, title="DEMA", color="#ef4444")
plot(temaVal, title="TEMA", color="#f97316")
plot(hmaVal, title="HMA", color="#eab308")
plot(kamaVal, title="KAMA", color="#22c55e")
plot(almaVal, title="ALMA", color="#14b8a6")
plot(t3Val, title="T3", color="#3b82f6")
plot(trimaVal, title="TRIMA", color="#8b5cf6")
plot(swmaVal, title="SWMA", color="#ec4899")
plot(evwmaVal, title="EVWMA", color="#0ea5e9")
`,Be=`//@pine
//@version=5
indicator("Pine ta extended oscillators", overlay=false)

src = close

cmoVal = ta.cmo(src, 14)
tsiVal = ta.tsi(src, 25, 13)
stochrsiVal = ta.stochrsi(src, 14, 3, 3)
ppoVal = ta.ppo(src, 12, 26)
trixVal = ta.trix(src, 9)
aoVal = ta.ao()
zVal = ta.zscore(src, 20)
atrpVal = ta.atrp(14)
natrVal = ta.natr(14)

plot(cmoVal, title="CMO", color="#ef4444")
plot(tsiVal, title="TSI", color="#f97316")
plot(stochrsiVal, title="StochRSI", color="#eab308")
plot(ppoVal, title="PPO", color="#22c55e")
plot(trixVal, title="TRIX", color="#0ea5e9")
plot(aoVal, title="AO", color="#8b5cf6")
plot(zVal, title="ZScore", color="#14b8a6")
plot(atrpVal, title="ATRP", color="#94a3b8")
plot(natrVal, title="NATR", color="#64748b")
`,Ae=`//@pine
//@version=5
indicator("Pine ta extended channels", overlay=false)

[kcMid, kcUpper, kcLower] = ta.keltner(20, 1.5)
[donUpper, donLower, donMid] = ta.donchian(20)

plot(kcMid, title="KC Mid", color="#22c55e")
plot(kcUpper, title="KC Upper", color="#16a34a")
plot(kcLower, title="KC Lower", color="#15803d")
plot(donUpper, title="Don Upper", color="#f59e0b")
plot(donLower, title="Don Lower", color="#d97706")
plot(donMid, title="Don Mid", color="#b45309")
`,Ce=`//@pine
//@version=5
indicator("Pine ta supertrend", overlay=false)

[stLine, stDir] = ta.supertrend(3.0, 10)

delta = stLine - close
plot(delta, title="SuperTrend Delta", color="#0ea5e9")
plot(stDir, title="SuperTrend Dir", color="#ef4444")
`,ke=`//@pine
//@version=5
indicator("Pine ta extended volume", overlay=false)

adVal = ta.ad()
cmfVal = ta.cmf(20)

plot(adVal, title="AD", color="#8b5cf6")
plot(cmfVal, title="CMF", color="#22c55e")
`,ze=`//@pine
//@version=5
indicator("Pine ta sar", overlay=true)

sarVal = ta.sar(0.02, 0.02, 0.2)
plot(sarVal, title="SAR", color="#ef4444")
`,Se=`//@pine
//@version=5
indicator("Pine time fields", overlay=false)

y = year(time)
m = month(time)
d = dayofweek(time)
h = hour(time)
mi = minute(time)
s = second(time)

plot(y, title="Y")
plot(m, title="M")
plot(d, title="DOW")
plot(h, title="H")
plot(mi, title="Min")
plot(s, title="Sec")
`,Ve=`//@pine
//@version=5
indicator("Pine time_close delta", overlay=false)

delta = time_close - time
plot(delta, title="CloseDelta")
`,Te=`//@pine
//@version=5
indicator("Pine session.isin basic", overlay=true)

inSess = session.isin(time, "0000-0030")
plot(inSess, title="InSession", color="#22c55e", width=2)
plotshape(inSess, text="IN", color=color.green, location=location.belowbar, style=shape.circle)
`,Me=`//@pine
//@version=5
indicator("A4 Negative Truthiness", overlay=true)

cond = -1

plotshape(cond, location=location.abovebar, style=shape.triangleup, text="NEG", color=color.green)
plotshape(0, location=location.belowbar, style=shape.triangledown, text="ZERO", color=color.red)
`,De=`//@pine
//@version=5
indicator("A4 NA And/Or Table", overlay=false)

a = na and 1
b = na and 0
c = na or 1
d = na or 0
e = not na

plot(nz(a, -1), title="na_and_true", color=color.red)
plot(nz(b, -2), title="na_and_false", color=color.orange)
plot(nz(c, -3), title="na_or_true", color=color.green)
plot(nz(d, -4), title="na_or_false", color=color.blue)
plot(nz(e, -5), title="not_na", color=color.purple)
`,Ee=[{id:"json-ema-baseline",title:"EMA baseline",format:"json",description:"EMA/SMA plots with labels and basic calc wiring.",code:e},{id:"json-labels-shapes",title:"Labels and shapes",format:"json",description:"Label shapes, text styling, and condition language.",code:n},{id:"json-polyline-path",title:"Polyline + path",format:"json",description:"Runtime polyline/path draws from indicators.",code:o},{id:"json-layer-ordering",title:"Layer ordering",format:"json",description:"Background/foreground layering and zIndex behavior.",code:i},{id:"json-autoscale-exclude",title:"Autoscale exclusion",format:"json",description:"Exclude visual layers from autoscale calculations.",code:t},{id:"json-draw-clear-loop",title:"Draw clear + loop",format:"json",description:"Draw ops with clear/forEach to refresh runtime shapes.",code:l}],Pe=[{id:"pine-ema-baseline",title:"Pine EMA baseline",format:"pine",description:"EMA/SMA plots with standard Pine syntax.",code:r},{id:"pine-history-nz",title:"History + nz",format:"pine",description:"History indexing with nz() and na handling.",code:a},{id:"pine-history-zero",title:"History index 0/1/2",format:"pine",description:"x[0], x[1], x[2] comparisons across bars.",code:s},{id:"pine-var-state",title:"var state",format:"pine",description:"var + := state updates across bars.",code:c},{id:"pine-var-init-once",title:"var init once",format:"pine",description:"var initializes once and increments each bar.",code:d},{id:"pine-if-series-basic",title:"if + ternary basics",format:"pine",description:"if/else series output and ternary selection.",code:p},{id:"pine-if-and-ternary-mix",title:"if + ternary mix",format:"pine",description:"Mixing if/else with ternary and history.",code:b},{id:"pine-ternary-nested",title:"Nested ternary",format:"pine",description:"Nested conditional expressions.",code:x},{id:"pine-a4-negative-truthiness",title:"A4 negative truthiness",format:"pine",description:"Negative numbers are truthy in conditions.",code:Me},{id:"pine-a4-na-and-or-table",title:"A4 na and/or table",format:"pine",description:"Tri-value and/or/not outputs with nz fallbacks.",code:De},{id:"pine-ta-williamsr-basic",title:"ta.williamsr",format:"pine",description:"Williams %R oscillator using ta.williamsr.",code:me},{id:"pine-ta-extended-mas",title:"ta extended MAs",format:"pine",description:"DEMA/TEMA/HMA/KAMA/ALMA/T3/TRIMA/SWMA/EVWMA family.",code:Le},{id:"pine-ta-extended-oscillators",title:"ta extended oscillators",format:"pine",description:"CMO/TSI/StochRSI/PPO/TRIX/AO/ZScore/ATRP/NATR set.",code:Be},{id:"pine-ta-extended-channels",title:"ta extended channels",format:"pine",description:"Keltner + Donchian tuple outputs.",code:Ae},{id:"pine-ta-supertrend-basic",title:"ta.supertrend",format:"pine",description:"Supertrend line + direction outputs.",code:Ce},{id:"pine-ta-extended-volume",title:"ta extended volume",format:"pine",description:"AD + CMF volume indicators.",code:ke},{id:"pine-ta-sar-basic",title:"ta.sar",format:"pine",description:"Parabolic SAR overlay plot.",code:ze},{id:"pine-ta-dmi-basic",title:"ta.dmi",format:"pine",description:"+DI/-DI/ADX outputs from ta.dmi.",code:we},{id:"pine-ta-plus-minus-di-basic",title:"ta.plus_di/ta.minus_di",format:"pine",description:"+DI/-DI outputs from ta.plus_di and ta.minus_di.",code:ye},{id:"pine-ta-highest-lowest-basic",title:"ta.highest/ta.lowest",format:"pine",description:"ta.highest/ta.lowest parity with highest/lowest outputs.",code:_e},{id:"pine-ta-sum-alias-basic",title:"ta.sum alias",format:"pine",description:"sum() and ta.sum() outputs match with equality markers.",code:ge},{id:"pine-ta-rising-falling-basic",title:"ta.rising/ta.falling",format:"pine",description:"Rising/falling markers on a synthetic series pattern.",code:fe},{id:"pine-array-basic-float",title:"Array push/get",format:"pine",description:"array.new_float + push + get + size.",code:h},{id:"pine-array-set-get",title:"Array set/get",format:"pine",description:"array.set + array.get on a fixed array.",code:m},{id:"pine-array-size",title:"Array size",format:"pine",description:"array.size increments as elements are pushed.",code:w},{id:"pine-array-from-basic",title:"array.from (compile-time)",format:"pine",description:"Compile-time arrays from literal values used in plot/array.get.",code:y},{id:"pine-array-string-basic",title:"Array string basic",format:"pine",description:"array.new_string + push/get/size on string arrays.",code:_},{id:"pine-plotshape-location-style",title:"plotshape mapping",format:"pine",description:"plotshape location and style options.",code:g},{id:"pine-plotshape-size-color",title:"plotshape size + color",format:"pine",description:"plotshape text + size + color options.",code:f},{id:"pine-plotchar-basic",title:"plotchar basics",format:"pine",description:"plotchar with char, size, and location.",code:u},{id:"pine-plot-ohlc-family",title:"plotcandle/plotbar/plotohlc",format:"pine",description:"OHLC plot family with candles, bars, and ohlc markers.",code:v},{id:"pine-plotfill-hline-plotarrow",title:"plotfill + hline + plotarrow",format:"pine",description:"plotfill/fill between plots with hline and plotarrow markers.",code:L},{id:"pine-label-box-line",title:"label/box/line",format:"pine",description:"label.new, box.new, and line.new primitives.",code:B},{id:"pine-label-basic-barindex",title:"Label basic (bar_index)",format:"pine",description:"Label handle updated each bar with label.set_xy + set_text.",code:A},{id:"pine-label-tooltip-align",title:"Label tooltip + align",format:"pine",description:"textalign + tooltip mapping for labels.",code:C},{id:"pine-label-xloc-time-between",title:"Label xloc time",format:"pine",description:"xloc=time uses floor + clamp for between-candle times.",code:k},{id:"pine-label-yloc-price",title:"Label yloc price",format:"pine",description:"yloc=price anchors to the exact price level.",code:z},{id:"pine-label-yloc-abovebar",title:"Label yloc abovebar",format:"pine",description:"yloc=abovebar anchors above the bar high with padding.",code:S},{id:"pine-label-yloc-belowbar",title:"Label yloc belowbar",format:"pine",description:"yloc=belowbar anchors below the bar low with padding.",code:V},{id:"pine-label-location-alias",title:"Label location alias",format:"pine",description:"location=location.belowbar maps into yloc belowbar.",code:T},{id:"pine-label-style-bg-border",title:"Label bg + border",format:"pine",description:"bgcolor + bordercolor + border_width mapping.",code:M},{id:"pine-label-size-mapping",title:"Label size mapping",format:"pine",description:"Size literals + numeric clamp mapping.",code:D},{id:"pine-label-text-ellipsis",title:"Label text ellipsis",format:"pine",description:"Long label text truncates with ellipsis.",code:E},{id:"pine-label-tooltip-ellipsis",title:"Label tooltip ellipsis",format:"pine",description:"Long tooltip truncates deterministically.",code:P},{id:"pine-label-limit-delete-frees",title:"Label limit delete frees",format:"pine",description:"Deleting labels frees capacity under the label cap.",code:Y},{id:"pine-label-limit-diag-once",title:"Label limit diag once",format:"pine",description:"Over-cap label.new calls emit one diagnostic.",code:Z},{id:"pine-clear-by-group-mixed",title:"draw.clear by group",format:"pine",description:"Clears line/label/box by group and recreates after clear.",code:q},{id:"pine-clear-by-tags-mixed",title:"draw.clear by tags",format:"pine",description:"Clears line/label/box by tags and recreates after clear.",code:Q},{id:"pine-box-basic",title:"Box basic",format:"pine",description:"box.new + box.set_* lifecycle with text and border updates.",code:I},{id:"pine-box-delete-then-set",title:"Box delete then set",format:"pine",description:"box.set after box.delete emits a runtime diagnostic.",code:G},{id:"pine-box-extend-none",title:"Box extend none",format:"pine",description:"extend.none keeps the box within its base indices.",code:O},{id:"pine-box-extend-left",title:"Box extend left",format:"pine",description:"extend.left expands to the visible viewport left edge.",code:R},{id:"pine-box-extend-right",title:"Box extend right",format:"pine",description:"extend.right expands to the visible viewport right edge.",code:F},{id:"pine-box-extend-both",title:"Box extend both",format:"pine",description:"extend.both expands to both viewport edges.",code:N},{id:"pine-box-extend-time",title:"Box extend time",format:"pine",description:"xloc=time resolves indices before applying extend.",code:H},{id:"pine-box-style-bg-border",title:"Box style bg + border",format:"pine",description:"bgcolor + border_color + border_width normalization.",code:j},{id:"pine-box-style-dash",title:"Box style dash",format:"pine",description:"Dashed/dotted borders use deterministic dash arrays.",code:U},{id:"pine-box-text-align",title:"Box text align",format:"pine",description:"Text alignment with fixed padding.",code:W},{id:"pine-box-text-ellipsis",title:"Box text ellipsis",format:"pine",description:"Long text truncates with ellipsis.",code:K},{id:"pine-box-borderwidth-series-clamp",title:"Box border width clamp",format:"pine",description:"Series border_width clamps to 0..4.",code:X},{id:"pine-line-basic",title:"Line update + delete",format:"pine",description:"line.new with set_xy1/xy2, set_color, set_width, delete.",code:$},{id:"pine-line-style-extend",title:"Line style + extend",format:"pine",description:"solid/dashed/dotted with extend options.",code:ee},{id:"pine-line-lifecycle-update",title:"Line lifecycle update",format:"pine",description:"Stable handle updated each bar via line.set_xy1/xy2.",code:ne},{id:"pine-line-lifecycle-order",title:"Line lifecycle order",format:"pine",description:"Deterministic creation order for multiple lines.",code:oe},{id:"pine-line-extend-right",title:"Line extend right",format:"pine",description:"extend.right clips to the visible viewport edge.",code:ie},{id:"pine-line-extend-vertical",title:"Line extend vertical",format:"pine",description:"Vertical extend.both clamps to the current y-range.",code:te},{id:"pine-line-style-dashed",title:"Line style dashed",format:"pine",description:"Dashed style uses a deterministic dash array.",code:le},{id:"pine-line-style-width3",title:"Line dash width >= 3",format:"pine",description:"Dash arrays expand when width is 3 or more.",code:re},{id:"pine-line-xloc-time",title:"Line xloc time",format:"pine",description:"xloc=bar_time with time-based anchors.",code:ae},{id:"pine-line-xloc-demo-clean",title:"xloc mapping demo",format:"pine",description:"Exact, between, and before-first time anchors (floor + clamp).",code:se},{id:"pine-draw-clear-foreach",title:"draw.clear + draw.for_each",format:"pine",description:"Runtime draw lifecycle with clear/for_each.",code:J},{id:"pine-ta-bbands",title:"ta.bbands",format:"pine",description:"Bollinger bands tuple output with plots + plotshape.",code:ce},{id:"pine-ta-macd",title:"ta.macd",format:"pine",description:"MACD tuple output with plots + plotshape.",code:de},{id:"pine-ta-stoch",title:"ta.stoch",format:"pine",description:"Stochastic K/D outputs with plots + plotshape.",code:pe},{id:"pine-ta-cci",title:"ta.cci",format:"pine",description:"CCI oscillator with threshold plotshape.",code:be},{id:"pine-ta-mfi",title:"ta.mfi",format:"pine",description:"MFI oscillator with oversold marker.",code:xe},{id:"pine-ta-obv",title:"ta.obv",format:"pine",description:"OBV series with rising markers.",code:he},{id:"pine-ta-valuewhen-basic",title:"ta.valuewhen",format:"pine",description:"Most-recent/previous match selection.",code:ue},{id:"pine-ta-pivot-basic",title:"ta.pivothigh/low",format:"pine",description:"Confirmed pivot highs/lows (left/right window).",code:ve},{id:"pine-time-basic-fields",title:"Time fields",format:"pine",description:"year/month/dayofweek/hour/minute/second outputs.",code:Se},{id:"pine-time-close-delta",title:"time_close delta",format:"pine",description:"time_close - time equals bar duration.",code:Ve},{id:"pine-session-isin-basic",title:"session.isin",format:"pine",description:"UTC session filter with plotshape.",code:Te}];export{Ee as jsonExamples,Pe as pineExamples};
