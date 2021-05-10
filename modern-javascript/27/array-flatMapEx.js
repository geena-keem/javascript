const arr = ['hello', 'world'];

// map과 flat을 순차적으로 실행
console.log(arr.map(x => x.split('')).flat());
// ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd' ]

// flatMap은 map을 통해 생성된 새로운 배열을 평탄화한다.
console.log(arr.flatMap(x => x.split('')));
// ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd' ]


const arr2 = ['hello', 'world'];

// flatMap은 1단계만 평탄화한다.
console.log(arr2.flatMap((str, index) => [index, [str, str.length]]));
// -> [[0, ['hello', 5]], [1, ['world', 5]]] => [ 0, [ 'hello', 5 ], 1, [ 'world', 5 ] ]

// 평탄화 깊이를 지정해야 하면 flatMap 메서드를 사용하지 말고 map 메서드와 flat 메서드를 각각 호출해야한다.
console.log(arr2.map((str, index) => [index, [str, str.length]]).flat(2));
// -> [[0, ['hello', 5]], [1, ['world', 5]]] => [ 0, 'hello', 5, 1, 'world', 5 ]