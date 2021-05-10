// 객체 리터럴에 의한 객체 생성 방식의 문제점
// 단 하나의 객체만 생성 => 여러개 생성할때 매번 같은 프로퍼티를 생성해야하기 때문에 비효율적
const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle2.getDiameter()); // 20