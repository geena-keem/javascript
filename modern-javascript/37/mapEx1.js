const map = new Map();

map
    .set('key1', 'value1')
    .set('key2', 'value2');
console.log(map); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }



const map2 = new Map();
const keem = {name: 'keem'};
const lee = {name: 'lee'};

// 객체도 키로 사용할 수 있다.
map2
    .set(keem, 'developer')
    .set(lee, 'designer');
console.log(map2); // Map(2) { { name: 'keem' } => 'developer', { name: 'lee' } => 'designer' }


console.log(map2.get(keem)); // designer
console.log(map2.get('key')); // undefined


const map3 = new Map([[keem, 'developer'], [lee, 'designer']]);
console.log(map3.has(keem)); // true
console.log(map3.has('key')); // false