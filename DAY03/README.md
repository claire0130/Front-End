###### codesquad

## DAY 03
- 함수 표현식 vs 함수 선언식
- 함수를 함수에 전달해 주기
- 인자값 체크 헬퍼 함수
- 함수를 반환하는 함수 `Closures`
- 유효범위 체인 `Scope Chain`
- 즉시실행함수 `IIFE`

#### 함수 표현식 vs 함수 선언식
- `함수선언식`과 `함수표현식`은 함수호출는 크게 다르지 않다.
- `함수표현식` `호이스팅(hoisting)` 현상 발생이 되어 오류가 발생이 될 수 있다.

```javascript
// 함수 선언식
function 함수이름 { ... }

/// 함수 표현식
var 함수이름 = function { ... )
```

#### 함수를 함수에 전달해 주기
- 함수의 인자값으로 `함수`도 들어갈 수 있다 (함수를 가리키는 변수)

```javascript
function calculate(num1, num2, type) {
	// [검증] arguments 갯수
	var argLen = arguments.length;
	if( argLen !== 3) {
		console.log('매개변수 3개를 넣어야 합니다.');
		return;
	}

	// [검증] 매개변수 type
	if ( typeof num1 !== 'number' && typeof num2 !== 'number' ) {
		console.log('매개변수가 숫자열이어야 합니다.');
		return;
	}
	if ( typeof type !== 'function' ) {
		console.log('3번째 매개변수가 함수열이어야 합니다.');
		return;
	}

	if ( type === sum ) {
		return sum(num1, num2);
	}

	if ( type === minus ) {
		return minus(num1, num2);
	}

	if ( type === multiply ) {
		return multiply(num1, num2);
	}
}

var sum = function(num1, num2) {
	return num1 + num2;
};

var minus = function(num1, num2) {
	return num1 - num2;
};

var multiply = function(num1, num2) {
	return num1 * num2;
};

var sumResult = calculate(10, 20, sum);
var minusResult = calculate(10, 20, minus);
var minusResultResult = calculate(10, 20, multiply);
console.log('sum', sumResult);
console.log('minus', minusResult);
console.log('multiply', minusResultResult);
```

#### type 체크 헬퍼함수

```javascript
// type 체크
function checkargs(arg1, arg2, type) {
	if ( typeof arg1 !== type || typeof arg2 !== type ) {
		return false;
	}
	return true;
}

function plus(arg1, arg2) {
	if ( checkargs( arg1, arg2, 'number') ) {
		// console.log('타입이 맞습니다');
		return true;
	}
	console.log('타입이 틀린 거 같아요');
}

plus(1, '2'); // 타입이 틀린 거 같아요
```

#### 함수를 반환하는 함수 - [Closures] (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
- 함수를 반환하는 값을 변수에 참조하여 호출.

```javascript

function getAdd( num1, num2 ) {
	var result = num1 + num2;
	return function() {
		console.log(result);
	}
}

var a = getAdd(1, 2);
console.log(typeof a); // function
a();
```

#### 변수의 유효범위 : 변수의 접근은 어떻게 될까?

```javascript
var globalName = 'Kim';
function setName( lastName ) {
	var firstName = 'Youn';
	console.log( 'my mane is ', firstName + lastName );
}

console.log(globalName); //Kim
console.log(firstName); // firstName is not defined
```

#### 유효범위 체인(Scope Chain)

```javascript
function setNames(lastName) {
	function printName() {
		var firstName = 'youn';
		console.log( 'my mane is ', firstName + lastName );
	}
	printName();
	console.log(firstName); // undefined
}
```

#### IIFE(즉시실행함수)
- [Immediately Invoked Function Expression] (http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
- `캡슐화`가 가능하여 전역변수와 충돌을 피할 수 있다

```javascript
(function() {
	var a = 3;
	function getA() {
		return a;
	}
	console.log(getA()); // 3
}());

console.log(getA()); // 접근이 불가능
```

#### [Debugging JavaScript] (https://developer.chrome.com/devtools#debugging-javascript)
- breakpoint <br>
: `call stack` 이란? 호출 관계를 보여준다
