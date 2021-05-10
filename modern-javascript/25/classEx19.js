// // 생성자 함수
// function Base(a) {
//     this.a = a;
// }

// // 생성자 함수를 상속받는 서브 클래스
// class Derived extends Base {}

// const derived = new Derived(1);
// console.log(derived); // Derived { a: 1 }


function Base1() {}

class Base2 {}

let condition = true;

// 조건에 따라 동적으로 상속 대상을 결정하는 서브 클래스
class Derived extends (condition ? Base1 : Base2) {}

const derived = new Derived();
console.log(derived); // Derived {}

console.log(derived instanceof Base1); // true
console.log(derived instanceof Base2); // false