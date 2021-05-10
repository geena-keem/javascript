const person = {name: 'Keem'};

// person 객체는 동결된 객체가 아니다.
console.log(Object.isFrozen(person)); // false

// person 객체를 동결하여 프로퍼티 추가, 삭제 재정의, 쓰기를 금지한다.
Object.freeze(person);

// person 객체는 동결된 객체이다.
console.log(Object.isFrozen(person)); // true

// 동결된 객체는 writable과 configurable이 false이다.
console.log(Object.getOwnPropertyDescriptor(person));
// name: {value: 'Keem', writable: false, enumerable: true, configurable: false}

// 프로퍼티 추가가 금지된다.
person.age = 29; // 무시. strict mode에서는 에러
console.log(person); // { name: 'Keem' }

// 프로퍼티 삭제가 금지된다.
delete person.name; // 무시. strict mode에서는 에러
console.log(person); // { name: 'Keem' }

// 프로퍼티 값 갱신이 금지된다.
person.name = 'gee-na'; // 무시. strict mode에서는 에러
console.log(person); // { name: 'Keem' }

// 프로퍼티 어트리뷰트 재정의가 금지된다.
Object.defineProperty(person, 'name', {configurable: true});
// TypeError: Cannot redefine property: name