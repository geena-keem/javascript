// 논리(||) 연산자
console.log('true || true: ' + true || true); // t
console.log('true || false: ' + true || false); // t
console.log('false || true: ' + false || true);  // t
console.log('false || false: ' + false || false); // f

// 논리곱(&&) 연산자
console.log(true && true); // t
console.log(true && false); // f
console.log(false && true); // f
console.log(false && false); // f

// 논리 부정(!) 연산자
console.log(!true); // f
console.log(!false) // t

// 암묵적 타입 변환
console.log(!0);
console.log(!'Hello');

// 단축 평가
console.log('Cat' && 'Dog');
console.log('Dog' && 'Cat');

//드 모르간의 법칙
var x, y;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));