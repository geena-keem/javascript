function multyply(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(multyply()); // NaN
console.log(multyply(1)); // NaN
console.log(multyply(1, 2)); // 2
console.log(multyply(1, 2, 3)); // 2 매개변수의 개수보다 인수를 더 많이 전달한 경우 초과된 인수는 무시된다.
                                // 무시됐다고 버려지는 것은 아니고 arguments 객체의 프로퍼티로 보관된다.


