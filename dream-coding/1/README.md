# script태그의 async / defer

DOM 생성이 blocking되는 문제를 근본적으로 해결하기 위해 HTML5부터 script 태그에 async와 defer가 추가되었다.

다음과 같이 src 어트리뷰트를 통해 외부 자바스크립트 파일을 로드하는 경우에만 사용할 수 있으며 src 어트리뷰트가 없는 인라인 자바스트립트에는 사용할 수 없다.

```javascript
<script async src="main.js"></script>
<script defer src="main.js"></script>
```

async와 defer 어트리뷰트를 사용하면 HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행된다. 하지만 async와 defer 실행 시점에 차이가 있다.

---

##### async 어트리뷰
