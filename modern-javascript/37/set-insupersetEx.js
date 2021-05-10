// 부분집합과 상위 집합
// 1
// this가 subset의 상위 집합인지 확인한다.
Set.prototype.inSuperset = function (subset) {
    for (const value of subset) {
        // superset의 모든 요소가 subset의 모든 요소를 포함하는지 확인
        if (!this.has(value)) return false;
    }
    
    return true;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.inSuperset(setB)); // true
console.log(setB.inSuperset(setA)); // false


// 2
Set.prototype.inSuperset2 = function (subset) {
    const supersetArr = [...this];
    return [...subset].every(v => supersetArr.includes(v));
};

const setC = new Set([1, 2, 3, 4]);
const setD = new Set([2, 4]);

console.log(setC.inSuperset2(setD)); // true
console.log(setD.inSuperset2(setC)); // false