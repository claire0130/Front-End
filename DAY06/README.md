###### codesquad

## DAY 06
- Array Methods
	- [.forEach()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
	- [.map()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
	- [.filter()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- 원시 데이터 VS 복합 데이터

### .forEach() VS .map() VS .filter()

##### * 차이점
  -  | .forEach() | .map() | .filter()
------| ---------- | ------ | ---------
반환 | 반환값이 없다 | 반환값이 있다(새로운 배열) |  반환값이 있다(새로운 배열: true를 반환, 그렇지 않으면 false)

##### * 공통점 <br>
- 매개변수가 callback 이고 callback을 실행할 때 this로서 사용하는 값.
- 매개변수로 들어간 callback 함수의 매개변수는 item(element), index, array 순서로 들어간다.  
- `IE하위버전(IE 6, 7, 8)`에 쓸 수 없다. `ECMASCript 5 Edition` <br>
ㄴ> 크로스브라우징 이슈 발생. 하위브라우저 `polyfill` 사용(작은 코드)

> `for` > `.forEach()` : 미묘한 속도 차이가 있다. `for`가 조금 빠르다. <br>
> `jQuery` 사용하는 것보다 `polyfill`를 사용하는것이 좋다.

### 원시 데이터 VS 복합 데이터
#### 원시 데이터
: `값이 그대로 복사`되는 자료형 <br>
- 숫자 (Number) : 2016
- 문자 (String) : '원시 데이터', "Keep Calm and Keep Coding"
- 불리언 (Boolean, 논리) : true, falae
- undefined
- null

#### 복합 데이터
: `값의 주소`(메모리에서 값이 있는 곳을 가리키는 값)만 `복사`되는 자료형  <br>
- 배열 (Array)
- 함수 (Function)
- 객체 (Object)

> `배열`은 복합 데이터형이라 `값의 주소`(메모리에서 값이 있는 곳을 가리키는 값) 참조. 함수에서 값을 retrue 할 필요가 없다
