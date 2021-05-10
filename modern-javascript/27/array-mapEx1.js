const numbers = [1, 4, 9];

// map 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.
const root = numbers.map(item => Math.sqrt(item));

// 위 코드는 다음과 같다.
// const root = number.map(Math.sqrt);

// map 메서드는 새로운 배열을 반환한다.
console.log(root); // [ 1, 2, 3 ]

// map 메서드는 원본 배열을 변경하지 않는다.
console.log(numbers); // [ 1, 4, 9 ]



// map 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].map((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item;
});

/*
    요소값: 1, 인덱스: 0, this: [1,2,3]
    요소값: 2, 인덱스: 1, this: [1,2,3]
    요소값: 3, 인덱스: 2, this: [1,2,3]
*/