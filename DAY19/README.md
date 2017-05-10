###### codesquad

## DAY 19
- Node

## Node
### npm project start

```
$ npm init
```

> package.json 파일이 생성이 된다.

### Express - Node.js 웹 애플리케이션 프레임워크
- [express node install](http://expressjs.com/en/starter/installing.html)
- `npm`은 프로젝트에 대한 설정을 `package.json` 안에 의존하고 있는 외부 라이브러리 정보를 담고 있는 문서. (JSON형식)
- `node_modules` 폴더가 설치

```
$ npm install express --save

```

### 특정한 포트로 서버 띄우기

```
var express = require('express');
var app = express();
app.listen(3000, function() {
	console.log('start! express server on port 3000');
});
````

> 내 PC의 접근하는 IP는  `localhost` 또는 `127.0.0.1`


### Node는 비동기 통신

```
var express = require('express');
var app = express();
app.listen(3000, function() {
	console.log('start! express server on port 3000');
});

console.log('end of server code....');
```

> 비동기로 동작되기 때문에 `end of server code`(동기적) 먼저 실행되고 `start! express server on port 3000`(비동기) 콜백함수가 실행된다.


### [자동으로 파일 감지-nodemon](https://www.npmjs.com/package/nodemon)
- `-g` 전역 설치

```
$ npm install nodemon -g
```

- 실행

```
$ nodemon 파일이름
```

### URL Routing
- `__dirname` 절대 경로를 표현해 준다.
- `req` request, `res` response

```html
	<h1>main page</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus, voluptatem asperiores laborum veritatis totam sequi. Ducimus animi possimus magni qui laboriosam, sequi, dolores velit, ea incidunt dolor, enim vero!</p>
````

```javascript
var express = require('express');
var app = express();
app.listen(3000, function() {
	console.log('start! express server on port 3000');
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/main.html');
});
```

### Static 처리
- Static 디렉토리를 express에 등록을 해 줘야 한다.
-

```html
	<h1>main page</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus, voluptatem asperiores laborum veritatis totam sequi. Ducimus animi possimus magni qui laboriosam, sequi, dolores velit, ea incidunt dolor, enim vero!</p>
	<script src="main.js"></script>
```

```javascript
var express = require('express');
var app = express();
app.listen(3000, function() {
	console.log('start! express server on port 3000');
});

// Static 디렉토리 처리
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/main.html');
});

```
