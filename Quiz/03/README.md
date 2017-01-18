###### codesquad

### Event
### target vs currentTarget
- `capturing(true)` 부모노드에서 자식노드로 이벤트가 전파
- `bubbling(false)` 자식노드부터 이벤트가 발생하여 부모로 이벤트가 전파

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


```javascript
.addEventListener(‘type’, handler, false)

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