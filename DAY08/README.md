###### codesquad

## DAY 08
- function
- CSS (Cascading Style Sheets)

### function
- 함수가 데이터 변경되서 함수가 바뀌면 안된다.
- 로직에서 데이터가 있으면 안된다.
- 코드를 문장으로 이해하는 걸로 만들어야 한다.
- `디자인(설계, 글코딩)` 을 먼저 하라!
- `빌드(배포)`할 때 주석, 공백을 지울 수 있다.

```
document.querySelector("ul").insertBefore(cln, list.childNodes[5]);
```
>  `document.querySelector("ul")` for문으로 돌렸을때 성능의 이슈가 발생
> 변수 처리 속도가 빠르다. (dom을 캐시하지 않았을때 성능 이슈 발생)

### [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- 종속형 시트 또는 캐스케이딩 스타일 시트(Cascading Style Sheets, CSS)는 마크업 언어가 실제 표시되는 방법을 기술하는 언어.
- CSS는 여러가지 스타일정보를 기반으로 최종적으로 `경쟁`에 의해서 적절한 스타일이 반영 된다.
- CSS 속성은 하위 태그에 상속된다.

#### style을 HTML페이지의 페이지에 적용하는 세 가지 방법
`inline` > `internal` > `external`

#### em(equal M)
- 기준값에 대비 상대적인 크기를 배수로 지정
- 알파벳 대문자 `M`이 가장 큰 폰트 크기
- 글씨 크기를 세로축에 대한 길이를 `1em` (대문자 기준)
- 웹브라우저 기본 폰트는 `16px`이며 상대크기를 `1em` `(1em = 16px)`
- em을 쓰기 어려운 이유
	- `부모-자식-(자식안에)자식...` 단계가 걸칠 수록(상속) 계산이 어려워지면 예측하기 어렵다. <br>
	이를 단점을 보완하는 것이 rem. <br>

	> `rem`(Root equal M): `html` 기준으로 단위 처리

#### [CSS Selector](http://www.w3schools.com/cssref/css_selectors.asp)
- element에 style을 지정하기 위해서 3가지 기본 선택자를 사용할 수 있음
	- `tag`, `id`, `class`, `HTML 태그 속성` <br>


##### nth-child(n), nth-of-type(n)

```html
<div>
    <h2>제목</h2>
    <p>문단 1</p>
    <p>문단 2</p>
    <p>문단 3</p>
    <p>문단 4</p>
</div>
```

```css
p:nth-child(2) { color: blue; }
p:nth-of-child(2) { color: red; }
```

#### [Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- HTML의 element는 사각형 박스의 형태를 가지며, 다음과 같은 속성을 가진다.

[[https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/1/103.gif]]

#### content
- 내용

#### padding
- 내부여백 영역으로 보더 안쪽. (content와 border 사이)
- 색 표현이 가능하다.
- 양수값, 0만 적용이 가능하다.

#### border
- 테두리 영역
- top, bottom, left, right 각기 다른색 적용 가능.
- 각 방향마다 색상을 다르게 주면 경계면이 대각선으로 생성이 된다. 삼각형, 별 등 다양항 그림을 그릴 수 있다.
- [관련글:border 속성으로 그림 그리기](http://nuli.navercorp.com/sharing/blog/post/1132695)

#### margin
- 외부여백 영역으로 보더 바깥쪽. (객체와 객체 사이)
- 투명하며 배경색이 적용되지 않는다. (눈에 보이지 않는다)
- 음수값 적용이 가능하다. (양수, 0 가능)
- 기본값 0

#### Block Element
- 가로(넓이)의 기준은 부모, 세로(폭)의 기준은 자식
- 상, 하, 좌, 우 공간을 가진다.

####  Block box 특징
- 문서의 폭이 있을 때, 가로폭이 문서의 폭만큼 적용. 높이는 자신이 가지고 있는 콘텐츠 만큼 가진다. 콘텐츠가 없으면 '0'.
- 화면의 폭을 줄이면 자동을 줄여든다.

#### Inline Element
- 자기가 가진 콘텐츠 만큼만 영역을 가진다.
- 좌, 우 공간 만을 가진다.

##### Inline box 특징
- 화면의 폭을 줄이면 박스가 깨진 형태의 모양이 변경된다.

#### margin collasing
- 마진이 상/하 방향으로 접혀지는 현상. (좌/우는 겹치지 않는다.)
- 마진 상/하 중 큰 값이 적용이 된다.

> Margin collapsing 예.
> - 세로로 2개 이상 블록요소 마진이 만났을 때, 마진이 겹쳐지는 현상
> - 부모 요소 안에 자식 요소의 경우, 부모에게 패딩/보더 값이 없을 때 발생
