###### codesquad

## DAY 11
- Code Review
- [To Do List] 삭제 버튼 추가

### Code Review
- 이벤트 객체를 사용해라
- 코드 작성시 정확한 의도를 나타내라.
- 변수에 할당해서 캐시를 줄여라 `DOM Cache`
- `함수의 범용성` 범용성 있게 만들어라. 함수의 인자를 통해 옵션이다.
- DOM을 동적으로 생성하는 것 보다 element를 마크업을 해서 CSS style 설정하는 것이 효율적이다.

#### [To Do List] 삭제 버튼 추가
- `이벤트 위임(event delegation)` 이벤트가 전파된다는 성질을 사용해 자식 요소가 자주 바뀌거나 너무 많을 경우 공통된 부모 요소에 이벤트를 걸어두고 처리하는 방식.

```html
  <section class="basket">
    <h3>내 할일 목록</h3>
    <ol>
      <li><div class="basket-text">씻기</div> <a href="#" class="button-close">닫기</a></li>
      <li><div class="basket-text">공부하기</div> <a href="#" class="button-close">닫기</a></li>
      <li><div class="basket-text">게임한판하기</div> <a href="#" class="button-close">닫기</a></li>
      <li><div class="basket-text">html공부하기</div> <a href="#" class="button-close">닫기</a></li>
      <li><div class="basket-text">자바스크립트 책 사기</div> <a href="#" class="button-close">닫기</a></li>
    </ol>
  </section>
```

```javascript
var ol = document.querySelector("ol");
ol.addEventListener("click", deleteButton);

function deleteButton(event) {
    var eTarget = event.target.tagName.toLowerCase();
    if( eTarget !== "a" ) {
    	return;
    }
    var liTarget = event.target.parentNode;
        liTarget.remove();
    console.log(liTarget);
}
```

#### 참고 자료
- [holy grail](https://en.wikipedia.org/wiki/Holy_Grail_(web_design))
- [Holy Grail Layout](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)
- [5 Ways to Level-Up Your Backbone.js Code](https://blog.engineyard.com/2015/5-ways-to-level-up-your-backbone-code)
- [웹 접근성](http://nuli.navercorp.com/sharing/a11y)
- [classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)
