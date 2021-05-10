// 문자열 타입으로 변환
console.log(1 + '2');
// var x = 1 + '2';
// console.log(typeof x, x);

// ES6에서 도입된 표현식 삽입
console.log(`1 + 1 = ${1 + 1}`);
// var x = `1 + 1 = ${1 + 1}`;
// console.log(typeof x, x);



// 숫자 타입 -> 문자열 타입으로
console.log(0 + '');
// var x = 0 + '';
// console.log(typeof x, x);

console.log(-0 + '');
// var x = -0 + '';
// console.log(typeof x, x);

console.log(1 + '');
// var x = 1 + '';
// console.log(typeof x, x);

console.log(-1 + '');
// var x = -1 + '';
// console.log(typeof x, x);

console.log(NaN + '');
// var x = NaN + '';
// console.log(typeof x, x);

console.log(Infinity + '');
// var x = Infinity + '';
// console.log(typeof x, x);

console.log(-Infinity + '');



// 불리언 타입 -> 문자열 타입
console.log(true + '');
// var x = true + '';
// console.log(typeof x, x);

console.log(false + '');



// null 타입 -> 문자열 타입
console.log(null + '');
// var x = null + '';
// console.log(typeof x, x);



// undifined 타입 -> 문자열 타입
console.log(undefined + '');



// 심벌 타입 -> 문자열 타입
//console.log((Symbol()) + ''); // 심벌타입은 암묵적 타입이 실행되지 않는다. 에러발생!



// 객체 타입 -> 문자열 타입
console.log(({}) + '');
// var x = ({}) + '';
// console.log(typeof x, x);

console.log(Math + '');
console.log([] + ''); // 빈 배열
console.log([10, 20] + '');
console.log((function(){}) + '');
console.log(Array + '');