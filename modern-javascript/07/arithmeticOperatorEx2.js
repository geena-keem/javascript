var x = 5, result;

// 선할당 후증가
result = x++; // 5
console.log(result, x); // result = 5, x = 6

// 선증가 후할당
result = ++x; // 7
console.log(result, x); // 7 7

// 선할당 후감소
result = x--; // 7
console.log(result, x); // 7 6

// 선감소 후할당
result = --x; // 5
console.log(result, x); // 5 5 