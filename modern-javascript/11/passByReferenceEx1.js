var person = {
    name: 'Keem'
};

// 참조 값을 복사 (얇은 복사). copy와 person은 동일한 참조 값을 갖는다.
var copy = person;

// copy와 person은 동일한 객체를 참조한다.
console.log(copy === person); // true

// copy를 통해 객체를 변경한다.
copy.name = 'gee-na';

// person을 통해 객체를 변경한다.
person.address = 'Ansan';


// copy와 person은 동일한 객체이다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고 받는다.
console.log(person); // { name: 'gee-na', address: 'Ansan' }
console.log(copy); // { name: 'gee-na', address: 'Ansan' }