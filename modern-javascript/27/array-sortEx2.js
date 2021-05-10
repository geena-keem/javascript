// // 숫자 타입 정렬
// const points = [40, 100, 1, 5, 2, 25, 10];
// points.sort();
// // 숫자 요소들로 이루어진 배열은 의도한 대로 정렬되지 않는다.
// console.log(points); // [1, 10, 100, 2, 25, 40, 5]



// 비교 함수를 인수로 전달하여 숫자 요소를 정렬
const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열의 오름차순 정렬. 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬한다.
points.sort((a, b) => a - b);
console.log(points); // [ 1, 2, 5, 10, 25, 40, 100 ]

// 숫자 배열에서 최소/최댓값 취득
console.log(points[0], points[points.length - 1]); // 1 100

// 숫자 배열의 내림차순 정렬. 비교 함수의 반환값이 0보다 작으면 b를 우선하여 정렬한다.
points.sort((a, b) => b -a);
console.log(points); // [ 100, 40, 25, 10, 5, 2, 1 ]

//숫자 배열에서 최소/최댓값 취즉
console.log(points[points.length-1], points[0]); // 1 100

