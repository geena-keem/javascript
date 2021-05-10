// foo라는 레이블 식별자가 붙은 레이블 문
foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}

console.log('Done!');


// outer라는 식별자가 붙은 레이블 for문
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        // i + j ===3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!');


var string = 'Hello World';
var search = 'd';
var index;

//문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
    if (string[i] === search) {
        index = i;
        break;
    }
}

console.log(index);
// 참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search));