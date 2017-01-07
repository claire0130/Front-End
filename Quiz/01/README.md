###### codesquad

## [Array] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- 여러 값을 하나의 이름으로 묶을 때 사용
- `원소(element)` 배열 안에 있는 하나의 값. 태그를 뜻하는 엘리먼트와 영어 단어가 같다.
- 어떤 값이든 배열의 원소가 될 수 있다. 즉, 배열 안에 배열도 품을 수 있다.
- `new Array(a, b, c)`보다는 리터럴 방식인 `[a, b, c]`가 많이 사용된다.
- 배열의 원소에 접근할 때는 `[숫자]`를 사용하는데 이 때 대괄호 안의 숫자를 `색인 번호(index)`라고 한다.
색인 번호는 `0`부터 시작한다.

##### [length] (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length)<br>
: 배열의 크기, 다시 말해 배열에 있는 원소의 갯수를 반환한다.

```javascript
var arr = ['a', 'b', 'c'];
console.log( arr.length ); // 배열에는 원소가 3개 있으므로 arr.length === 3
```

##### [push()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)<br>
: 배열에 새로운 원소를 추가한다. 인수를 1개 이상 전달할 수 있다.

```javascript
var arr = ['a', 'b'];
arr.push('c');
console.log(arr); // ['a', 'b', 'c']
arr.push('d', 'e');
console.log(arr); // ['a', 'b', 'c', 'd', 'e']
```

##### [join()] ()
: 배열의 원소를 모두 합쳐서 하나의 문자열을 만든다. 문자열 인수를 전달하면 문자열 인수를 원소 사이에 추가한다. 아무런 인수도 전달하지 않으면 쉼표(,)가 사용된다.

```javascript
var arr = ['a', 'b', 'c'];
var str1 = arr.join(); // str1의 값은 'a,b,c'
var str2 = arr.join(''); // str2의 값은 'abc'
var str3 = arr.join('|'); // str3의 값은 'a|b|c'
```
##### [pop()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)<br>
: 배열에서 마지막 요소를 제거하고 그 요소를 반환 <br>

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

var popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin' ]
console.log(popped); // 'sturgeon'
```

##### [indexOf()] (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)<br>
: 배열에서 지정된 요소를 찾을 수있는 `첫 번째 인덱스를 반환`하고 존재하지 않으면 `-1`을 반환한다.<br>

```javascript
var a = [2, 9, 9];
a.indexOf(2); // 0
a.indexOf(7); // -1

if (a.indexOf(7) === -1) {
  // 요소가 배열에 존재하지 않습니다.
}
```

##### [slice()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)<br>
: 어떤 배열의 일부에 대한 얇은 복사본 배열을 반환한다.

```JavaScript
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

##### [splice()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)<br>
: 배열의 내용을 추가/제거하는 데 사용한다.

```JavaScript
var fruits = ['Apple', 'Banana', 'Orange', 'Strawberry'];
var splice = fruits.splice(1, 2);
console.log(splice); // ['Banana', 'Orange']
console.log(fruits); // ['Apple', 'Strawberry']
```

##### [concat()] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)<br>
: 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.

```JavaScript
var alpha = ['a', 'b', 'c'], numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); // 결과: ['a', 'b', 'c', 1, 2, 3]
```
