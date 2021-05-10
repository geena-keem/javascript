var x = '1';

// 문자열을 숫자로 타입 변환
console.log(+x);
// 부수 효과는 없다.
console.log(x);

// 불리언 값을 숫자로 타입 변환
x = true;
console.log(+x);
// 부수 효과는 없다.
console.log(x);

x = false;
console.log(+x);
// 부수 효과는 없다.
console.log(x);

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환
x = 'Hello';
console.log(+x);
// 부수 효과는 없다.
console.log(x);