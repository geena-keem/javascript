// ES5
var arr = [1, 2, 3];

// var one = arr[0];
// var two = arr[1];
// var three = arr[2];

// console.log(one, two, three); // 1 2 3


// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스다.
const [one, two, three] = arr;
console.log(one, two, three); // 1 2 3



// const [a, b] = [1, 2];
// console.log(a, b); // 1 2 

// const [c, d] = [1];
// console.log(c, d); // 1 undefined

// const [e, f] = [1, 2, 3];
// console.log(e, f); // 1 2

// const [g, , h] = [1, 2, 3];
// console.log(g, h); // 1 3

// 기본값
const [a, b, c = 3] = [1, 2];
console.log(a, b, c); // 1 2 3

// 기본값보다 할당된 값이 우선한다.
const [e, f = 10, g = 3] = [1, 2];
console.log(e, f, g); // 1 2 3