// 이터러블을 배열로 반환

// ES5
function sum() {
    // 이터러블이면서 유사 배열 객체인 arguments를 배열로 반환
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}
console.log(sum(1, 2, 3)); // 6

// 이터러블이 아닌 유사 배열 객체
const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};
const arr = Array.prototype.slice.call(arrayLike);
console.log(Array.isArray(arr)); // true


// ES6
function sum2() {
    // 이터러블이면서 유사 배열 객체인 arguments를 배열로 반환
    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}
console.log(sum2(1, 2, 3)); // 6

// 위 예제보다 더 나은 방법은 Rest 파라미터 사용
// Rest 파라미터 args는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
const sum3 = (...args) => args.reduce((pre, cur) => pre + cur, 0);
console.log(sum3(1, 2, 3)); // 6