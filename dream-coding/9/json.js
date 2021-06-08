// JSON (JavaScript Obejct Notation)
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization and transmission of data between the network the network connection
//   (네트워크 간의 데이터 직렬화 및 전송에 사용)
// - independent programming language and platform******

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apply', 'banana']); // ["apply","banana"] double quotes JSON규격
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // symbol: Symbol("id"), // JavaScript에만 있는 Symbol 같은 데이터도 JSON에 포함되지 않는다.
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit); // {"name":"tori","color":"white","size":null,"birthDate":"2021-06-08T03:56:05.200Z"}
console.log(json); // 함수는 object에 있는 데이터가 아니기 때문에 JSON에 포함되지 않는다.

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'gee' : value;
});
console.log(json);
// key: , value: [object Object]
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2021-06-08T04:06:24.017Z
// key: jump, value: () => {
//     console.log(`${this.name} can jump!`);
//   }
// {"name":"gee","color":"white","size":null,"birthDate":"2021-06-08T04:06:24.017Z"}

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2021-06-08T04:10:58.193Z"}

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // 에러!
// 변환한 obj는 string으로 만들어진 json으로 부터 다시 object를 만들었기 때문에
// 즉, 함수는 json에 포함되어 있지 않아 에러가 난다.

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // 에러!
// json으로 만든 데이터 자체에 있는 string이 object에 할당되어 에러가 난다.

console.log(obj.birthDate.getDate()); // parse()에서 콜백함수 처리 후

// http://jsondiff.com/
// => 서버에게 요청했을 때 첫 번째로 받아 온 데이터와 두 번째로 받아 온 데이터가 어떤게 다른지 비교할 수 있는 사이트 (디버깅할 때 유용!)

// https://jsonbeautifier.org/
// => JSON Formatter

// https://jsonparser.org/
// => JSON Parser

// https://tools.learningcontainer.com/json-validator/
// => JSON 오류 및 유용성 check!
