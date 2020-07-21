"use strict";
exports.__esModule = true;
// import * as  rust from '../pkg/project_name';
// const rust = fetch("")
var all_imports_1 = require("../lib/all_imports");
var msg = document.getElementById('msg');
var Index = /** @class */ (function () {
    function Index() {
        all_imports_1.AllRustModules
            .then(function (x) {
            msg.innerHTML = x.sample_from_rust();
        });
    }
    return Index;
}());
window.onload = function () {
    var index = new Index();
};
