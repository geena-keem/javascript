class Square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // 프로토타입 메서드
    area() {
        return this.width * this.height;
    }
}

const Square = new Square(10, 10);
console.log(Square.area);