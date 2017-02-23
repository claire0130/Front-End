###### codesquad

## DAY 21
- this

### this란?
- JavaScript의 `this`는 런타임 때, 실행할 때 this가 가리킬 때 변경이 된다
- 상황에 따라서 `this`가 달라지기 때문에 디버깅을 통해 알아 내야 한다

### 대표적인 상황 `this`
#### function

```js
function code() {
	return this;
}
code(); //window
```

> window : 최상위 오브젝트로 전역객체이다.


```js
function code() {
  a = 'this is a';
  console.log(a);
}
code(); // this is a
console.log(window.a); // this is a
console.log(this.a); // this is a
```

#### function - constructor
- 객체지향적인 언어에서는 클래스를 만들고 클래스를 `new키워드`로 부를 때는 인스턴스 즉 `객체를 반환`한다. JavaScript도 유사하게 동작한다
- `new`가 객체를 만들어서 반환해 준다 

```js
function Code() {
   this.name = 'this is name';
}

new Code(); // Code {name: "this is name"}
```

#### object literal

```js
var obj = {
    code : function() {
        return this; // 여기의 `this`는 `obj`를 가리킨다
    }
}

obj.code() //object (obj)
```

```js
var obj = {
	code : function() {
		this.printCode(); 
	},
	printCode : function() {
		console.log('printCode!');
	}
}

obj.code(); // pprintCode!
```

#### async(비동기)
- `this`가 헷갈리는 큰 이유는 `async 로직`때문이다. (비동기 상황에 문제가 된다)
- `obj.code()` 실행하면 `code함수`가 실행이 되고 그 안에 있는 `setTimeout함수`가 1초뒤에 실행
`setTimeout함수`는 `code함수`가 실행 될때 실행되어 보이지만 `setTimeout 콜백함수`로써 `EventQueue`라는 공간에 보관되어 있다가 임의로 시작된다. 즉, `obj객체`와 `code함수`와 전혀 상관없이 나중에 실행되는 함수

```js
var obj = {
	code : function() {
		setTimeout(function() {
          this.printCode();
        },1000);
	},
	printCode : function() {
		console.log('hello obj!!!');
	}
}

obj.code(); // 1초뒤에 `Uncaught TypeError: this.printCode is not a function`
```

#### bind 메서드를 활용해 해결가능
- `setTimeout안에 있는 함수`는 다른 곳으로 빠져 나와 실행이 된다. 
- `obj객체`, `code함수`와 전혀 상관없는 `EventQueue`에서 실행되는 함수이기 때문에 여기에 `this`는 실행 컨텍스트인 `obj객체`를 벗어나기 때문
-  `this`를 내가 원하는 실행 콘텍스트로 지정하려면 `bind`매소드를 사용하면 `this`를 지정할 수 있다 => `bind(this)` 

```js
	(function() {
		this.printCode(); 
	},1000);
```

```js
var obj = {
	code : function() {
		setTimeout(function() {
          this.printCode();
        }.bind(this),1000); // bind로 지정한 `this`는 `obj객체`를 가리킨다
	},
	printCode : function() {
		console.log('hello obj!!!');
	}
}

obj.code(); // 1초뒤에 `hello obj!!!` 실행

```

#### debugging
- debugger로 그때그때의 this를 확인하는 것이 this를 이해하고 문제를 해결하는 좋은 방법이다

```js
var obj = {
	code : function() {
		setTimeout(function() {
			debugger;
			this.printCode(); // this : Window
		},1000);
	},
	printCode : function() {
		console.log('hello obj!!!');
	}
}
```