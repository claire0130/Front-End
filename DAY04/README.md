###### codesquad

## DAY 04
- 용어 정리
- 비교 연산자 (Compare Operators)
- 논리 연산자 (Logical Operators)
- for
- Array

#### 용어 정리
- `인터프리터` 		한 라인별로 해석하면서 실행되는 방식.(JavaScript)
	- `컴파일러` 		특정 프로그래밍 언어로 쓰여 있는 문서를 다른 프로그래밍 언어로 옮기는 프로그램 (JAVA, swift)
- `소스코드`  		프로그래밍이 실행되기 전에 개발자가 구현한 프로그램
- `알고리즘`  		어떤 문제를 풀기 위한 방식이나 절차 
- `버그`  			프로그램안의 에러
- `디버깅`  			프로그래밍 에러를 찾고 제거 하기 위한 절차 (chrome 개발자 도구)
- `신택스(syntax)`	프로그램의 구조 (정해진 문법, 규칙)
- `syntaxError` 	컴퓨터가 파싱(해석)하기 어렵게 만들어진 프로그램안의 에러
- `토큰(token)` 		프로그램 구조 안의 하나의 기본적인 요소 (JavaScript Parser가 해석)
- `값(value)` 		프로그램에서 조작되는 숫자,문자열과 같은 데이터의 최소 단위
- `타입(type)` 		value의 어떠한 형태(종류) 
	- JavaScript 타입은 나중에 결정
	- string, number, boolean, undefined, function, array, object, null
	- `typeof`는 완벽하게 `type` 체크를 해 주지 않는다. (`null`, `[]`는 `ojbect`로 나와 올바르게 인식하지 못한다.)
	
- `유지보수(maintenance)` 
- javascript가 한번 문법을 보고 어딘가에 저장해 둔다. 
- 브라우저 밴더사마다 엔진이 각기 다르다. 
-`문자열`  			 문자 또는 문자들로 구성된 자바스크립트 타입 
-`변수`  			 value를 참조하고 있는 이름 (var a = 2017)
-`keyword`  		 `for`, `if`, `function`, `var`, `let`, `Class`와 같이 이미 특별하게 처리되기 위해 예약된 단어들. (예약어)
	- 외울 필요가 없다. 디버깅을 통해 피하면 된다.
	- 에디터에서 예약어을 쓰면 체크해 준다.
-`연산자`   			 특별한 기호 (+, -, *, / 등)'
-`연산자 우선순위`  	 *,/ 가 +,-보다 우선해서 계산되고, `()`안의 표현식이 먼저 연산되는 것.
-`표현식` 			 var a = 3; (변수 = 값 으로 표현하는 식)
-`주석(comment)` 	 프로그래밍이 의미하는 것을 표현하는 정보(해석되지 않는 코드다)
	- JavaScript는 주석인지 파악하고 무시한다.
	- 다른 사람이 읽었을 때 완벽하게 읽힐 수 있는 코드이면 주석을 남지 않아도 되지만, 다른 사람이 이해할 수 있을 만큼만 최소한의 주석을 남기면 좋다
	- `//`    한 줄 라인
	- `/* */` 여러 줄 라인
-`함수` 
- 유용하게 사용될 특정 연산(처리)의 묶음.
- 하나의 목적성과 반복적인 일은 코드를 범용적으로 사용
- 의미적인 함수 위주로 코드를 만든다 
	- `함수를 정의하다`  	 새로운 함수를 만든다.
	- `인자`  			 함수에 전달하는 값 (add(1,2)) - value
	- `매개변수(parameter)` 함수에서 받아서 사용할 지역변수(function add(num1, num2){  }) - 변수
	- `지역변수`   		 함수안에서 `var`, `let`(ES6: IE10+) 와 함께 정의된 변수
	- `리턴(return)값`   	함수의 결과
	- `함수가 undefined를 반환 할때`  함수에서 아무것도 반환하지 않을때 기본 반환값
	- `call stack` 함수가 어떻게 불려졌는지 스택구조로 표현된 호출관계 
- `코드 리뷰`  
	[코드 리뷰, 어디까지 해봤니?] (http://tech.kakao.com/2016/02/04/code-review/)
- `JavaScript compiler` [bable] (https://babeljs.io/)
: `ES6` 문법을 `bable`를 통해서 `ES5`로 치환된 코드로 사용한다. (ES6 인식하지 못한 브라우저를 위해)

---

#### 비교 연산자 (Compare Operators)
- `>` 보다 크다
- `<` 보다 작다
- `>=` 보다 크거나 같다
- `<=` 보다 작거나 같다
- `==` 값이 같다 ( 자동으로 형 변환 발생! 안티 패턴)
- `===` 값이 같다 ( 자동으로 형 변환 발생하지 않는다! 굿 패턴) 엄격!!
- `!=` 같이 다르다 ( 자동으로 형 변환 발생! 안티 패턴)
- `!==` 값이 다르다 ( 자동으로 형 변환 발생하지 않는다! 굿 패턴) 엄격!!

#### 논리 연산자 (Logical Operators)
- `&&` 두 조건 모두 참일 때만 결과 참
- `||` 두 조건 중 하나가 참이면 결과 참
- `!` 불리언 값으로 변경하되, 반전시킴

---

#### [for] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

```javascript
for ( 초기 변수 선언 - `순서1`; 선언된 변수를 검증(조건: 참이면 계속, 거짓이면 그만!) - `순서2`; 변수의 값을 변화 - `순서4`) { 
	실행문 - `순서3`
}
```

#### [Array] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

```javascript
var myfriend = ["크롱", "jk", "honux", "honux", "코나", "브라이언"];
```

- Methods
	- [push()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
	- [indexOf()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
	- [push()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
	- [pop()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
	- [slice()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
	- [splice()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
	- [concat()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)