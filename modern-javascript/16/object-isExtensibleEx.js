// 확장이 가능한 객체인지 확인하는 메서드

//"use strict";
// strict mode: 엄격 모드이며 전체 스크립트, 부분 함수에 적용이 가능하다.

const person = {name: 'Keem'};

// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person)); // true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체이다.
console.log(Object.isExtensible(person)); // false

person.age = 29; // 무시. strict mode를 사용했을 경우 오류가 뜬다.
                 // TypeError: Cannot add property age, object is not extensible
console.log(person); // { name: 'Keem' }

// 프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(person, 'age', {value: 29});
// TypeError: Cannot define property age, object is not extensible