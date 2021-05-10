// 프로퍼티 값 갱신
var person = {
    name: 'keem'
};

// person 객체에 name 프로퍼티가 존재하므로 name값이 갱신된다.
person.name = 'gee-na';

console.log(person); // { name: 'gee-na' }



// 프로퍼티 동적 생성
var person = {
    name: 'keem'
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당한다.
person.age = 29;

console.log(person); // { name: 'keem', age: 29 }



// 프로퍼티 삭제
var person = {
    name: 'keem'
};

// 프로퍼티 동적 생성
person.age = 29;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 에러는 발생하지 않는다.
delete person.address;

console.log(person); // { name: 'keem' }