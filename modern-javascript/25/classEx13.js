class Person {
    // 클래스 필드에 문자열을 할당
    name = 'Keem';

    // 클래스 필드에 함수를 할당
    getName = function () {
        return this.name;
    }
    // 화살표 함수로 정의할 수도 있다.
    //getName = () => this.name;
}

const me = new Person();
console.log(me); // Person { name: 'Keem', getName: [Function: getName] }
console.log(me.getName()); // Keem