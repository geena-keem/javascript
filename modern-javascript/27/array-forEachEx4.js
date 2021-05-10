// class Numbers {
//     numberArray = [];
    
//     multiply(arr) {
//         arr.forEach(function (item) {
//             this.numberArray.push(item * item);
//         });
//     }
// }

// const numbers = new Numbers();
// console.log(numbers.multiply([1, 2, 3]));
// // TypeError: Cannot read property 'numberArray' of undefined



// class Numbers {
//     numberArray = [];
    
//     multiply(arr) {
//         arr.forEach(function (item) {
//             this.numberArray.push(item * item);
//         }, this); // forEach 메서드의 콜백 함수 내부에서 this로 상요할 객체를 전달
//     }
// }

// const numbers = new Numbers();
// numbers.multiply([1, 2, 3]);
// console.log(numbers.numberArray); // [ 1, 4, 9 ]




// 위 코드를 화살표 함수로 사용
class Numbers {
    numberArray = [];
    
    multiply(arr) {
        // 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다.
        arr.forEach(item => this.numberArray.push(item * item));
    }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray); // [ 1, 4, 9 ]


