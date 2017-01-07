###### codesquad

## DAY 02
- JavaScript
- Chrome Browser 
	- Chrome console
	- 오류 메시지
- JavaScript type
- function

### JavaScript
- `JS`가 실행 될 수 있는 곳
: `JavaScript`를 해석 할 수 있는 곳
	- Browser
	- Terminal(nodeJS 설치 가능) : `nodeJS` 서버사이드 자바스크립트 
- `검색`
	- `ex.` javascript for mdn (mozilla developer network) 
	- `영문` 명세를 봐라 
	- `code`를 먼저 봐라
- `디버깅(debugging)` 프로그램의 정확성이나 논리적인 오류(버그)를 찾아내는 테스트 과정

#### Chrome Browser 
- 브라우저의 JavaScript 문법(syntax)를 해석할 수 있는 프로그램이 포함되어 있다.
- `V8` JavaScript Engine
- Chrome console 단축키 <br>
: `Ctrl+Shift+J` (Windows / Linux) or `Cmd+Opt+J` (Mac). <br>
- [Using the Console] (https://developers.google.com/web/tools/chrome-devtools/console/)
- `HTML Parser`가 해석한 다음 해석 

##### 어떻게 실행되는 걸까?
`token` 단위로 잘라서 해석 <br> 
코드를 문자 단위로 잘게 쪼개서 정보를 가지고 있고,(`parser`를 통해) <br>
이를 기반으로 컴퓨터를 해석할 수 있는 코드로 다시 만들로(`bytecode`) <br>
그걸 해석하면서 출력 (`interpreter`)<br>

```javascript
	a = 3; // 표현식. `=` 대입, `;` 이 구문에서 여기까지 한다라는 표시
```

> `브라우저 안에서 이 과정이 순식간에 일어난다`

##### [console] (https://developer.mozilla.org/en-US/docs/Web/API/Console)
- Outputs a message to the Web Console.
- Chrome Browser 제공하는 내장 객체
- `console` 객체(objcet), 묶음
- `log` 함수(메소드)
- `()` 함수 실행
> `console 객체에 log 함수 실행`

##### console Methods
- `console.log()` 일반적인 로그를 출력
- `console.dir()` 
- `console.error()`
- `console.time()` 지정된 이름으로 timer를 시작한다. 한 페이지에서 동시에 10,000개의 타이머까지 실행이 가능
- `console.timeEnd()` 지정된 timer를 중지하고, 타이머 시작으로 부터 경과된 시간을 출력
- `console.clear()` 콘솔에 기록된 내용들을 지운다.

##### 오류 메시지
- `Syntax` <br>
: 구문 또는 신택스(syntax)란 프로그래밍 언어에서 프로그램의 모습, 형태, 구조가 어떻게 보이는지에 대해 정의하는 것이며, 구문은 정해진 문법을 이용한다. <br>
- `Uncaught ReferenceError: wewer is not defined` 선언하지 않는 변수 사용 했다
- `Uncaught SyntaxError: Invalid or unexpected token` 문법, 구문 오류: 기대하지 않는 token이다
- `오타` 방지
	- `Q&A` 테스트 시나리오 
	- `TDD` 테스트 자동화 (테스트 주도 개발방법론)
- `잠재적인 오류` 

```javascript
	a = wewer; // Uncaught ReferenceError: wewer is not defined
	wewer = 'ok';
	a = wewer; // ok

	a = wewer"; // Uncaught SyntaxError: Invalid or unexpected token

	a = wewer;; // 잠재적인 오류 

	a == wewer;; // true => 버그
```

- `암묵적 형변환` string + number 
```javascrpt
	var a = 3, b = '4', c = a+b;
	console.log('a 더하기 b는 이겁니다', c); // a 더하기 b는 이겁니다 34
```

- 연산자 우선 순위
```javascript
	var a = 3, b = 4, c = a+b;
	a + ( b * 2); // 11
	(a + b) * 2; // 14
```

#### JavaScript type
- `string`    	문자
- `number` 	  	숫자
- `boolean`   	불리언
- `null`		변수를 선언하고 `null`빈 값을 할당.
- `undefined`  	변수를 선언하고 값이 할당히지 않음. 

```javascript
a = 3, 
b = 'bbb', 
b = '', 
c = null, 
d = true
e = [];

typeof a; // number
typeof b; // string
typeof c; // object
typeof d; // boolean
typeof e; // object

```
>`typeof`는 완벽하게 `type` 체크를 해 주지 않는다. (`null`, `[]`를 올바르게 인식하지 못한다.)

#### `Namespace` 이름 공간. 빈객체. 충돌을 방지
: `Namespace Pattern`이란? 객체를 활용하는 방법

#### 임의의 원의 면적을 log 출력

```javascrpt
var circle = Math.PI;
console.log(circle); // 3.141592653589793
```

- [Math.PI] (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math) 
: Ratio of the circumference of a circle to its diameter, approximately 3.14159.

#### 변수의 종류 
- var 
- const
- let

#### 코드 공유 
: 나의 코드를 다른 사람에게 공유할 때 용이
- [jsbin] (http://jsbin.com/) 
- [jsfiddle] (https://jsfiddle.net/)
- [codepen] (http://codepen.io/)

#### function 
: 모든 함수는 값을 반환해야 한다. 

```javascript
function log1() {
   return "this is log";
}
log1(); // this is log

function log2() {   
}
log2(); // undefiend

// 위에 코드와 같다 
function log3() {
	return undefiend;
} 
log3(); // undefiend
```
> 기본값으로 `undefiend` 반환환다.

```javascript
	function log(arg) {
		// data = "my data";
		console.log(arg);
	}
	log('my data');
```

이름 | 역할 |
------| ---------
function | js engine이 분석할때 구분해야 하는 키워드(var, =와 같이) 
log |  함수의리 이름 
arg |  parameter(매개변수)라고 하며, 함수가 동작할 때 필요한 변수


#### calculate 함수의 동작을 글로 코딩 - 디지인(설계)
- 첫번째, 두번째 인자는 숫자(number), 세번째 인자 문자(string)이 값이 들어간다.
- 만약 3번째 인자가 `plus` 라면 첫번째 인자와 두번째 인자가 더한다
- 만약 3번째 인자가 `minus` 라면 첫번째 인자와 두번째 인자가 뺀다
- 만약 3번째 인자가 `multiply` 라면 첫번째 인자와 두번째 인자가 곱한다

```javascrpt

// if
function calculate_func(a, b, c) {
	if( c === 'plus' ) {
		return a + b;
	}
	if ( c === 'minus' ) {
		return a - b;
	}
	if ( c === 'multiply'  ) {
		return a * b;
	}
}

calculate_func(10,20,'plus'); 
calculate_func(10,20,'minus');
calculate_func(10,20,'multiply');

```

#### 추천 책
- [자바스크립트 코딩 기법과 핵심 패턴 JavaScript Patterns] (http://book.daum.net/detail/book.do?bookid=KOR9788966260157)
- [자바스크립트를 말하다] (http://www.hanbit.co.kr/store/books/look.php?p_code=B3604189413)