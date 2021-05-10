// 합집합
// 1
Set.prototype.union = function (set) {
    // this(Set 객체)를 복사
    const result = new Set(this);

    for (const value of set) {
        // 합집합은 2개의 Set객체의 모든 요소로 구성된 집합이다. 중복된 요소는 포함되지 않는다.
        result.add(value);
    }

    return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 합집합
console.log(setA.union(setB)); // Set(4) { 1, 2, 3, 4 }
// setB와 setA의 합집합
console.log(setB.union(setA)); // Set(4) { 2, 4, 1, 3 }



// 2
Set.prototype.union2 = function (set) {
    return new Set([...this, ...set]);
};

const setC = new Set([1, 2, 3, 4]);
const setD = new Set([2, 4]);

// setC와 setD의 합집합
console.log(setC.union2(setD)); // Set(4) { 1, 2, 3, 4 }
// setD와 setC의 합집합
console.log(setD.union2(setC)); // Set(4) { 2, 4, 1, 3 }