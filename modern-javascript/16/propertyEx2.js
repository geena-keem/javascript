const person = {};

Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        value: 'gee-na',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Keem',
        writable: true,
        enumerable: true,
        configurable: true
    },
    
    // 접근자 프로퍼티 정의
    fullName: {
        // getter 함수
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = 'gee-na Keem';
console.log(person); // { firstName: 'gee-na', lastName: 'Keem', fullName: [Getter/Setter] }