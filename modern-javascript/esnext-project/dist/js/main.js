'use strict';

var _lib = require('./lib');

console.log(_lib.pi); // 3.141592653589793
console.log((0, _lib.power)(_lib.pi, _lib.pi)); // 36.4621596072079
var f = new _lib.Foo();
console.log(f.foo()); // { a: 1, b: 2, x: { c: 3, d: 4 } }
console.log(f.bar()); // 10
