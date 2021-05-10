// const obj = {
//     // 심벌 값으로 프로퍼티 값을 생성
//     [Symbol.for('mySymbol')]: 1
// };

// console.log(obj[Symbol.for('mySymbol')]); // 1



const obj = {
    // 심벌 값으로 프로퍼티 키를 생성
    [Symbol('mySymbol')]: 1
};

for (const key in obj) {
    console.log(key); // 아무것도 출력이 안돼~ 왜냐면 심벌 값으로 프로퍼티를 생성하믄 은닉화 되걸랑
}

console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []


// 하지만 완전하게 숨길 수 없다~ getOwnPropertySymbols 메서드를 사용하면 다 보인당~
const obj2 = {
    // 심벌 값으로 프로퍼티 키를 생성
    [Symbol('mySymbol')]: 1
};

// getOwnPropertySymbols 메서드는 인수로 전달한 객체의 심벌 프로퍼티 키를 배열로 반환한다.
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(mySymbol) ]
// getOwnPropertySymbols 메서드로 심벌 값도 찾을 수 있지롱
const symbolKey = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey]); // 1 
