// // 세전 가격
// let preTaxPrice = 100;

// // 세후 가격
// // 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
// let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);

// console.log(afterTaxPrice); // 110



// 위 코드를 const를 사용하기
// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice); // 110