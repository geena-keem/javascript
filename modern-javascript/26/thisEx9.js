// Bad
class Person {
    name = 'Keem';
    sayHi = () => console.log(`Hi! ${this.name}`);
}

const person = new Person();
person.sayHi(); // Hi! Keem



// sayHi 클래스 필드에 할당한 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this 바인딩을 참조한다.
// 그렇다면 sayHi 클래스 필드에 할당한 화살표 함수의 상위 스코프는 !?
// class Person {
//     constructor() {
//         this.name = name;
//         // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표 함수를 할당한다.
//         // 따라서 sayHi 프로퍼티는 인스턴스 프로퍼티다.
//         this.sayHi = () => console.log(`Hi! ${this.name}`);
//     }
// }


// Good
class Person {
    // 클래스 필드 정의
    name = 'Keem';
    sayHi() { console.log(`Hi! ${this.name}`); }
}

const person = new Person();
person.sayHi();
