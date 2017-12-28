//// [staticClassInitializerUseObjectLiteralPropertyBeforeDeclaration.ts]
class Foo {
    public static bar = Bar.A;
}

const Bar = {
    A: 0
};


//// [staticClassInitializerUseObjectLiteralPropertyBeforeDeclaration.js]
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.bar = Bar.A;
    return Foo;
}());
var Bar = {
    A: 0
};
