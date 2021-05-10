// 숫자타입으로 변환
console.log(1 - '1');
// var x = 1 - '1';
// console.log(typeof x, x);

console.log(1 * '10');
console.log(1 / 'one');

// 비교 연산자 boolean으로 반환
console.log('1' > 0);


// 문자열 타입 -> 숫자 타입
console.log(+'');
// var x = +'';
// console.log(typeof x, x);

console.log(+'0');
console.log(+'1');
console.log(+'String');



// 불리언 타입 -> 숫자 타입
console.log(+true);
// var x = +true;
// console.log(typeof x, x);

console.log(+false);



// null 타입 -> 숫자 타입
console.log(+null);
// var x = +null;
// console.log(typeof x, x);



// undifined 타입 -> 숫자 타입
console.log(+undefined);
// var x = +undefined;
// console.log(typeof x, x);



// 객체 타입 -> 숫자 타입
console.log(+{});
// var x = +{};
// console.log(typeof x, x);

console.log(+[]);
// var x = +[];
// console.log(typeof x, x);

console.log(+[10, 20]);
console.log(+(function(){}));
