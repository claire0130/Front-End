#### 1. npm init 
쭉쭉엔터

#### 2. vi package.json 열어보기
node 프로젝트를 위한 설정파일. key-value로 구성된 object 형태.
npm 이라는 명령은 이 파일을 읽고 참고하면서 동작함.

#### 3. npm install express --save
express 라는 node 모듈(프로그램)을 설치하고, 설정파일에 추가.

#### 4. package.json 열어보기 
 dependencies 항목에 express 라는 모듈이 등록되어 있음을 확인.

#### 5. Node_modules 디렉토리 탐색
수 많은 관련된 모듈이 설치되었음을 확인. 여기를 직접 열어서 수정하거나 고칠일은 없음.
여기 설치된 모듈을 소스코드에서 사용하면 됨.

#### 6. vi app.js
```javascript
var express = require('express')
var app = express()
app.listen(3000, function() {
     console.log("Start server on port 3000!");
})
console.log("end of code")
```
require는 모듈을 불러오는 방법. (Node_modules 에서 찾아서 노출시켜준다)
listen의 두번째 인자는 callback 함수 (비동기로 동작)

#### 7. node app.js 로 app.js 코드 실행하면 서버가 시작됨.

8 http://127.0.0.1:3000/ 로 접속해서 확인.

9 Ctrl + c 로 서버종료

#### 10. 소스코드가 수정될때마다 서버를 다시 시작해야 하는 귀찮음.
nodemon이라는 패키지(모듈)을 설치해서 사용하자.
```shell
npm install nodemon -g
```
(-g는 global의 약자)

#### 11.  nodemon  app.js 으로 app.js 를 실행.

#### 12. 특정 url로 받은 get 요청에 대한 처리.
아래 코드 추가
//url 처리
```javascript
app.get('/', function (req, res, next) {
     res.send('<h1>  hi friend :-) </h1>');
})
```

#### 13.   ‘/‘ 디렉토리로 접근했을 때 main.html 파일이 열리도록 하기.
public 이라는 새로운 디렉토리를 만들고 main.html 파일 만들기.

#### 14. app.js 에 새로운 sendFile로 응답 주기.
```javascript
app.get('/', function (req, res, next) {
     res.sendFile(__dirname+'/public/main.html');
})
```

#### 15. main.html 에서 main.js 를 새롭게 추가해보기.

```javascript
 <script src="./js/main.js"></script>
```
접근할 방법이 없어서 에러가 발생한다.

#### 16. static 디렉토리 추가.
URL로  접근해서 브라우저에 내려받을 수 있는 정적파일들의 위치를 등록.
(html, javascript, css, images 들은 정적파일에 해당한다)

```javascript
app.use(express.static('public'))
```

#### 17. 127.0.0.1:3000/ 로 다시 접근

#### 18. images 디렉토리 추가.
main.html 안에서 img 태그로 이미지를 추가하자.
브라우저에서 main.html을 열어서 이미지가 잘 보이는지 확인.

#### 19. 새로운 routing 하나 추가 .
```javascript
app.get('/main', function (req, res, next) {
     res.sendFile(__dirname+'/public/main.html');
})
```

#### 20. 127.0.0.1:3000/main 으로 접속.

#### 21. post 방식으로 서버에 데이터를 보내보자.
/public/form.html을 만들어서 아래 코드를 추가.
```javascript
            <form method="get" action="/send_email">
            email : <input type="text" name="email"> <br/>
                보내기 <input type="submit">
            </form>
```

#### 22. 127.0.0.1:3000/form.html 접속해서 확인.

#### 23. get 요청을 받아서 처리할 수 있도록 app.js. 에서 새로운 라우팅조건 만들기.

```
app.get('/send_email', function(req,res,next) {
     console.log("send_email..”);
})
```

#### 24. get 요청처리. 
클라이언트가 보낸데이터는 http://localhost:3000/send_email?email=niganiga%40naver.com  이렇게 노출되고, 이것을 서버에서 받기 위해서는 req.param 메서드를 사용해서 얻기.
```javascript
app.get('/send_email', function(req,res,next) {
     console.log("send_email..", req.param('email'));
})
```

#### 25. post 요청처리. 
데이터를 얻을때는 get을 사용하고, 보낼때는 post메서드를 사용. 
더구나 get은 데이터 보내는 길이에 제한이 있고url에 중요 정보를 노출되는 문제도 있음.

<form method="post" action="/send_email">

#### 26. app.js 에서 routing 부분 수정.
```javascript
app.post('/send_email', function(req,res,next) {
     console.log("send_email..", req.param('email'));
     res.send("post response");
})
```

#### 27. bodyParser를 활용한 post데이터처리.
POST데이터를 받으려면 req.param으로 처리가 안되고, bodyParser 라는 별도 패키지 설치가 필요.
```shell
$ npm install body-parser —save
```

#### 28. 해당패키지를 사용하겠다고 명시.
```javascript
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
```

#### 29. routing 처리부분에서 req.body 객체를 사용해서 데이터에 접근할 수 있음.
```javascript
app.post('/send_email', function(req,res,next) {
     console.log("send_email..", req.body.email);
})
```

#### 30. html로 응답값도 주어보자.
```javascript
app.post('/send_email', function(req,res,next) {
     console.log("send_email..", req.body.email);
     res.send("<h1> Welcome, <span style='color:skyblue'>" + req.body.email + "</span>");
})
```

31.더 복잡한 html응답을 주기 위해 데이터 + html을 결합해보자.
template 작업을 도와주는 방법을 선택 (ejs라는 녀석을 사용)
```shell
$ npm install ejs --save
```

#### 32. app.js 에서 ejs를 view engine로 사용할 것을 명시. 
```shell
app.set('view engine', 'ejs’)
```

#### 33. views/email.ejs 라는 template 파일 생성.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MY APP</title>
  <style>
   h1 {
    text-align: center;
    margin-top: 10rem;
   }
  </style>
</head>
<body>

  <h1>Welcome <%= email%></h1>

</body>
</html>
```

<% = email%> 부분이 나중에 치환될 문자열 부분.

#### 34. res.render 메서드로 email.ejs 파일에 데이터 포함해서 호출하기.
```javascript
app.post('/send_email', function(req,res,next) {
     res.render('email.ejs', {'email' : req.body.email});
})
```


#### 35. form 데이터를 ajax로 보내보자.
form데이터를 보내기 위한 버튼 tag를 하나 만든다.
<button class="ajaxsend">ajaxsend</button>

#### 36. 버튼을 누르면 ajax를 보내도록 한다.
이때 form 데이트를 json 형태로 만들어서 보낸다.
```javascript
document.querySelector('.ajaxsend').addEventListener('click',function(evt)  {
            sendAjax('http://127.0.0.1:3000/ajax_send_email', document.forms[0]);
        });

        function sendAjax(url, form) {
            var email = encodeURIComponent(form.elements[0].value);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json"); //for json 형태 요청을 보내기 위해서.
            xhr.send({'email' : email});
            xhr.addEventListener('load', function() {
                console.log(xhr.responseText);
            });
        }
```

#### 37. App.js 에서 응답값을 받아서 처리.
```javascript
app.post('/ajax_send_email', function(req,res,next) {
     console.log("send_email..", decodeURIComponent(req.body.email));
})
```

#### 38. 응답을 json형태로 보내주기.
```javascript
app.post('/ajax_send_email', function(req,res,next) {
     console.log("send_email..", decodeURIComponent(req.body.email)); //url encoding했기때문에.
     res.json({'email' : req.body.email});
})
```

#### MYSQL 연동 - db접속해서 데이터 확인.
```shell
mysql -u root -p
use jsman;
show tables;
select * from user;
```

#### mysql node 모듈 설치.
```shell
npm install mysql --save
```

#### express 에서  mysql 사용법 검색
``` javascript
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  port:3306,
  user: 'root',
  password: 'asdf1234',
  database:'jsman'
})
connection.connect()

var query = connection.query('select * from user',function(err,rows){
        console.log(rows[0].EMAIL);
});

```

#참고 : 
https://expressjs.com/en/starter/installing.html
여기서 Getting started -> Guide 항목 살펴보기.

