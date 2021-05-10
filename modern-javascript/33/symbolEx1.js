// Symbol 함수를 호출하여 유일무이한 심벌 값을 생성한다.
const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol

// 심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol); // Symbol()

//  심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성한다.
const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1 === mySymbol2); // false

// 심벌 값도 객체처럼 접근하면 암묵적으로 래퍼 객체를 생성한다.
const mySymbol3 = Symbol('mySymbol');
// 래퍼 객체 생성
console.log(mySymbol3.description); // mySymbol
console.log(mySymbol3.toString()); // Symbol(mySymbol)

// 심벌 값은 암묵적으로 문자열이나 숫자 타입으로 변환되지 않는다.
//console.log(mySymbol + ''); // TypeError: Cannot convert a Symbol value to a string
//console.log(+mySymbol);     // TypeError: Cannot convert a Symbol value to a string

// 불리언 타입으로는 암묵적으로 타입 변환된다.
console.log(!!mySymbol); // true
// if 문 등에서 존재 확인이 가능하다.
if (mySymbol) console.log('mySymbol is not empty!'); // mySymbol is not empty!


// Symbol.for 메서드
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const s1 = Symbol.for('mySymbol');
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 있으면 해당 심벌을 반환
const s2 = Symbol.for('mySymbol');

console.log(s1 === s2); // true


// Symbol.keyFor 메서드
// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const s3 = Symbol.for('mySymbol');
// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
console.log(Symbol.keyFor(s3)); // mySymbol

// Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
const s4 = Symbol('foo');
// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
console.log(Symbol.keyFor(s4)); // undefined