// 교집합
// 1
Set.prototype.intersection = function (set) {
    const result = new Set();

    for(const value of set) {
        // 2개의 set의 요소가 공통되는 요소이면 교집합의 대상이다.
        if (this.has(value)) result.add(value);
    }

    return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 교집합
console.log(setA.intersection(setB)); // Set(2) { 2, 4 }
// setB와 setA의 교집합
console.log(setB.intersection(setA)); // Set(2) { 2, 4 }


// 2
Set.prototype.intersection2 = function (set) {
    return new Set([...this].filter(v => set.has(v)));
};

const setC = new Set([1, 2, 3, 4]);
const setD = new Set([2, 4]);
// setC와 setD의 교집합
console.log(setC.intersection2(setD)); // Set(2) { 2, 4 }
// setD와 setC의 교집합
console.log(setD.intersection2(setC)); // Set(2) { 2, 4 }