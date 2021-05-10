var string = 'Hello World';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if (string[i] !== search) continue;
    count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count);

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
// 정규식 표현 578p 참고 'g'는 Global: 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다. 
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length);


// 위의 for문과 동일한 코드! 위의 for문을 주석처리하고 실행해야한다.
for (var i = 0; i < string.length; i++) {
    // 'l'이면 카운트를 증가 시킨다.
    if (string[i] === search) count++;
}

console.log(count);


// continue 문을 사용하지 않으면 if문 내에 코드를 작성해야 한다.
// (1)
for (var i = 0; i < string.length; i++) {
    // l이면 카운트를 증가 시킨다.
    if (string[i] === search) {
        count++;
    }
}

// (2)
for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 카운트를 증가시키지 않는다.
    if (string[i] !== search) continue;

    count++;
}