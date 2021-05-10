// new Date()
const date = new Date();
console.log(date); // Wed Mar 10 2021 18:08:23 GMT+0900 (대한민국 표준시)

// Date() => new 없이 호출하면 객체가 반환되지 않고 문자열이 반환된다.
const date2 = Date();
console.log(date2); // "Wed Mar 10 2021 18:09:21 GMT+0900 (대한민국 표준시)"



// new Date(milliseconds)
// 한국 표준시 KST는 협정 세계시 UTC에 9시간을 더한 시간이다.
console.log(new Date(0)); // Thu Jan 01 1970 09:00:00 GMT+0900 (대한민국 표준시)
/*
86400000ms는 1day를 의미한다.
1s = 1,000ms
1m = 60s * 1,000ms = 60,000ms
1h = 60m * 60,000ms = 3,600,000ms
1d = 24h * 3,600,000ms = 86,400,000ms
*/
console.log(new Date(86400000)); // Fri Jan 02 1970 09:00:00 GMT+0900 (대한민국 표준시)



// new Date(dateString)
console.log(new Date('May 26, 2020 10:00:00')); // Tue May 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
console.log(new Date('2020/03/26/10:00:00'));   // Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)



// new Date(year, month[, day, hour, minute, second, millisecond])
// 월을 나타내는 2는 3월을 의미한다. 2020/3/1/00:00:00:00
console.log(new Date(2020, 2)); // Sun Mar 01 2020 00:00:00 GMT+0900 (대한민국 표준시)
// 월을 나타내는 2는 3월을 의미한다. 2020/3/26/10:00:00:00
console.log(new Date(2020, 2, 26, 10, 00, 00, 0)); // Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
// 다음처럼 표현하면 가독성이 훨씬 좋다.
console.log(new Date('2020/3/26/10:00:00:00')); // Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)



