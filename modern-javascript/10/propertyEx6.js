// 메서드 축약 표현 (ES5랑 ES6 비교)
// ES5
// var obj = {
//     name: 'keem',
//     sayHi: function () {
//         console.log('Hi! ' + this.name);
//     }
// };

// obj.sayHi(); // Hi! keem



// ES6
const obj = {
    name: 'gee-na',
    // 메서드 축약 표현
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi(); // Hi! gee-na