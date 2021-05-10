class Person {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;
    }
}

console.log(typeof Person);
console.dir(Person);

// 인스턴스 생성
const me = new Person('Keem');
console.log(me);