const person = {name: 'Keem'};

// person 객체는 밀봉(seal)된 객체가 아니다.
console.log(Object.isSealed(person)); // false

// person 객체를 밀봉(seal)하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
Object.seal(person);

// person 객체는 밀봉(seal)객체이다.
console.log(Object.isSealed(person)); // true

// 밀봉(seal)된 객체는 configurable이 false이다.
console.log(Object.getOwnPropertyDescriptor(person));
// name: {value: 'Keem', writable: true, enumerable: true, configurable: false}


// 프로퍼티 추가가 금지된다.
person.age = 29; // 무시. strict mode에서는 에러
console.log(person); // { name: 'Keem' }

// 프로퍼티 삭제가 금지된다.
delete person.name; // 무시. strict mode에서는 에러
console.log(person); // { name: 'Keem' }

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'name', {configurable: true});
// TypeError: Cannot redefine property: name