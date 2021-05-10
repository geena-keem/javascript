var count = 0; // 현재 카운트를 나타내는 상태

// 비순수 함수
function increase() {
    return ++count;
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2