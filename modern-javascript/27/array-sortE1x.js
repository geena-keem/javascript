// const fruits = ['Banana', 'Orange', 'Apple'];

// // 오름차순으로 정렬 
// console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Orange' ]

// // sort 메서드는 원본 배열을 직접 변경한다.
// console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]



// 한글 문자열인 요소도 정렬된다.
const fruits = ['바나나', '오렌지', '사과'];
console.log(fruits.sort()); // [ '바나나', '사과', '오렌지' ]
console.log(fruits); // [ '바나나', '사과', '오렌지' ]