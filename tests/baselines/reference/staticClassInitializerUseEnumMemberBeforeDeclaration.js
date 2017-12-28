//// [staticClassInitializerUseEnumMemberBeforeDeclaration.ts]
class Foo {
    public static bar = Bar.A;
}

export enum Bar {
    A
}


//// [staticClassInitializerUseEnumMemberBeforeDeclaration.js]
"use strict";
exports.__esModule = true;
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.bar = Bar.A;
    return Foo;
}());
var Bar;
(function (Bar) {
    Bar[Bar["A"] = 0] = "A";
})(Bar = exports.Bar || (exports.Bar = {}));
