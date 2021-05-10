class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        // add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다.
        // 1

        // this를 일단 회피시킨다.
        const that = this;
        return arr.map(function (item) {
            // this 대신 that을 참조한다.
            return that.prefix + ' ' + item; // 2
            // TypeError: Cannot read property 'prefix' of undefined
        }.bind(this)); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select'])); 
// [ '-webkit- transition', '-webkit- user-select' ]