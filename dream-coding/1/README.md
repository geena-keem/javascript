# script태그의 async / defer

DOM 생성이 blocking되는 문제를 근본적으로 해결하기 위해 HTML5부터 script 태그에 async와 defer가 추가되었다.

다음과 같이 src 어트리뷰트를 통해 외부 자바스크립트 파일을 로드하는 경우에만 사용할 수 있으며 src 어트리뷰트가 없는 인라인 자바스트립트에는 사용할 수 없다.

```javascript
<script async src="main.js"></script>
<script defer src="main.js"></script>
```

async와 defer 어트리뷰트를 사용하면 HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행된다. 하지만 async와 defer 실행 시점에 차이가 있다.

# async

![async](https://user-images.githubusercontent.com/74528393/119484010-918fe900-bd90-11eb-84a3-06a2106ad12d.png)

- HTML 파싱과 외부 자바스크립트의 파일의 로드가 비동기적으로 동시에 진행된다.
- 자바스크립트의 파싱과 실행은 자바스크립트 파일의 로드가 완료된 직후 진행되며, 이때 HTML 파싱이 중단된다.
- 여러개의 script 태그에 async를 지정하면 script 태그의 순서와는 상관없이 로드가 완료된 자바스크립트부터 먼저 실행되며 순서가 보장되지 않는다.
  (순서 보장이 필요한 경우에는 async를 지정하면 안된다.)
- Chrom 8, IE 10, Safari 5.1이상부터 지원한다.

# defer

![defer](https://user-images.githubusercontent.com/74528393/119484641-2d215980-bd91-11eb-98aa-72c2f04cd8ab.png)

- async와 마찬가지로 HTML 파싱과 외부 자바스크립트의 파일의 로드가 비동기적으로 동시에 진행된다.
- 자바스크립트의 파싱과 실행은 HTML 파싱이 완료된 직후, 즉 DOM 생성이 완료된 직후(이때 DOMContentLoaded 이벤트가 발생) 진행된다.
- DOM 생성이 완료된 이후 실행되어야 할 자바스크립트에 유용하다.
- defer의 경우 정의된 순서대로 자바스크립트가 실행되어 순서가 보장된다.
- Chrom 8, IE 10(6-9는 부분적으로 지원), Safari 5.1이상부터 지원한다.
