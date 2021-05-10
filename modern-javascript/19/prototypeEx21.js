const person = {
    name: 'Keem',
    address: 'Ansan',
    __proto__: {age: 20}
};

for (const key in person) {
    // 객체 자신의 프로퍼티인지 확인하는 조건문
    if (!person.hasOwnProperty(key)) continue; 
    console.log(key + ': ' + person[key]);
}

/*
   name: Keem
    address: Ansan 
*/