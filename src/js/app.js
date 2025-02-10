import * as functions from "./files/functions.js";

import "../scss/style.scss";
import "./plugins/inputmask.min.js";
import spoller from "./files/spoller.js";
import tab from "./files/tab.js";
import burger from "./files/burger.js";
import sliders from "./files/sliders.js";
import fancy from "./files/fancy.js";
import scrollables from "./files/scrollbales.js";
import rating from "./files/rating.js";
import modal from "./files/modal.js";
import hiddenText from "./files/hiddenText.js";
import map from "./files/map.js";
import validateForms from "./files/validateForms.js";
import telMask from "./files/telMask.js";
import headerScroll from "./files/headerScroll.js";
import select from "./files/select.js";
import inputFile from "./files/inputFile.js";
import more from "./files/more.js";

functions.mediaAdaptive();
spoller();
tab();
burger();
sliders();
fancy();
scrollables();
rating();
modal();
hiddenText();
map();
validateForms();
telMask();
headerScroll();
select();
inputFile();
more();