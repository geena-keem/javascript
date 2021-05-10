const person = {
    name: 'Keem',
    address: 'Ansan',
    __proto__: {age: 20}
};

for (const key in person) {
    console.log(key + ': ' + person[key]);
}

/*
    name: Keem
    address: Ansan
    age: 20
*/

const sym = Symbol();
const obj = {
    a: 1,
    [sym]: 10
};

for (const key in obj) {
    console.log(key + ': ' + obj[key]);
} // a: 1