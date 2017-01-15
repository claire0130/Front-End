###### codesquad

### Event
### addEventListener() 
- `addEventListener`은 이벤트를 등록하는 가장 권장되는 방식이며, 이 방식을 이용하면 여러개의 이벤트 핸들러를 등록할 수 있다.

```
.addEventListener(‘type’, handler, false)

// type 이벤트 타입
// handler function
// capturing(true), bubbling(false)
```

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