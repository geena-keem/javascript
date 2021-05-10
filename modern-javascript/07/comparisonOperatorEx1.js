// 동등 비교
console.log(5 == 5);

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등
console.log(5 == '5');

// 동등 비교, 결과를 예측하기 어렵다.
console.log('0' == ''); // f
console.log(0 == ''); // t
console.log(0 == 0); // t
console.log(false == 'false'); // f
console.log(false == '0'); // t
console.log(false == null); // f
console.log(false == undefined); // f