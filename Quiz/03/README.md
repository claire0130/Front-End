###### codesquad

### Event 객체
- [event.target] (https://developer.mozilla.org/ko/docs/Web/API/Event/target) <br>
: 이벤트가 발생한 엘리먼트
- [event.currentTarget] (https://developer.mozilla.org/ko/docs/Web/API/Event/currentTarget) <br>
: 이벤트가 발생한 현재 DOM 엘리먼트. 일반적으로 `this`와 같다.
- [event.preventDefault()] (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) <br>
: 기본 동작의 실행을 취소한다.
- [event.stopPropagation()] (https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) <br>
: 이벤트의 전파를 중단한다.
- [jQuery API - event.delegateTarget] (https://api.jquery.com/event.delegateTarget/) <br>
: `이벤트 위임(event delegation)` 이벤트가 전파된다는 성질을 사용해 자식 요소가 자주 바뀌거나 너무 많을 경우 `공통된 부모 요소`에 이벤트를 걸어두고 처리하는 방식. 


### event.target VS event.currentTarget

```html
  <div class="container">
    container
    <div class="parent">
      parent
      <div class="child">
        child
        <div class="grand-child">grand-child</div>
      </div>
    </div>
  </div>
```

```javascript
    var divEles = document.querySelectorAll('div');
    var eventObj = function(event) {
        console.log('this: ', this);
        console.log('event.target:', event.target);
        console.log('event.currentTarget:', event.currentTarget);
    };

    divEles.forEach(function(div, idx) {
        div.addEventListener('click', eventObj, true);
    });

```

### addEventListener() 
- `addEventListener`은 이벤트를 등록하는 가장 권장되는 방식이며, 이 방식을 이용하면 여러개의 이벤트 핸들러를 등록할 수 있다.
- type : 이벤트 타입 
- handler : function
- false : capturing(true) vs bubbling(false)
    - `capturing(true)` 부모노드에서 자식노드로 이벤트가 전파 <br>
    - `bubbling(false)` 자식노드부터 이벤트가 발생하여 부모로 이벤트가 전파 <br>


```javascript
.addEventListener(‘type’, handler, false);
```

### attachEvent()
- IE8이하는 호환이 되지 않는다. 호환되지 않는 IE에서는 `attachEvent 메소드`를 사용  

``` html
<input type="button" id="target" value="button">
```

``` javascript
var t = document.querySelector('target');

if( t.addEventListener ){
    t.addEventListener('click', function(event){
        alert('Hello world, '+event.target.value);
    }); 
} else if( t.attachEvent ){
    t.attachEvent('onclick', function(event){
        alert('Hello world, '+event.target.value);
    });
}
```