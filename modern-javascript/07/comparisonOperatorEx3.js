console.log(-0 === +0);
console.log(Object.is(-0, +0));

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

// 부동등 비교
console.log(5 != 8);
console.log(5 != 5);
console.log(5 != '5');

// 불일치 비교
console.log(5 !== 8);
console.log(5 !== 5);
console.log(5 !== '5');