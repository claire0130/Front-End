###### codesquad

## DAY 05
- Git
	- Git이란?
	- Why VCS
	- git vs svn
	- git 환경 설정
	- 작업 디렉토리(Working directory)
	- 로컬 저장소(Repositories)
	- 원격 저장소(Remote)
	- git 명령어

### Git

#### Git이란?
1. `svn`란 같은 VCS(Version Control System) <br>
	- 버전 관리 시스템 <br>
	- 협업 <br>
2. Linus Torvals가 리눅스의 소스 코드 버전 관리용으로 만듬<br>
3. `github`, `안드로이드`(내부에 리눅스가 있다)와 함께 점점 더 유명해짐 <br>

#### Why VCS(Version Control Software)?
- 소스 저장소: 하드디스크, usb(1년안에 망가질 확률이 10%), 드롭박스(클라우드- 보안에 취약)
- 협업은 어떻게?
- 버전 관리는?
- 문제가 생겼을 때 어떻게 되돌리까?
- 오픈 소스?

#### git vs svn
: git의 최대장점 -> `오프라인 작업`이 가능하다.

git | svn
------| ---------
어렵다 | 덜 어렵다
빠르다 | 덜 빠르다
오프라인 작업 가능 | 오프라인 상태에서만 작업 가능
풍부한 브랜치 가능 | 브랜치 기능 미비

#### 요약
`git`으로 파일을 관리하면 `변경 이력` 다 남는다! <br>
백업 복사본 이런 거 만들 필요도 전혀 없고, 공동 작업도 정말 쉬워진다!

#### git 환경 설정
- 글로벌 사용자 등록
	- 이름 & 이메일 설정 <br>

	```
	$ git config --global user.name "이름"
	$ git config --global user.email "github 가입한 이메일"
	```

- 설정된 내용 출력 <br>
```
$ git config --global --list
```

- vim으로 수정 <br>
```
$ git config --global --edit
```

- 이름 & 이메일 확인 <br>
```
$ git config --global user.name
$ git config --global user.email
```

- 프로젝트마다 따로 설정이 가능 <br>
```
$ git config user.name
$ git config user.email

$ vi .git/config
$ cat .git/config
```

#### 작업 디렉토리(Working directory)
- 1차 저장소
- 사람이 직접 파일을 변경하는 곳
- 에디터, IDE 등을 통해 파일 내용을 직접 변경할 수 있다

#### 로컬 저장소(Repositories)
- 작업 디렉토리의 작업 변경 내용을 저장하는 곳
- git 명령어로만 생성 및 조작 가능
- 내 컴퓨터에 숨김폴더로 저장됨

#### 원격 저장소(Remote)
- 로컬 저장소를 서버에 복사해서 저장하는 곳을 원격 저장소라고 한다
- 여려 명을 협업하기 위해서 필요하고
- 로컬 저장소가 없어졌을 때 복구하기 위해서도 필요하다
- `push`로컬 저장소를 원격 저장소에 저장, `pull` 원격 저장소를 로컬 저장소에 저장

#### [git 명령어] init <br>
: 새로운 로컬 저장소 만들기 <br>
- `ls -al` 숨김 디렉토리가 보인다. ==> `.git` 로컬 저장소
- 'git status'

```
$ git init
$ ls -al
```

#### git status <br>
: 저장소 상태 보기

```
$ git status
```

#### git add <br>
: 인덱스에 변경 내용 추가

```
$ git add {파일이름}
```

#### git clean
: untracked 파일 제거, `작업(Working)`, `로컬(Repositories)` 동일한 상태로 바꿔준다

```
$ git clean -f
```

#### git commit
- 커밋이란 git의 객체
- 번경이력이자 git에서 가장 중요한 것
- 모든 커밋은 고유한 아이디를 갖는다
- 아이디는 긴 16진수인데 보통 앞의 5자리 정도만 사용해도 유니크함
- `워크플로어` 작업 흐름도
- `origin` 원본 서버 저장소
- git 커밋(commit) : 최종 확정본 <br>
: `git log --oneline --graph --decorate` => 단축 `glog`

![git commit Workflow](./Assets/git_commit.png)

```
$ git commit -m "Create hello.txt"
$ git log --oneline --graph --decorate --all

$ git remote add origin {git주소}
$ git push origin master
```

> 'alias 설정' alias glogs = 'git log --oneline --graph --decorate --all'

#### git clone
: 새로운 폴더를 생성하고 원격 저장소를 복사해 오는 명령  

```
$ git clone {git 주소}
$ git clone a_file b_file
```

#### git pull
: 원격 저장소의 내용을 `로컬 저장소에 복사`하고 현재 `작업 디렉토리까지 내용을 반영`

```
$ git pull
```

#### git checkout <br>
: 아직 스테이징이나 커밋을 하지 않은 파일의 변경내용을 취소하고 `이전 커밋상태로 되돌리기` <br>
: 작업 디렉토리를 바꾸는 명령어 <br>

```
$ git checkout {커밋 아이디}
```

#### branch 생성

```
$ git branch
$ git branch {새로운 브랜치 이름}

```

#### [Tip] `Mac`에서 `push`가 잘 안 될 경우
: 에러가 발생할 경우 아래처럼 저장소 주소에 `github id`를 추가

```
[remote origin]
	url = github id@git주소
```

#### Sever란?
- `가용성(availability)` 언제나 서버가 돌아가야한다. (서비스마다 다르지만) 90%.
- `내구성(durability)` 안에 데이터가 사라지면 안된다. 100%가 되어야 한다.
