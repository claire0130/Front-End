###### codesquad

## DAY 10
- Code Review

### [Code Review] Javascript의 성능 향상을 위한 고려 사항
- `sort()` DOM을 다시 그린다. 
- `DOM`을 탐색하지 말고 배열로 만들어서 처리. 
- `DOM` 조작이 빈번하게 일어나면 생각해 봐야 한다!!!
- 함수의 인자를 정확게 써라.
- 코드에 의도가 있어야 한다.
- 함수를 나눠는 것이 좋은 것인가?
- 설계시 흐름도가 필요
- 조건 중 아닌 경우 먼저 실행하라
- 객체를 이용하여 `네임스페이스` 활용
- `IIFE패턴`으로 전역변수를 오염을 시키지 않는다. `캡슐화` 필요!

#### 시간 체크
- [Console.time()] (https://developer.mozilla.org/ko/docs/Web/API/Console/time)
- [Console.timeEnd()] (https://developer.mozilla.org/en-US/docs/Web/API/Console/timeEnd)

#### [Element.insertAdjacentHTML()] (https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

```
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
```

#### 흐름도
- task
: 개별 할일 (Test Case - Quality Assurance[QA]) <br>

- 단위(unit) 테스트 
: ex. 버튼 클릭시 html코드에 append 하도록 한다. <br>

- 커버리지 
: test case가 `커버리지`가 높으나 낮으나? 높을 수록 좋다. <br>

#### 조건 중 아닌 경우 먼저 실행하라

```javascript
function addList(actionType, todoORnumber) {
    if(duplicateCheck(actionType, todoORnumber)){
        // code...
    }
}

function addList(actionType, todoORnumber) {
    if( !duplicateCheck(actionType, todoORnumber )){  
    	return; 
    }
    	// code...
}

```

#### 객체를 이용하여 `네임스페이스` 활용

```javascript
var ERROR_MSG = {
	'TODO' : {
		'EXIST_TODO' : '이미 등록한 할 일 입니다.'
	}
}

for(var i = 0; i < tasksLength; i++){
   if(taskLists[i].innerHTML === task){
        alertMessage(ERROR_MSG.TODO.EXIST_TODO);
        return false;
    }
}
````

```javascript

var addHandler = {
  'addText' = function() {
    // do something
  },
  'addNode' = function() {
    // do something
  },
  'addSomething' = function() {
    // do something
  },
}

button.addEventListener('click', addHandler.addText);

```

#### `IIFE패턴`으로 `전역변수를 오염`을 시키지 않는다. `캡슐화` 필요!

```javascript
(function() {
	...
})();
```