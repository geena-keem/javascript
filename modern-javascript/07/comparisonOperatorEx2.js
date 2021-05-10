// 일치 비교
console.log(5 === 5); // t
console.log(5 === '5'); // f 일치비교는 값과 타입이 모두 같은 경우만 true를 반환

// NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(NaN === NaN); // f

// isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 boolean 값으로 반환한다.
console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN(1 + undefined));

// 양의 0과 음의 0을 비교. 일치 비교 / 동등 비교 모두 true로 반환
console.log(0 === -0);
console.log(0 == -0);