// 위, 아래, 오른쪽을 나타내는 상수를 정의한다.
// 이때 값 1, 2, 3, 4에는 특별한 의미가 없고 상수 이름에 의미가 있다.
const Direction = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};

// 변수에 상수를 할당
const myDirection = Direction.UP;

if (myDirection === Direction.UP) {
    console.log('You are going UP!')
}


// 위, 아래, 오른쪽을 나타내는 상수를 정의한다.
// 중복될 가능성이 없는 심벌 값으로 상수 값을 생성한다.
const Direction2 = {
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right')
};

const myDirection2 = Direction2.UP;

if (myDirection2 === Direction2.UP) {
    console.log('You are going UP!');
}


// 자바스크립트에서 enum 처럼 쓰기 위해 객체 동결 freeze 메서드와 심벌 값을 사용한다.
// Direction3 객체는 불변 객체이며 프로퍼티 값은 유일무이한 값이다.
const Direction3 = Object.freeze({
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right')
});

const myDirection3 = Direction3.UP;

if (myDirection3 === Direction3.UP) {
    console.log('You are going UP!');
}