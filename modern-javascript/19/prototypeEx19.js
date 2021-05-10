const person = {
    name: 'Keem',
    address: 'Ansan'
};

// in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다.
console.log('toString' in person); // true
console.log('valueOf' in person); // true

// for...in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
// for...in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거한다.
// 하지만 toString과 같은 Object.prototype의 프로퍼티는 열거되지 않는다.
for (const key in person) {
    console.log(key + ': ' + person[key]);
}

/*
    name: Keem
    address: Ansan
*/