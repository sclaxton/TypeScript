//// [staticClassInitializerUseNamespacePropertyBeforeDeclaration.ts]
class Foo {
    public static bar = Bar.A;
}

namespace Bar {
    export let A = 0
}


//// [staticClassInitializerUseNamespacePropertyBeforeDeclaration.js]
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.bar = Bar.A;
    return Foo;
}());
var Bar;
(function (Bar) {
    Bar.A = 0;
})(Bar || (Bar = {}));
