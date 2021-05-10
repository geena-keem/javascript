// 이름과 주소 속성을 갖는 객체
const person = {
    name: 'Keem',
    address: 'Ansan'
};

console.log(person); // { name: 'Keem', address: 'Ansan' }


const circle = {
    radius: 5, // 반지름
    // 원의 지름: 2r
    getDiameter() {
        return 2 * this.radius;
    },
    // 원의 둘레
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },
    // 원의 넓이
    getArea() {
        return Math.PI * this.radius ** 2;
    }
};

console.log(circle);
console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());
