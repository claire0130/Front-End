###### codesquad

## DAY 20
- unit test

####  1.code test
자바스크립트 코드가 잘 동작되는지를 테스트 하는 것.

####  2.unit test
자바스크립트 최소단위(함수)를 테스트 하는 것.

사람이 직접 함수를 호출하는 것이 아니고, 프로그램을 통해서 자동으로 동작을 확인.

#### 3.unit test 구현방법
service.js 라는 파일을 만들었을때, 그 안에 구현한 함수를 프로그램을 통해 실행하고, 
그 결과가 예상과 맞는지를 확인. 

예를들어 아래 함수는 'result ok' 라는 결과가 나와야 함.

```javascript
function print(arg) {
	return 'result' + arg;
}

print('ok'); //'result ok' 가 나와야 print함수가 잘 동작한다고 판단.
print('no!'); //'result ok' 가 나오면 안되고, 다른 결과가 나와야 정상이라고 판단.
```

#### 4. javascript unit test 라이브러리
Qunit, Mocha 와 같은 테스트 프레임워크를 사용해서 테스트 코드를 구현.

추가적으로 chai, shouldjs와 같은 assertion(단언문) 라이브러리가 추가로 필요로 함. 이녀석들을 통해서 테스트코드를 쉽게 구현할 수가 있음.
```javascript
//assertion에는 여러가지 함수가 있는데, equal의 경우에는 '기대값' 과 '실제값' 이 같은지를 테스트 해준다.
assert.equal(true, false);
```

: http://chaijs.com/api/assert/

#### 5. Mocha, chai 설치

```shell
	mkdir mytest
	npm init
	npm install mocha --save-dev
	npm install chai --save-dev
	cd ..
	mkdir test
	vi main.test.html
```

#### 6.  main.test.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mocha Tests</title>
    <link rel="stylesheet" href="../node_modules/mocha/mocha.css">
  </head>
  <body>
    <div id="mocha"></div>
    <script src="../node_modules/mocha/mocha.js"></script>
    <script src="../node_modules/chai/chai.js"></script>
    <script>mocha.setup('bdd')</script>

    <script>
      mocha.run();
    </script>
  </body>
</html>
```

#### 7. main.test.js 구현하기
```javascript
var assert = chai.assert;

describe('equal', function() {
  it('should not equal when true compare to false', function() {
    assert.equal(true, false);
  });
})
```

브라우저에서 확인 : /test/main.test.html

#### 8. array 를 테스트하는 함수 하나 만들어보기
```javascript
describe('array test', function() {
  it('equal dummy test', function() {
  	var arr = [];
  	arr.push(1);
    assert.equal(arr.length, 1);
  });
})
```

#### 9. 실제 서비스에서 사용한 함수를 하나 테스트해보자!
아래의 예제처럼..
```javascript
//service code
function checkType(value) {
	var type = null;
	switch (typeof value) {
		case 'string' :
			type = 'string';
			break;
		default:
			type = 'monster';
			break;
	}
	return type;
}

//test code
describe('type check', function() {
	it('should return string when the value is string', function() {
		var str = "dummy string";
		var result = checkType(str);
		assert.equal(result, 'string');
	})
})

```

#### 10. async test
아래 코드를 어떻게 테스트 해야할까?

```javascript
function xhr(url, cb) {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', function() {
			cb(JSON.parse(this.responseText));
	});
	xhr.open('get', url);
	xhr.send();
}
```

대략 이렇게 테스트가 가능할 거 같다..
```javascript
describe('async ajax test', function(){
	it('should get "code-squad" name when receive ajax response', function() {
		var url = 'https://api.github.com/repos/code-squad/homepage';
		var fn = function(result) {
				var name = result.owner.login;
				assert.equal(name, 'code-squad111111'); //code-squad
				console.log(1);
		}
		xhr(url,fn);
	})
})

describe('another test', function(){
	it('should equal..', function() {
		assert.equal(true,true);
		console.log(2);
	});
});
```

#### 11. done값을 설정하면 비동기가 동기적으로 동작하게 컨트롤이 되고 순차적인 테스트가 가능하다.
아래에서 'done' 부분을 유심히 보자.

```javascript
describe('async ajax test', function(){
	it('should get "code-squad" name when receive ajax response', function(done) {
		var url = 'https://api.github.com/repos/code-squad/homepage';
		var fn = function(result) {
				var name = result.owner.login;
				assert.equal(name, 'code-squad');
				console.log(1);
				done();
		}
		xhr(url,fn);
	})
})


describe('equal dummy', function(){
	it('should equal', function() {
		assert.equal(true,true);
		console.log(2);
	});
});
```

#### #참고. 더 자세한 내용
- https://mochajs.org/
- https://www.sitepoint.com/unit-test-javascript-mocha-chai/