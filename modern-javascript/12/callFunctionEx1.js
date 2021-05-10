// n만큼 어떤 일을 반복한다.
function repeat(n) {
    // i를 출력한다.
    for (var i = 0; i < n; i++) console.log(i);
}

repeat(5);

// n만큼 어떤 일을 반복한다.
function repeat2(n) {
    for (var i = 0; i < n; i++) {
        // i가 홀수 일때만 출력한다.
        if (i % 2) console.log(i);
    }
}

repeat2(5);



// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat3(n, f) {
    for (var i = 0; i < n; i++) {
        f(i); // i를 전달하면서 f를 호출
    }
}

var logAll = function (i) {
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat3(5, logAll);

var logOdds = function (i) {
    if (i % 2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat3(5, logOdds);

