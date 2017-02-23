###### codesquad

## DAY 12
- Code Review
- 서버 설치
- DOMContentLoaded
- ES6
- Template

### Code Review
#### claire 코드 리뷰 - ajax 코드
- IIFE 패턴은 `zero global`이라고 부르며 전역변수를 완전히 차단이 된다
- `xhr객체`는 ajax호출 될때 실행되는 것이 좋다. 맨위에 선언하지 말고.
- 현재는 사용한 리터럴 방식으로 사용하고 나중에 prototype 방식으로 사용하라.

#### 다른사람 코드 리뷰
- `for in` 최상의 array에 까지 찾는다. 객체에서만 사용하라
- `Array`에선 forEach(), filler()... 메소드를 사용하라.
- [CSS] `rem`단위를 써라. 
- [CSS] color를 16진법으로 써라. 
- [CSS] selector를 너무 자세히 쓰지 말고 적절하게 써라. 
- [CSS] layout flex
- [justify-content] (https://developer.mozilla.org/ko/docs/Web/CSS/justify-content)


### [서버 설치: live-server] (https://www.npmjs.com/package/live-server)
```
$ npm install live-server

```

### 서버 실행 
```
$ live-server
```

### DOMContentLoaded
- `DOM Tree`를 완성 다음 후 함수를 실행하게 하라. 명시적으로 표기. `굿패턴!`
- `onload 이벤트`보다 먼저 발생한다. 빠른 실행속도가 필요할때 적합하다.
- IE8이하에서는 지원하지 않는다.
- 변수, 함수 선언만 한다 
- 실행 할 시작점을 넣어주면 좋다.

```javascrpt
window.addEventListener('DOMContentLoaded', function() {
  init();
  registrEvents();
});
```

### [ES6 interpolation] (https://developers.google.com/web/updates/2015/01/ES6-Template-Strings)
- [백틱(Backtick)] (http://hacks.mozilla.or.kr/2015/08/es6-in-depth-template-strings-2/) <br>
: ES6는 템플릿 문자열(template string)이라고 불리는 새로운 종류의 문자열 표기법을 도입. 템플릿 문자열은 일반 문자열과 비슷해 보이지만, '나 " 같은 통상적인 따옴표 문자 대신 백틱(backtick) 문자 `를 사용. 가장 간단하게 사용할 경우, 템플릿 문자열은 정말 일반 문자열과 똑같다. <br>
- String interpolation
- sass문법과 유사. `${}`

```javascript
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (evt) => changeContents(evt, index));
    oReq.open('GET', `http://jsonplaceholder.typicode.com/posts/${(index + 1)}`);
    oReq.send();
    onTabSelected(tabList[index], index);
```

### Template
- HTML을 동적으로 생성해서 DOM에 추가하는 일이 언제 생길까요?
- 템플릿만 서버에 보관후 필요할 때마다 요청.
- javascrpt안에 템플릿 파일을 넣으면 안된다. 분리해야 한다. 
- 내용은 없고 (뼈대)형태만 있는 것을 Template.
- [Writing multiline strings in ES6 using Template Strings] (https://jack.ofspades.com/multiline-strings-in-es6-javascript/)

```javascript
var template = "<div>{{%name%}}</div>"; 
var div = "<div class='red'></div>
```

```javascript
var kevin = {  
  profile_image: 'http://lorempixel.com/300/300',
  name: 'Kevin',
  title: 'Mover, Shaker, Risk Taker'
}

function get_user_widget_markup (user) {  
  return [
    '<div class="user-profile">',
      '<img src="' + user.profile_image + '" alt="" class="user-image">',
      '<h2 class="user-name">',
        user.name,
      '</h2>',
      '<p class="user-title">',
        user.title,
      '</p>',
    '</div>'
  ].join('')
}
```

#### 메소드 체이닝 (method chaining)
```javascrpt
var str = 'codeAAA !!';
str.replace('!!', '??')
   .replace('code', 'javascript')
   .replace('AAA', ' king!!');
```