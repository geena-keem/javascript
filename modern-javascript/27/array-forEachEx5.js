// // 만약 Array.prototype에 forEach 메서드가 존재하지 않으면 폴리필을 추가한다.
// if (!Array.prototype.forEach) {
//     Array.prototype.forEach = function (callback, thisArg) {
//         // 첫 번째 인수가 함수가 아니면 TypeError를 발생시킨다.
//         if (typeof callback !== 'function') {
//             throw new TypeError(callback + ' is not a function');
//         }

//         // this로 사용할 두 번째 인수를 전달받지 못하면 전역 객체를 this로 사용한다.
//         thisArg = thisArg || window;

//         // for문으로 배열을 순회하면서 콜백 함수를 호출한다.
//         for (var i = 0; i < this.length; i++) {
//             // call 메서드를 통해 thisArg를 전달하면서 콜백 함수를 호출한다.
//             // 이때 콜백 함수의 인수로 배열 요소, 인덱스, 배열 자신을 전달한다.
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }




Array.prototype.myForEach = function (f) {
    // 첫번재 매개변수에 함수가 전달되었는지 확인
    // console.log((function(){}).toString()); // function(){}
    // console.log(Object.prototype.toString.call(function(){})); // [object Function]
    // poiemaweb.com/js-type-check 참고
    if (!f || {}.toString.call(f) !== '[object Function]') {
      throw new TypeError(f + ' is not a function.');
    }
  
    for (let i = 0; i < this.length; i++) {
      // 배열 요소의 값, 요소 인덱스, forEach 메소드를 호출한 배열, 즉 this를 매개변수에 전달하고 콜백 함수 호출
      f(this[i], i, this);
    }
  };
  
  let total = 0;
  
  [0, 1, 2, 3].myForEach(function (item, index, array) {
    console.log(`[${index}]: ${item} of [${array}]`);
    total += item;
  });
  
  console.log('Total: ', total);