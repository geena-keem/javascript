function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0



function add2(d = 0, e = 0, f = 0) {
    return d + e + f;
}

console.log(add2(1, 2, 3)); // 6
console.log(add2(1, 2)); // 3
console.log(add2(1)); // 1
console.log(add2()); // 0
