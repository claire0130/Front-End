###### codesquad

## DAY 01
1. Web Front-End
2. Linux Basic
3. Vim 
4. 컴퓨터 프로그래밍 개론

### 1. Web Front-End란?
Web 서비스의 Front쪽 개발.

#### Web 서비스의 Front쪽 개발은 무엇으로 구성되어 있나?

`문서` 어떤 구조를 가지고 있음 `HTML`
```html
<div class="window-overlay">
    <div class="window">
        <a class="focus-dummy" href="#"></a>
    </div>
</div>
```

`스타일` 이쁘게, 보기좋게 `CSS`

```css
.window-overlay {
    position: absolute;
    left: -28px;
    top: 8px;
}
```

`동작` 사용자와의 인터렉션 `Javascript`

```javascript
let aCardList = [];
    for(var i = 0; i < cardList.length; i++) {
        let str = `${cardList[i]}번째 카드`;
        let id = `list-${cardList[i]}`;
        aCardList.push(<li id={id} key={i} draggable='true'>);
    }
```

#### 그래서 Web Front 개발은?
- 3가지 다른 `Language`
- 1가지 `Programming`
- 무지 많은 `Device` 대응
- 무비 빠른 `trend`
- 논리적인 개발자 & 감성적인 다지이너와의 `커뮤니케이션``

---

### 2. linux
#### History
1. 1969년 켄 톰슨과데니스리치가 벨 연구소에서 `유닉스 OS`를 만듬
2. 1991년 라이너스 토발즈라는 대학생이 `Linux` 커널을 만듬

#### 리눅스 배포판 선택
: 리눅스에서 다양한 배포한이 존재함 
- [Debian] (www.debian.org)
- [Ubuntu] (www.ubuntu.org)
- Redhat Enterprize Linux
- Fedora
- Cent
- Mint Linux 
- Gentoo 
- Arch Linux 
- Open SUSE

#### Shell이란?
- OS와 대화하는 프로그램
- 여러 가지 종류가 있는데 지금은 bash사용
- 맥 사용자는 zsh를 사용하는 것도 좋다

#### 리눅스 Shell 명령
`pwd`               현재 디렉토리 표시 <br>
`mkdir`             새로운 디렉토리 생성 <br>
`cd`                이동 <br>
`cd ~`              사용자 홈 디렉토리로 이동 <br>
`ls`                현재 디렉토리의 내용을 보여줌 <br>
`cat`               파일 내용 표시 <br>
`history`           명령어 이력 표시 <br>
`cp`, `mv`, `rm`    파일복사, 이동, 삭제 <br>
`echo`, `touch`     파일 생성  <br> 
`ls`, `ll`, `ls -1` 목록 출력 <br>
`say`               음성 출력 <br>

---

### 3. Vim
- Vi Improved
- 가볍고 강력한 텍스트 에디터
- 간지!
- 진입장벽이 조금 높다

#### Vim 단축키
`h` `j` `k` `l`     좌,하,상,우 커서 이동 <br>
`i`                 입력 모드(insert 모드) <br>
`e`                 단어의 마지막 글자로 이동하기 <br>
`b`                 백워드 방향으로 단어의 첫글자로 이동하기 <br>
`x`                 delete 키 <br>
`:w`                문서 저장하기 <br>
`:q`                현재 문서 닫기 <br>
`:q!`               저장하지 않고 닫기 <br>
`:wq`               저장하고 닫기 <br>

#### 자료
- [빔 에디터] (http://codelion.net/weeks/overview/2)
- [Interactive Vim tutorial] (http://www.openvim.com/)

---

### 4. 컴퓨터 프로그래밍 개론

#### 컴퓨터가 뭐지?
- 계산기 ==> 함수
- 일반목적, 특수목적(ex. 전자자판기, 게임기)
- 컴퓨터에서 입력하는 `순서가 중요`하다
- 계산기(시스템) : 블록 다이어그램 (Block Diagram)
    - 입력 -> 시스템(덧셈, 뺄셈, 나눗셈) -> 출력 <br>
- `컴퓨터 어원` <br>
    - `compute` 계산하다. 산출하다. 추정하다 <br>
    -  `com` together 함께, `putare` to settle 생각하다, 해결하다 <br>
- 입력(마우스, 키보드, 천공카드...) -> 컴퓨터 -> 출력(모니터, 소리)

#### Analog vs Digital
- x축(시간), y축(값) => 끊임 없으면 `Analog`, 둘다 끊어지는건 `Digital`
- `Analog / Digital Converter` 컴퓨터는 모든 것을 숫자로 바꿔서 계산한다
- 사람이 들을 수 있는 주파수 22,000Hz(헤르츠, 1초당 진동 횟수)
- sound(자연 소리) vs adudio(가공 소리)

#### `코드` 미리 약속한 방식으로 표현
- `1` ON(true), `0` OFF(false)
- `10진법(Decimal)`       0부터 9까지
- `2진법(Binary)`         0부터 1까지 
- `16진법(Hexa-decimal)`  0부터9까지 ➜ A부터F까지
- `0`과 `1`로 하는 논리 계산(Boolean) : AND(논리곱, OR(논리합), NOT
- `ASCII` 코드 
- `유니코드(unicode)` : 어떤 플랫폼, 어떤 프로그램, 어떤 언어에도 상관없이

#### 프로그래밍(코딩) 언어
- `HTML` / `Javascript` 언어 <br>
: `인터프리터(interpreter)` 프로그래밍 언어의 소스 코드를 바로 실행
- `swift` 언어 <br>
: `컴파일러(compiler)` 특정 프로그래밍 언어로 쓰여 있는 문서를 다른 프로그래밍 언어로 옮기는 프로그램