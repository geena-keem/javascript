var x = 2;
var result;

if (x % 2) {
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result);

// 위 코드를 삼항 조건 연산자로 바꿔보기
var x = 2;
var result = x % 2 ? '홀수' : '짝수';

console.log(result);

// 경우의 수가 세 가지일 경우
var num = 2;
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind);