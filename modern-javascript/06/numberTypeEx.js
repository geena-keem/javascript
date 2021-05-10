// 모두 숫자 타입 (자바스크립트는 하나의 숫자 타입만 존재하며 전부 실수로 처리가 된다.)
var integer = 10; // 정수지만 10.0 실수이다.
var double = 10.12;
var nagative = -20;


// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * 'String'); // NaN