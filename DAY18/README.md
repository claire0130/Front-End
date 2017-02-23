###### codesquad

## DAY 18
- Call by Value (원시데이터, 복사)
- Call by Reference (복합데이터, 참조)

## Call by value ( = 원시 데이터 유형(primitive type))
- 값에 의한 호출, `값이 그대로 복사`되는 자료형
- 함수를 호출하면 매개변수를 함수 내부로 전달
- 이 때 `변수의 값을 복사`해서 전달하는 방식
- 대부분의 언어에서 기본 데이터 타입을 전달하면 발생

### `Number` call by value 호출

``` 
var foo = function(num) {
	num++;
	console.log(num); // 6
}

var a = 5;
foo(a);
console.log(a); // 5
```

### `String` call by value 호출

```
var foo = function(str) {
	// str +='world';
	str = str.concat('world');
	console.log(str); // helloworld
}

var a = 'hello';
foo(a);
console.log(a); // hello
```

### `b=a;` 구문에서도 값 복사

```
var a = 5;
var b = a; // 참조
bar a = a + 5;
console.log(a); // 10
console.log(b); // 5
```

---

## Call by reference ( = 복합 데이터 유형(reference type))
- 참조에 의한 호출, 값의 주소(메모리에서 값이 있는 곳을 가리키는 값)만 복사되는 자료형.
- 함수 호출시 매개별수가 참조일 경우 참조를 전달
- 원본 객체애 변경겂이 반영됨

### 참조(reference)란? 
- 실제 변수가 아니라 간접적으로 변수에 접근하는 방법
- `javascrpt` 기본 타입이 아닌 객체를 생성하면 참조 변수가 만들어짐
	- array, objcet,...

- `Swift`
	- class : 참조 생성 (js의 object)
	- struct : 기본은 값 복사하지만 참조도 사용 가능 
	- 배열, 딕셔너리, 스트링 모두 sturct

### array, object는 `Call by reference`로 호출

```
var a = {'score' : 0};
var b = a;
a.score = 60;
console.log(a); // 60
console.log(b); // 60
```

```
function accel(car) {
	car.speed +=50;
}

var c = {'name' : 'bmw', 'speed' : 0};
accel(c);
console.log(c); // {'name' : 'bmw', 'speed' : 50}
```

```
function foo(arr) {
	arr.push(255);
}

var arr = [1,2,3];
foo(arr);
console.log(arr); 1,2,3,255
