const numbers = [1, 2, 3, 4, 5];

// filter 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// 다음의 경우 numbers 배열에서 홀수인 요소만 필터링한다 (1은 true로 평가된다.)
const odds = numbers.filter(item => item % 2);
console.log(odds);



// filter 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].filter((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item % 2; // 
});

/*
    요소값: 1, 인덱스: 0, this: [1,2,3]
    요소값: 2, 인덱스: 1, this: [1,2,3]
    요소값: 3, 인덱스: 2, this: [1,2,3]
*/