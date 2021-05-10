// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Keem';
person.sayHello = function () {
    console.log('Hi! My name is '+ this.name);
}

console.log(person); // { name: 'Keem', sayHello: [Function (anonymous)] }
person.sayHello(); // Hi! My name is Keem