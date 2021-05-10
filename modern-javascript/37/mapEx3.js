const keem = {name: 'keem'};
const lee = {name: 'lee'};

const map = new Map([[keem, 'developer'], [lee, 'designer']]);

// Map.prototype.keys는 Map 객체에서 요소키를 값으로 갖는 이터레이터를 반환한다.
for (const key of map.keys()) {
    console.log(key); // { name: 'keem' } { name: 'lee' }
}

// Map.prototype.values는 Map 객체에서 요소값을 값으로 갖는 이터레이터를 반환한다.
for (const value of map.values()) {
    console.log(value); // developer designer
}

// Map.prototype.entries는 Map 객체에서 요소키와 요소값을 값으로 갖는 이터레이터를 반환한다.
for (const entry of map.entries()) {
    console.log(entry); // [ { name: 'keem' }, 'developer' ] [ { name: 'lee' }, 'designer' ]
}