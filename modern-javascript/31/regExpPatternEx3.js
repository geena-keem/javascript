// 특정 단어로 시작하는지 검사
const url = 'https://example.com';
// 'http' 또는 'https'로 시작하는지 검사한다.
console.log(/^https?:\/\//.test(url)); // true
// 위 예제와 동일
console.log(/^(http|https):\/\//.test(url)); // true



// 특정 단어로 끝나는지 검사
const fileName = 'index.html';
// 'html'로 끝나는지 검사
console.log(/html$/.test(fileName)); // true



// 숫자로만 이루어진 문자열인지 검사
const target = '12345';
console.log(/^\d+$/.test(target)); // true



// 하나 이상의 공백으로 시작하는지 검사
const target2 = ' Hi!';
console.log(/^[\s]+/.test(target2)); // true



// 아이디로 사용 가능한지 검사
const id = 'abc123';
// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사한다.
console.log(/^[A-Za-z0-9]{4,10}$/.test(id)); // true



// 메일 주소 형식이 맞는지 검사 (인터넷 메세지 형식 규약 참고)
const mail = 'gee-na@gmail.com';
console.log(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(mail));
// true



// 핸드폰 번호 형식에 맞는지 확인
const cellphone = '010-1234-5678';
console.log(/^\d{3}-\d{4}-\d{4}$/.test(cellphone)); // true



// 특수 문자 포함 여부 검사
const target3 = 'abc#123';
// A-Za-z0-9 이외의 문자가 있는지 검사한다.
console.log((/[^A-Za-z0-9]/gi).test(target3)); // -> true
// 특수 문자를 선택적으로 검사할 수 있는 코드
console.log((/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi).test(target3)); // true



// 특수 문자 제거
console.log(target3.replace(/[^A-Za-z0-9]/gi, '')); // -> abc123