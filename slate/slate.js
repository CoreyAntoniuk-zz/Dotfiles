//  Window Placement
var pushRight = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX/2"
});
var pushLeft = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX/2"
});
var pushTop = slate.operation("push", {
  "direction" : "top",
  "style" : "bar-resize:screenSizeY/2"
});
var pushBottom = slate.operation("push", {
  "direction" : "bottom",
  "style" : "bar-resize:screenSizeY/2"
});
var cornerTopLeft = slate.operation("corner", {
  "direction" : "top-left",
  "width" : "screenSizeX/2",
  "height" : "screenSizeY/2"
});
var cornerTopRight = slate.operation("corner", {
  "direction" : "top-right",
  "width" : "screenSizeX/2",
  "height" : "screenSizeY/2"
});
var cornerBottomLeft = slate.operation("corner", {
  "direction" : "bottom-left",
  "width" : "screenSizeX/2",
  "height" : "screenSizeY/2"
});
var cornerBottomRight = slate.operation("corner", {
  "direction" : "bottom-right",
  "width" : "screenSizeX/2",
  "height" : "screenSizeY/2"
});

// Window Focusing
var focusLeft = slate.operation("focus", {
  "direction" : "left"
});
var focusRight = slate.operation("focus", {
  "direction" : "right"
});
var focusAbove = slate.operation("focus", {
  "direction" : "above"
});
var focusBelow = slate.operation("focus", {
  "direction" : "below"
});
var focusAboveLeft = slate.operation("sequence", {
  "operations" : [[focusLeft], [focusAbove]]
});
var focusAboveRight = slate.operation("sequence", {
  "operations" : [[focusRight], [focusAbove]]
});
var focusBelowLeft = slate.operation("sequence", {
  "operations" : [[focusLeft], [focusBelow]]
});
var focusBelowRight = slate.operation("sequence", {
  "operations" : [[focusRight], [focusBelow]]
});


// App Focusing
var focusSafari = slate.operation("focus", {
  "app" : "Safari"
});

//  Keybindings

//  Resizing
slate.bind("h:alt,shift", pushLeft);
slate.bind("j:alt,shift", pushBottom);
slate.bind("k:alt,shift", pushTop);
slate.bind("l:alt,shift", pushRight);
slate.bind("u:alt,shift", cornerTopLeft);
slate.bind("i:alt,shift", cornerTopRight);
slate.bind("n:alt,shift", cornerBottomLeft);
slate.bind("m:alt,shift", cornerBottomRight);

// Focusing
slate.bind("h:alt", focusLeft);
slate.bind("j:alt", focusBelow);
slate.bind("k:alt", focusAbove);
slate.bind("l:alt", focusRight);
slate.bind("u:alt", focusAboveLeft);
slate.bind("i:alt", focusAboveRight);
slate.bind("n:alt", focusBelowLeft);
slate.bind("m:alt", focusBelowRight);

slate.bind("b:alt", focusSafari);
