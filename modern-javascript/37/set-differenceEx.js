// 차집합
// 1
Set.prototype.difference = function (set) {
    // this(Set 객체)를 복사
    const result = new Set(this);

    for (const value of set) {
        // 차집합은 어느 한쪽 집합에는 존재하지만 다른 한쪽 집합에는 존재하지 않는 요소로 구성된 집합
        result.delete(value);
    }
    
    return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA에 대한 setB의 차집합
console.log(setA.difference(setB)); // Set(2) { 1, 3 }
// setB에 대한 setA의 차집합
console.log(setB.difference(setA)); // Set(0) {}



// 2
Set.prototype.difference2 = function (set) {
    return new Set([...this].filter((v) => !set.has(v)));
};

const setC = new Set([1, 2, 3, 4]);
const setD = new Set([2, 4]);

// setC에 대한 setD의 차집합
console.log(setC.difference2(setD)); // Set(2) { 1, 3 }
// setD에 대한 setC의 차집합
console.log(setD.difference2(setC)); // Set(0) {}
