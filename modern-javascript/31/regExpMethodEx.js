// RegExp.prototype.exec
const target = 'Is this all there is?';
const regExp = /is/;
console.log(regExp.exec(target)); 
// [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]



// RegExp.prototype.test
console.log(regExp.test(target)); // true



// String.prototype.match
const regExp2 = /is/g;
console.log(target.match(regExp2)); // [ 'is', 'is' ]