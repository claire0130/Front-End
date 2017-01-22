###### codesquad

## DAY 09
- HTTP
- Algorithm

### HTTP (HyperText Transfer Protocol, 초본문전송규약)
- `HyperText`text를 넘어선 `Hyper-` 상위범주를 말한다.
- `Protocol` 약속. 메시지를 주고 받을 때 메시지를 해석하기 위해서 약속.(상호간의 해석)
- WWW(웹브라우저) 상에서 정보를 주고받을 수 있는 프로토콜이다. 주로 HTML 문서를 주고 받는 데에 쓰인다. `TCP`와 `UDP`를 사용하며, `80번 포트`를 사용한다.
- 브라우저는 서버에게 `require`
- 서버는 클라이언에게 `Response`
- `클라이언트` 주로 웹 브라우저로 항상 요청만 한다.
- `서버` 클라이언트의 요성에 대해 적당한 문서를 제공해 준다.
- `프록시` 클라이언트와 서버 사이에 존재. 무언가 일을 해 준다. (클라이언트와 서버 사이에서 중간 역활(중계자))
	- 캐싱, 필터링, 로드 밸런싱, 인증, 로깅 등의 다양한 기능을 수행

#### HTTP의 특징
- 간단
- `확장 가능` 프로토콜위에 다른 프로토콜을 올릴 수 있다.
- `상태가 없다 (=stateless)` 매번 연결 하고 끊고 연결하고 끊고... ex) 문자 메시지.
	- statefull (상태가 있다.) <br>
- `세션은 존재` 상태는 없는데. 쿠키를 이용해서 세션을 존재 시킨다 => 로그인, 아이디
- `HTTP1`  한번에 한가지씩 했다. HTML -> 이미지 -> 동영상 순으로 한번에 한가지씩 받는다.
- `HTTP/1.1` 파이프라인 : 보내고 받고 보내고 받고...
- `HTTP/2`  동시 처리. 성능이 많이 좋아졌다 아직은 사용하는 곳을 없다. 병렬처리. 비용이 높아진다.

#### node.js 서버 실행해 보기

```javascript
var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
   console.log("url: " + url.parse(request.url).pathname);
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end('<h1>Hello World<h1>\n');
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
```

```
$ node server.js
```

#### node.js가 없는 경우 && mac 이라면

```
$ python -m SimpleHttpServer 8000

```

#### 터미널에서 가져오는 법

```
$ curl http://127.0.0.1:8000/
```

#### telnet으로 열어 보기

```
telnet 127.0.0.1 8000 ==> 연결. 대기 상태

Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.

받는 형식
GET / HTTP/1.0
Host: localhost:8000

HTTP/1.1 200 OK
Content-Type: text/html
Date: Mon, 16 Jan 2017 02:29:58 GMT
Connection: close

<h1>Hello World<h1>
Connection closed by foreign host.

끊어짐.
```
#### 자료
- [TCP/IP &amp; IO model] (http://www.slideshare.net/namhyeonuk90/tcp-ip-io-model)
- [how to works DNS]
- [그림으로 배우는 HTTP & Network Basic] (http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788931447897)

---

### Algorithm
- 문제를 해결하기 위한 절차나 방법.
- a set of rules that precisely defines a sequence of operations.
- `알고리듬`이 맞는 표기법이라고 함.
- 시간의 순서대로 명령어를 정확하게 정의한 집합 (시퀀스(연속, 흐름 - 시간순서))

#### [알고리즘의 조건] (https://ko.wikipedia.org/wiki/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
- `입력` 0 또는 그이상 (없어도 되지만 1개 이상)
- `출력` 정확한 output이 꼭 있어야 한다. (output이 없을 때 메소드)
--> input이 달라지면 output도 달라지는 것이 알고리즘.
- `명확성` 수행 과정은 모호하지 않은 명령어로 구성되어야 한다. (명확하게 기술해야 한다.)
- `유한성` 유한한 시간 안에 종료해야 한다. (백만년 후에 종료되는 프로그램도 알고리즘., 무한루프는 알고리즘이 아니다.)

#### 알고리즘의 서술
- 순차적으로(위에서 아래로), 반복(for), 조건(if, while, switch)의 기능을 이용
- 특정 프로그래밍 언어 또는 `pseudo code`(특정 언어가 아닌 방식, 파스칼 언어와 유사)로 작성 가능

#### 왜 알고리즘을 배워야 하나?
- 주어진 문제를 더 쉽게 풀기 위해 (기존의 지식을 바탕으로)
- 생각하는 방식의 변화
- 면접에 나오니까

#### 자료 구조 공부하기
- 여러 가지 자료 구조의 특성을 이해하기
	- Array, List, Hash, Tree, Graph, Stack, Heap... <br>
- 문제를 잘 해결하기 위해서는 좋은 자료구조의 선택이 매우 중요!

#### 복잡도(complexity) 분석
- 성능 측정을 위한 한 가지 방법
- `공간 복잡도`와 `시간 복잡도` 분석이 종종 이루어짐

#### [Asymptotic notation - 점근 표기법] (https://ko.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation)
- 알고리즘 복잡도를 단순히 하기 위해 사용됨.
- 여러가지 표기법이 있지만 `Big O` 표기법이 가장 널리 사용됨

#### `Big O` 표기법 (빠른 순서대로)
- O(1) : 상수형
- O(log n) : 로그형
- O(n log n) : 선형 로그형
- O(n2) : 2차형
- O(2n) : 지수형
- O(n!) : 팩토리얼형

#### 드물게 면접에서 물어보는 문제
- P란?
- NP란?
- P = NP?
- NP complete
- NP hard

#### 1. 주어진 배열에서 최대값을 구하라

``` python
arrary = [1, 2, 3, 4, 5, 6]
arrary2 = [-5, -10, -20, -3]

def findMax(arr):
	max = arr[0]
	for i in arr:
		if i > max:
			max = i
		print(i, max)
	return max

x = findMax(arrary)
print("max value = ", x)

x = findMax(arrary2)
print("max value = ", x)
```

#### 2. 주어진 배열을 뒤집은 배열을 리턴하라

```swift
var arr = [1, 23, 4, 5, 6, 7]

func reverseOrder(array: Array<Int>) -> Array<int>
{
	var ret = Array<int>()
	// for i in reverse(0...arr.count).reversed()
	for i in stride(from: arr.count -1, to:0, by: -1)
	{
		//print(array[i])
		ret.append(array[i])
	}
	return ret
}

let x = reverseOrder(array: arr)
print(x)

```

#### 추천 서적
- [누워서 읽는 알고리즘, 임백준] (http://www.hanbit.co.kr/store/books/look.php?p_code=B5686965977)
- [코딩 인터뷰 완전분석, 인사이트] (http://book.naver.com/bookdb/book_detail.nhn?bid=6986417)
