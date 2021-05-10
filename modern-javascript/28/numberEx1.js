// Number.EPSILON
function isEqual(a, b) {
    // a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(isEqual(0.1 + 0.2, 0.3)); // true


// Number.MAX_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Infinity > Number.MAX_VALUE); // true


// Number.MIN_VALUE
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_VALUE > 0); // true


// Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991


// Number.MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991


// Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY); // Infinity


// Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY); // -Infinity


// Number.NaN
console.log(Number.NaN); // NaN
