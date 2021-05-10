// 사용자로부터 입력받은 휴대폰 전화번호
const tel = '010-1234-567팔';

// 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
const regExp = /^\d{3}-\d{4}-\d{4}$/;

// tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트(확인)한다.
console.log(regExp.test(tel)); // false



// 정규 표현식 객체 생성
const target = 'Is this all there is?';

// 패턴: is
// 플래그: i => 대소문자를 구별하지 않고 검색한다.
const regExp2 = /is/i;

// test 메서드는 target 문자열에 대해 정규 표현식 regExp2의 패턴을 검색하여 매칭 결과를
// 불리언 값으로 반환한다.
console.log(regExp2.test(target)); // true



// RegExp 생성자 함수를 사용하여 RegExp 객체 생성
const target2 = 'Is this all there is?';

const regExp3 = new RegExp(/is/i); // ES6
// const regExp3 = new RegExp(/is/, i);
// const regExp3 = new REgExp('is', i);

console.log(regExp3.test(target2)); // true