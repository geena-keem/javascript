// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1));
// var x = String(1);
// console.log(typeof x, x);

console.log(String(NaN));
// var x = String(NaN);
// console.log(typeof x, x);

console.log(String(Infinity));

// 불리언 타입 => 문자열 타입
console.log(String(true));
console.log(String(false));



// 2. Object.prototype.toString 메서드를 사용하는 방법
// 숫자 타입 => 문자열 타입
console.log((1).toString());
console.log((NaN).toString());
console.log((Infinity).toString());

// 불리언 타입 => 문자열 타입
console.log((true).toString());
console.log((false).toString());



// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자 타입
console.log(1 + '');
console.log(NaN + '');
console.log(Infinity + '');

// 불리언 타입 => 문자 타입
console.log(true + '');
console.log(false + '');