// concat
// ES5
var arr = [1, 2].concat([3, 4]);
console.log(arr); // [1, 2, 3, 4]
// ES6
const arr2 = [...[1, 2], ...[3, 4]];
console.log(arr2); // [1, 2, 3, 4]


// splice
// ES5
var arr3 = [1, 4];
var arr4 = [2, 3];
// 세 번째 인수 arr4를 해체하여 전달해야 한다.
// 그렇지 않으면 arr1에 arr2 배열 자체가 추가된다.
// arr3.splice(1, 0, arr4);
// console.log(arr3); // [ 1, [ 2, 3 ], 4 ]
// ES6
arr3.splice(1, 0, ...arr4);
console.log(arr3); // [ 1, 2, 3, 4 ]


// copy
// ES5
var origin = [1, 2];
var copy = origin.slice();
console.log(copy); // [ 1, 2 ]
console.log(copy === origin); // false
// ES6
var origin2 = [1, 2];
var copy = [...origin2];
console.log(copy); // [ 1, 2 ]
console.log(copy === origin); // false
