var person1 = {
    name: 'keem'
};

var person2 = {
    name: 'keem'
};

console.log(person1 === person2); // 메모리 주소값이 다르므로 false
console.log(person1.name === person2.name) // 참조 값이 같으므로 true