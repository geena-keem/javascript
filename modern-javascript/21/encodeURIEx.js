// 완전한 URI
const uri = 'http://example.com?name=김지나&job=jobless&jobless';

// encodeURI 함수는 완전 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const enc = encodeURI(uri);
console.log(enc); // http://example.com?name=%EA%B9%80%EC%A7%80%EB%82%98&job=jobless&jobless