// 문자열 연결 연산자
console.log('1' + 2);
console.log(1 + '2');

// 산술 연산자
console.log(1 + 2);

// true는 1로 false는 2로 타입 변환
console.log(1 + true);
console.log(1 + false);

// null은 0으로 타입 변환
console.log(1 + null);

// undefined는 숫자로 타입 변환이 불가
console.log(+undefined); // NaN
console.log(1 + undefined); // NaN