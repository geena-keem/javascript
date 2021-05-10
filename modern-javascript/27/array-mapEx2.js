// class Prefixer {
//     constructor(prefix) {
//         this.prefix = prefix;
//     }

//     add(arr) {
//         return arr.map(function (item) {
//             // 외부에서 this를 전달하지 않으면 this는 undefinde를 가리킨다.
//             return this.prefix + item;
//         }, this); // map 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달.
//     }
// }

// const prefixer = new Prefixer('-webkit-');
// console.log(prefixer.add([' transition', ' user-select']));
// // [ '-webkit- transition', '-webkit- user-select' ]



// 위 코드를 화살표 함수로 사용
class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        // 화살표 함수 내부에서 this를 참조하면 상위 스코프 this를 그대로 참조한다.
        return arr.map(item => this.prefix + item);
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add([' transition', ' user-select']));
// [ '-webkit- transition', '-webkit- user-select' ]