// const arr = [3, 4];

// // unshift와 push 메서드는 인수로 전달받은 배열을 그대로 원본 배열의 요소로 추가한다.
// arr.unshift([1, 2]);
// arr.push([5, 6]);
// console.log(arr); // [ [ 1, 2 ], 3, 4, [ 5, 6 ] ]


// // concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 요소로 추가한다.
// let result = [1, 2].concat([3, 4]);
// result = result.concat([5, 6]);

// console.log(result); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(arr); // [ [ 1, 2 ], 3, 4, [ 5, 6 ] ] => 위 코드 unshift랑 push때메 원본이 변경됌



// concat 메서드 사용
let result = [1, 2].concat([3, 4]);
console.log(result); // [ 1, 2, 3, 4 ]

// 위 코드를 스프레드 문법을 사용하면 더 좋다
result = [...[1, 2],...[3, 4]];
console.log(result); // [ 1, 2, 3, 4 ]