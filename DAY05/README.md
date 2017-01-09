###### codesquad

## DAY 05
- Git
	- Git이란?
	- Why VCS
	- git vs svn
	- git 환경 설정
	- 작업 디렉토리(Working directory)
	- 로컬 저장소(Repositories)

#### Git

##### Git이란?
1. `svn`란 같은 VCS(Version Control System) <br>
	- 버전 관리 시스템 <br>
	- 협업 <br>
2. Linus Torvals가 리눅스의 소스 코드 버전 관리용으로 만듬<br>
3. `github`, `안드로이드`(내부에 리눅스가 있다)와 함께 점점 더 유명해짐 <br>

##### Why VCS(Version Control Software)?
- 소스 저장소: 하드디스크, usb(1년안에 망가질 확률이 10%), 드롭박스(클라우드- 보안에 취약)
- 협업은 어떻게?
- 버전 관리는?
- 문제가 생겼을 때 어떻게 되돌리까?
- 오픈 소스?

##### git vs svn
: git의 최대장점 -> 오프라인 작업이 가능하다.


##### git 환경 설정
- 글로벌 사용자 등록
	- 이름 & 이메일 설정 <br>

	```
	$ git config --global user.name "이름" <br>
	$ git config --global user.email "github 가입한 이메일" <br>
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

##### 작업 디렉토리(Working directory)
- 1차 저장소
- 사람이 직접 파일을 변경하는 곳
- 에디터, IDE 등을 통해 파일 내용을 직접 변경할 수 있다

##### 로컬 저장소(Repositories)
- 작업 디렉토리의 작업 변경 내용을 저장하는 곳
- git 명령어로만 생성 및 조작 가능
- 내 컴퓨터에 숨김폴더로 저장됨

##### 원격 저장소(Remote)
- 로컬 저장소를 서버에 복사해서 저장하는 곳을 원격 저장소라고 한다
- 여려 명을 협업하기 위해서 필요하고
- 로컬 저장소가 없어졌을 때 복구하기 위해서도 필요하다
- `push`로컬 저장소를 원격 저장소에 저장, `pull` 원격 저장소를 로컬 저장소에 저장

##### Sever
- `가용성(availability)` 언제나 서버가 돌아가야한다. (서비스마다 다르지만) 90%.
- `내구성(durability)` 안에 데이터가 사라지면 안된다. 100%가 되어야 한다.

#### git 시작하는 방법
- `git init` 새로운 로컬 저장소 만들기
- `ls -al` 숨김 디렉토리가 보인다. ==> `.git` 로컬 저장소
```
$ git init
$ ls -al
```

- git 저장소 상태 보기
```
$ git status
```

- git 인덱스에 변경 내용 추가

```
$ git add

```

- git 커밋(commit) : 최종 확정본 <br>
: `git log --oneline --graph --decorate` => 단축 `glog`

```
$ git commit -m "Create hello.txt"
$ git log --oneline
$ git log --oneline --graph --decorate
```

```
$ git clean -f : 작업(워킹), 로컬() 디렉토링 동일하게 만들어준다.
```

##### 커밋(commit)
- 커밋이란 git의 객체
- 번경이력이자 git에서 가장 중요한 것
- 모든 커밋은 고유한 아이디를 갖는다
- 아이디는 긴 16진수인데 보통 앞의 5자리 정도만 사용해도 유니크함
- `워크플로어` 작업 흐름도
- `origin` 원본 저장소
- `Mac` 에서는 맨앞에 아이디를 추가 해준다 `아이디@git주소

```
$ git remote add origin {git주소}
$ git push origin master 

```