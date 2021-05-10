// 1부터 4까지 누적을 구한다.
const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0);
console.log(sum); // 10


// 평균 구하기
const values = [1, 2, 3, 4, 5, 6];

const average = values.reduce((acc, cur, i, { length }) => {
    // 마지막 순회가 아니면 누적값을 반환하고 마지막 순회면 누적값으로 평균을 구해 반환한다.
    return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average); // 3.5


// 최대값 구하기
const values2 = [1, 2, 3, 4, 5];

const max = values2.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); // 5

// 위 코드는 Math.max 메서드를 사용하는게 좋다
const max2 = Math.max(...values2);
// var max2 = Math.max.apply(null, values2);
console.log(max); // 5


// 요소의 중복 횟수 구하기
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur) => {
    // 첫 번째 순회 시 acc는 초기값인 {}이고 cur은 첫 번째 요소인 'banana'이다
    // 초기값으로 전달받은 빈 객체에 요소값인 cur을 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당한다.
    // 만약 프로퍼티 값이 undefined(처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화한다.
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});

// 콜백 함수는 총 5번 호출되고 다음과 같이 결과값을 반환한다.
/*
{banana: 1} => {banana: 1, apple: 1} => {banana: 1, apple: 1, orange: 1}
=> {banana: 1, apple: 1, orange: 2} => {banana: 1, apple: 2, orange: 2}
*/

console.log(count); // { banana: 1, apple: 2, orange: 2 }



// 중첩 배열 평탄화
const values3 = [1, [2, 3], 4, [5, 6]];

const flatten = values3.reduce((acc, cur) => acc.concat(cur), []);
// [1] => [1, 2, 3] => [1, 2, 3, 4] => [1, 2, 3, 4, 5, 6]
console.log(flatten); // [ 1, 2, 3, 4, 5, 6 ]

// flat 메서드를 이용한 중첩 배열 평탄화 
console.log([1, [2, 3, 4, 5]].flat()); // [ 1, 2, 3, 4, 5 ]
console.log([1, [2, 3, [4, 5]]].flat(2)); // [ 1, 2, 3, 4, 5 ]


// 중복 요소 제거
const values4 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result = values4.reduce((acc, cur, i, arr) => {
    // 순회 중인 요소의 인덱스가 자신의 인덱스라면 처음 순회하는 요소다.
    // 이 요소만 초기값으로 전달받은 배열에 담아 반환한다.
    // 순회 중인 요소의 인덱스가 자신의 인덱스가 아니라면 중복된 요소다.
    if (arr.indexOf(cur) === i) acc.push(cur);
    return acc;
}, []);

console.log(result); // [ 1, 2, 3, 5, 4 ]


// filter 메서드를 사용해서 중복요소 제거
const values5 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// 순회 중인 요소의 인덱스가 자신의 인덱스라면 처음 순회하는 요소다. 이 요소만 필터링한다.
const result2 = values5.filter((v, i, arr) => arr.indexOf(v) === i);
console.log(result2); // [ 1, 2, 3, 5, 4 ]



// Set을 사용해서 중복요소 제거(추천)
const values6 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// 중복을 허용하지 않는 Set 객체의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.
const result3 = [...new Set(values6)];
console.log(result3); // [ 1, 2, 3, 5, 4 ]