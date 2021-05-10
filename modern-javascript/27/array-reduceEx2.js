// reduce 메서드의 두 번째 인수, 즉 초기값을 생략했다.
const sum = [1, 2, 3, 4].reduce((acc, cur) => acc + cur);
console.log(sum); // 10



// reduce 메서드를 호출할 때는 초기값을 전달하는 것이 좋다.
// 초기값을 안줬을때 (오류난다)
// const sum3 = [].reduce((acc, cur) => acc + cur);
// console.log(sum3); // TypeError: Reduce of empty array with no initial value

// 초기값을 줬을때
const sum2 = [].reduce((acc, cur) => acc + cur, 0);
console.log(sum2); // 0


// reduce 메서드로 객체의 특정 프로퍼티 값을 합산
// 초기값을 안줬을때
const products = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 }
];
// 1번째 순회 시 acc는 {id: 1, price: 100}, cur은 { id:2, price: 200 }이고
// 2번째 순회 시 acc는 300, cur은 { id:3, price: 300 }dlek.
// 2번째 순회 시 acc에 함수에 객체가 아닌 숫자값이 전달된다. 이때 acc.price는 undefined다.
const priceSum = products.reduce((acc, cur) => acc.price + cur.price);
//const priceSum = products.reduce((acc, cur) => acc + cur.price);
// [object Object]200300
console.log(priceSum); // NaN

// 초기값 줬을때
const products2 = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 }
];
/*
    1번째 순회: acc => 0,   cur => { id: 1, price: 100 }
    2번째 순회: acc => 100, cur => { id: 2, price: 200 }
    3번째 순회: acc => 200, cur => { id: 3, price: 300 }
*/
const priceSum2 = products2.reduce((acc, cur) => acc + cur.price, 0);
console.log(priceSum2); // 600