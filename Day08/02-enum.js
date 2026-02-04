"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Browserstatus;
(function (Browserstatus) {
    Browserstatus[Browserstatus["Open"] = 0] = "Open";
    Browserstatus[Browserstatus["Incognite"] = 1] = "Incognite";
    Browserstatus["crash"] = "Open";
    Browserstatus[Browserstatus["Close"] = void 0] = "Close";
    Browserstatus[Browserstatus["sai"] = void 0] = "sai";
})(Browserstatus || (Browserstatus = {}));
function reportBrowserstatus(status) {
    console.log("current status of browser is ".concat(status));
}
reportBrowserstatus(Browserstatus.crash);
