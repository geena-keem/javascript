// 유사 배열 객체를 반환하여 배열을 생성한다.
Array.from({ length: 2, 0: 'a', 1: 'b' }); // ["a", "b"]

// 이터러블을 반환하여 배열을 생성한다. 문자열은 이터러블이다.
Array.from('Hello'); // ["H", "e", "l", "l", "o"]

// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefinde를 요소로 채운다.
Array.from({ length: 3 }); // [undefined, undefined, undefined]

// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.
Array.from({ length:3 }, (_, i) => i); // [0, 1, 2]