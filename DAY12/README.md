###### codesquad

- 포트폴리오 작업!

## DAY 11
- Ajax

### Ajax(Asynchronous JavaScript And XML)
- 전통적인 웹은 요청사항이 생기면 화면전환(깜빡임)이 생기지만 `Ajax 통신`을 이용하면 부분 제어가 가능하다.
- 쾌적한 UX를 제공해 줄수 있다.

#### Ajax(비동기 통신)를 수행할 객체 생성 `XMLHttpRequest()` 
- 응답값이 비동기. 비동기로 데이터를 보내느 방법.
- `MLHttpRequest()` : 함수가 객체를 반환하게 할 수 있다. 그 반환값이 객체가 가능하게 해 준다
- [Getting Started] (https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
- [Using XMLHttpRequest] (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

##### 서버 실행
```
$ python -m SimleHTTPServer
```

```javascript
var oReq = new XMLHttpRequest();

function reqListener (event) {
  console.log('this.responseText: ', this.responseText);
}

oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://api.github.com/repos/code-squad/web-white-common");
oReq.send();
``` 

#### Ajax 질문
- 콜백함수이란?
: 나중에 실행 되는 함수를 `콜백함수`라고 부른다. (함수의 인자로 받는 함수)
  - ex.) setTimeout(), addEventListener(), forEach(), fillter() <br>
- Ajax가 라이브러리인가? 
: `XMLHttpRequest()` 객체를 이용해서 사용한다.<br>
: Asynchronous JavaScript And XML. 약자이며 `XML`는 지금 잘 사용하지 않는다. <br>
: 기술을 설명하는 거다. 라이브러리는 아니다. 개념만 있다. <br>
: 원래 웹은 새로고침이 되어 서버에 응답값을 받아서 화면이 다시 그려진다. <br>
  이걸 보완하기 위해 화면을 그대로 두고 (새로고침 하지 않고, URL이 안 바뀐다.) 데이터를 가져오게 하자! 보완된 것이 `XMLHttpRequest` 객체를 만들었다<br>
: 필요한 데이터만 요청해야 한다. <br>
: 데이터 약속(= 데이터 포맷) : 예전에는 `XML` 사용했지만 지금은 `JSON` 사용<br>
  - xml는 용량이 크고 돔 찾기 어렵다 <br>
  - json는 용량이 작고 찾기가 용이하고 직관적이다. <br>
: `json` object형태로 만든 데이터. (object와 다르다)<br>
- [jQuery.ajax() 라이브러리] (http://api.jquery.com/jquery.ajax/)

- 언제 사용하는 건가? <br>
  - ex.) Tab UI <br>
  : 클릭한 후 데이터를 가져오는 것이 효율적. <br>
  : 사용자의 서비스를 사용하는거. 어떻게 사용하는가 UX에 따라서 기술선택. <br>
  : 성능 비교해야 한다. dom에 대한 고민. 언제 가져올까? 나중에(lazy Loading)<br>
  ==> 화면에 바로 보이지 않는 콘텐츠는 Lazy Loading(스크롤 등으로 내렸을 때 보이게함).

#### 화면에 배포하는 방법
- 클라이언트에서 `innerHTML` 를 통해 뷰에 배포 
- 서버에서 html를 만들어서 뷰에 배포 

#### JSON(JavaScript Object Notation)
- 다른 언어간에 객체를 전달하는 포맷으로 많이 사용
  - `parse()` JSON 포맷을 object로 변환 <br>
  - `stringify` JSON 포맷의 문자열로 변환 <br>