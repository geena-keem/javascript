// function sum() {
//     // 유사 배열 객체를 배열로 변환(ES5)
//     var arr = Array.prototype.slice.call(arguments);
//     console.log(arr);

//     return arr.reduce(function (pre, cur) {
//         return pre + cur;
//     }, 0);
// }

// console.log(sum(1, 2, 3)); // 6



// // Array.from 메서드를 이용해서 더 간단하게 유사 배열 객체로 변환
// function sum() {
//     const arr = Array.from(arguments);
//     console.log(arr);

//     return arr.reduce((pre, cur) => pre + cur, 0);
// }

// console.log(sum(1, 2, 3)); // 6



// 스프레드 문법을 사용
function sum() {
    // 이터러블을 배열로 변환(ES6 스프레드 문법)
    const arr = [...arguments];
    console.log(arr);

    return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3));