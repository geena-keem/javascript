// ES6에서 추가된 프로퍼티 축약 표현 (ES5랑 ES6비교)
// ES5
// var x = 1, y = 2;

// var obj = {
//     x: x,
//     y: y
// };

// console.log(obj); // { x: 1, y: 2 }



// ES6
let x = 1, y = 2;

//프로퍼티 축약표현
const obj = {x, y};

console.log(obj); // { x: 1, y: 2 } 프로퍼티 키는 변수 이름으로 자동 생성한다.