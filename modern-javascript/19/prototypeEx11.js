// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Keem');

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가
console.log(me instanceof Person); // true

// Object.prototype이 me 객체의 프로타입 체인 상에 존재하므로 true로 평가
console.log(me instanceof Object); // true