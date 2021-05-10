// 수퍼클래스
class Rectangle {
    constructor(width, height) {
        // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
        console.log(this);
        // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle이다.
        console.log(new.target);

        // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype이 설정된다.
        console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype);
        console.log(this instanceof ColorRectangle);
        console.log(this instanceof Rectangle);

        // 인스턴스 초기화
        this.width = width;
        this.height = height;

        console.log(this);
    }
}

const rectangle = new Rectangle(1, 2);
console.log(rectangle);