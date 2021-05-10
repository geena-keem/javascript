const keem = {name: 'keem'};
const lee = {name: 'lee'};

const map = new Map([[keem, 'developer'], [lee, 'designer']]);
map.forEach((v, k, map) => console.log(v, k, map));
/*
    developer { name: 'keem' } Map(2) {
      { name: 'keem' } => 'developer',
      { name: 'lee' } => 'designer' 
    }
    designer { name: 'lee' } Map(2) {
      { name: 'keem' } => 'developer',
      { name: 'lee' } => 'designer' 
    }
*/

// Map 객체는 Map.prototype의 Symbol.iterator 메서드를 상속받은 이터러블이다.
console.log(Symbol.iterator in map); // true

// 이터러블인 Map 객체는 for...of 문으로 순회할 수 있다.
for (const entry of map) {
    console.log(entry);
    /*
    [ { name: 'keem' }, 'developer' ]
    [ { name: 'lee' }, 'designer' ]
    */
}

// 이터러블인 Map 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...map]); // [ [ { name: 'keem' }, 'developer' ], [ { name: 'lee' }, 'designer' ] ]

// 이터러블인 Map 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [a, b] = map;
console.log(a, b);  // [ { name: 'keem' }, 'developer' ] [ { name: 'lee' }, 'designer' ]