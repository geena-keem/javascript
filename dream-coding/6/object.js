// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { kye : value} object는 key와 value의 집합체이다.
// => object는 key 접근할 수 있는 변수 프로퍼티와 그 프로퍼티가 가지고 있는 value 두 가지로 나뉜다.

// primitive type은 변수 하나당 값을 하나만 입력할 수 있다.
// const name = 'gee-na';
// const age = 29;
// print(name, age);
// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }
// => address, fullName, lastName 등 인자가 많아지게 되면
//    계속 추가해야하며 관리하기 어렵다는 문제점이 있다.

// 1. Literals and properties
// 위의 문제점을 개선하고자 Object를 사용!
// - 데이터 관리가 간편하다.
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
// 자바스크립트에서는 class가 없어도 괄호를 이용해서 바로 object를 생성할 수 있다!
const gee = { name: 'gee-na', age: 29 };
print(gee);
// 자바스크립트는 동적으로 런타임일때 결정되며 뒤늦게 하나의 프로퍼티를 추가할 수 있다. (삭제도 가능하다.)
// 너무 동적으로 코딩하면 유지보수가 어렵고 생각지도 못한 에러가 발생할 수 있으므로 피해야한다!
gee.hasJob = true; // 프로퍼티 추가
console.log(gee.hasJob); // ture
delete gee.hasJob; // 프로퍼티 삭제
console.log(gee.hasJob); // undefined

// 2. Computed properties 계산된 속성
// key should be always string type!!!
console.log(gee.name);
// object는 .을 통해 property에 접근이 가능하다.
// => .은 해당하는 key에 값을 받아오고 싶을 때 사용한다.
console.log(gee['name']);
// 배열에서 데이터를 받아오는 것처럼 대괄호를 이용해 object안에 있는 변수를 string 형태로도 접근이 가능하다.
// => Computed property를 사용할 때는 런타임에서 결정될 때 정확하게 어떤 키가 필요한지 모를 때 사용한다.
gee['hasJob'] = true;
console.log(gee.hasJob);
// => 결론: 코딩할 때는 .을 사용하여 출력하는 것이 옳다.
//          Computed property는 실시간으로 원하는 키의 값을 받아오고 싶을때 사용하면 된다.

// printValue는 obj와 key를 받아 object에 있는 key의 value를 출력하는 함수이다.
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(gee, 'name'); // key는 항상 string type으로 전달해야한다!!!
printValue(gee, 'age');
// 다양한 key를 변경해서 출력할 수 있으며 동적으로 key의 value를 받아와야할 때 유용하게 쓸 수 있다!

// 3. Property value shorthand 속성 값 속기
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('gee', 29); // new를 사용하여 함수를 생성, template 역할
console.log(person4);

// 4. Constructor Function
// 다른 계산을 하지 않고 순수 object를 생성하는 함수는 대문자로 생성한다.
function Person(name, age) {
  //   return {
  //     name,
  //     age,
  //   }; // return을 사용하지 않고 class의 constructor처럼 작성한다.
  // 여기서 생략된 것은 this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj) 속성 존재 확인
console.log('name' in gee); // true
console.log('age' in gee); // true
console.log('random' in gee); // false
console.log(gee.random); // 정의하지 않은 키를 호출하게 되면 undefined

// 6. for..in vs for..of
// for (key in obj): 모든 key를 받아와서 처리할 때 유용하다.
console.clear();
for (key in gee) {
  // gee가 가지고 있는 key는  block을 돌 때마다 지역변수에 할당이 된다.
  console.log(key); // name, age, hasJob
}

// for (value of iterable): 배열과 같은 배열리스트, 순차적으로 데이터가 담겨있는 값을 출력할 때 유용하다.
const array = [1, 2, 3, 4];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'gee-na', age: 29 };
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
// - 비어있는 object를 만들고 for in을 사용하여 수동적으로 할당해 주는 방법을 사용했다.
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// Object.assign
// - 복사하고자 하는 target과 복사를 하려고 하는 source를 같이 전달하고
//   return값은 target과 source가 통합된 값을 return해준다.
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// 2번째 방법
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
// => 뒤에 추가되는 object일 수록 동일한 property가 있으면 값을 덮어씌운다.
console.log(mixed.color); // blue
console.log(mixed.size); // big
