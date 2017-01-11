###### codesquad

## DAY 07
- DOM(Document Object Mode) : 문서 객체 모델

### [DOM] (https://developer.mozilla.org/ko/docs/DOM) 
- 문서의 구조적 형태를 제공하므로 `자바스크립트(JavaScript)`와 같은 스크립트 언어를 사용하여 `문서 내용`과 `시각적 표현`을 수정할 수 있다
- 브라우저 HTML을 계층을 갖춘 Tree 형태로 정보를 보관한다. 
- `DOM API` 함수의 묶음
- 구조화된 정보가 있으면 빠르게 구현
- DOM에 접근하는 방법 (DOM을 조작한다)

#### 추상화된 브라우저 흐름

> 브라우저 렌더링은 오픈소스가 아니다. 내부 오픈하지 않는다
> `렌더링(rendering)`  요청 받은 내용을 브라우저 화면에 표시하는 일

[브라우저는 어떻게 동작하는가?] (http://d2.naver.com/helloworld/59361)

#### 자바스크립트 엔진 해석
HTML 문서를 해석하는 엔진은 Javascript 코드를 만나면 Javasvript 해석기에게 일을 맡기고 쉰다.(일을 하지 않는다) 가능하다면 Javascript 코드는 UI가 완성되는데 시간을 지체하지 않도록 하는 것이 중요하다. 권장하는 스크립트 코드의 위치는 `</body>` 바로 앞이다.

#### [nodeType] (https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)

Constant | Value
------| ---------
ELEMENT_NODE(요소 노드) | 1
TEXT_NODE(텍스트 노드) | 3
COMMENT_NODE(주석 노드) | 8
ATTRIBUTE_NODE(속성 노드) | 2

#### DOM API
- `removeChild()`
- `appendChild()`
- `insertBefore()`
- `cloneNode()` 
- `replaceChild()` 

#### DOM Traversing
- [선택] 현재 선택한 대상 	`element`
- [탐색] 부모 노드 		`element.parentNode`
- [탐색] 첫번째 자식노드 	`element.firstChild`
- [탐색] 마지막 자식노드 	`element.lastChild`
- [탐색] 이전 형제 노드 	`element.previousSibling`
- [탐색] 다음 형제 노드 	`element.nextSibling`
- [탐색] 자식 노드들 		`element.childNodes` 