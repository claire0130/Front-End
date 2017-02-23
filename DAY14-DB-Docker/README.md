###### codesquad

## DAY 14
- DB
- Docker

## DB
### DB Basic ‐ DB란 무엇인가?
- `Data란?` 저장할 수 있는 값의 집합. 컴퓨터가 저장해야 Data가 의미가 있다/
- `Database` 저장소
- `DBMS` 데이터베이스를 관리하는 프로그램
- `Information` 데이터로부터 추출할 수 있어야 의미있는 정보
- `Knowledge` 인포메이션에서 한 단계 위. 

### SQL (Structured Query Language)
- 선언적 언어 cf. 절차적 언어
- 구조화된 물어보는 언어
- `시퀄`이라는 말로 쓴다. IBM에서부터 불렸다. (버클리에선 SQL)
- RDMBS 제어에 사용됨

### 관계형 데이터 베이스
- 오라클 : 비용이 비싸다. 
- MySQL : 오라클이 매입

### NoSQL(Not Only SQL)
- Not Only SQL
- 관계형 데이터베이스가 아닌 나머지
- 그래프 디비, 도큐먼트 디비, KV Store
- MongoDB(쉽고 무료), Redis, DyanmoDB, neo4j, Casandra, HBASE, ...

### 데이터베이스 관련 용어
#### CAP 이론 : 3가지를 동시에 일어낼수 없다. 3개중에 하나를 희생. 클라우드는 `Consistency` 포기. 
- Consistency(일관성) <br>
: 서버가 일관성이 있다. 모든 사용자가 데이터를 접근했을 때 같은 데이터를 줄 때.. 일관성.(삽입, 수정, 삭제) - 일관성이 조금 없는건 - Availability(가용성) <br>
: 장애가 적다.(다운타운이 적다.) -> 예를 들면 1년. 525600분 * 0.0001 = 52.56분. 
- Partition Tolerence(분할내성) <br>
: 서버중에 1대가 죽어도 아무런 지장이 없게...(서버는 최소3대가 기본이다. 홀수대로...)

> CAP 의 `Consistency` 포기한게 `구글doc`.

#### ACID : 대표적인 관계형 데이터 베이스  - 면접때 자주 나옴. ACID는 
- 은행은 무조건 오라클, MySQL. 
- Atomicity(원자성) <br>
: 중간에 일어나는 일이 없다. 동시에 일어난다. 실패하면 초기화. <br>
- Consistency(일관성)<br>
: 언제나 일관성 있는 데이터베이스 상태로 유지<br>
- Isolation(고립성) <br>
: 여러명이 접속하면 내부적으로 직렬식으로 처리.<br>
- Durability(내구도) <br>
: 시스템 문제, DB 일관성 체크 등을 하더라도 유지되어야 함을 의미

#### 확장성 
- 수평확장 <br>
: 수평확장이 좋다. 서버를 여러대로 늘리는 것이 좋다. 여러명 사용자를 견딜 수 있다. => 관계형 데이터 
- 수직확장 <br>
: 수직확장는 CPU, 메모리, SSD 등 좋은거 교체. => NoSQL 수직확장이 잘 된다. 관계형 데이터는 안된다. 

### 관계형 DB VS NoSQL
- 돈과 관련된 것을 오라클 사용(관계형 DB), 넷플릭스(NoSQL 사용.)
- Transaction: 전자상거래. => 관계형 DB:지원 VS NoSQL:일부 지원

### Graph DB 
- [Neo4j] (https://neo4j.com/why-graph-databases/) <br>
	- 복잡한 관계 처리 지원<br>
	- 친구 추천 알고리즘, SNS등에 적합 - 미투데이에 사용. <br>

### Document DB
#### [MongoDB] (https://www.mongodb.com/) <br>
	- json: 사람도 읽을 수 있다는 것이 장점. 컴퓨터가 쉽게 저장. 예전에는 XML. 그 전에 바이널리 통신.<br>
	- 아무거나 막 저장<br>
	- 비교적 빠르고 사용이 간단하다. <br>
	> [json] (http://www.json.org/json-ko.html) 기반 레코드 저장 <br>

	- 단점<br>
		- join(조인)에 부적합 -> join는 테이블과 테이블를 합침. 합치면 어렵고 성능에 이슈 발생<br>
		이전 버전의 경우 쓰기 성능에 문제가 있음<br>

#### Key-Value DB
- Redis, Mem‐cached <br>
	- 엄청 빠르다<br>
	- 단순 데이터 처리<br>
	- 캐시 / 대이터 분산용<br>
	> 맥북 서버에서 사용자 40만명 처리가 가능. <br>

#### Cloud DB
- AWS DyanmoDB<br>
	- KV Store + Document Store<br>
	- 설치가 필요없음<br>
	- 고성능, 고가용성, 내구도<br>
	- 저렴하지 않은 비용<br>
	- 저장하고 불러오는 것만 한다. 구축하지 않는다. <br>

#### ETC
- Hadoop Eco System : 아파치의 오픈 소스. 대용량 DB를 많이 사용한다.
- Cassandra : 아파치 분산 데이터 베이스
- Elastic Search: 검색 엔진. 자연어 처리. 비주얼 라이징

--- 

## Docker
### Docker란 무엇인가?
- 도커는 2013년 3월에 출시한 오픈소스 컨테이너 프로젝트
- 가상 서버. 

#### docker 다운로드 
- [GET DOCKER] (https://www.docker.com/products/overview)

#### docker 명령어
- `mysqld`의 `d`는 daemon.
- docker서버가 백그라운드로 둔다. 
- 원본서버를 90%로 대신. 배포가 쉽다

#### mysql 아이디로 터미널 명령어 
```
$ docker pull honux77/mysql
$ docker images
$ docker run --name mysql -d -p3306:3306 honux77/mysql mysqld
$ docker exec -it mysql mysql -u root ==> 외부에서 접속이 안된다. root 사용자.
$ mysql -u root
```

#### 데이터베이스 및 일반 사용자 생성
1. clairedb 생성
create database clairedb;

2. claire 모든 DB에 접속(%)하고 비밀번호 db1234
create user 'claire'@'%' identified by 'db1234';

3. 권한 부여
grant all on clairedb.* to 'claire'@'%';

4. grant 테이블을 reload함으로서 변경 사항을 즉시 반영
flush privileges;

#### [Sequel Pro] (https://www.sequelpro.com/)
#### 테이블 생성
```
DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
	ID INT PRIMARY KEY AUTO_INCREMENT,
	EMAIL VARCHAR(64),
	NAME VARCHAR(64),
	PW VARCHAR(64)
);
```

> VARCHAR(64) : 글자 64 입력 가능다. 

#### INSERT
```
INSERT INTO USER VALUES(NULL, 'apple@gmail.com', 'apple', 'apple1234');
SELECT * FROM USER;
````

> NULL : 값이 뭔지 모르겠다. 

#### SELECT
```
SELECT NAME, EMAIL FROM USER; 
SELECT NAME, EMAIL FROM USER WHERE ID < 5 OR ID > 9;
```

#### DELETE
```
DELETE FROM USER; #모든 레코드가 삭제
DELETE FROM USER WHERE ID = 4;
```

#### UPDATE
```
UPDATE USER SET MONEY; #모든 레코드가 삭제
UPDATE USER SET NAME = 'claire' WHERE ID = 2;
```

> DB는 되돌리가 기능은 없다
> commit이 자동으로 된다. commit이 되면 undo가 안된다. 

---

### CRUD 실습
- 테이블 생성
```
USER(ID, EMAIL, NAME)
BOARD(ID, USER_ID, TITLE, BODY, POST_DATE)
```
- 데이터 삽입
- 갱신
- 삭제

### [MySQL 테이블 생성] (https://dev.mysql.com/doc/refman/5.7/en/create-table.html)
- PRIMARY KEY 
- AUTO_INCREMENT
- ENGINE
- CHARSET
- NOT NULL 
- DEFAULT
- UNIQUE

#### 테이블 정보보기
```
DESE 테이블이름;
SHOW CREATE TABLE 테이블이름;
```

##### [데이터 타입] (https://dev.mysql.com/doc/refman/5.7/en/data-types.html) 
- 지형 데이터 (12.5 Extensions for Spatial Data)
- 용도에 맞춰 적절한 타입을 선택해야 함

```
int : 정수 
dec(5, 2) : 돈을 반드시 이걸로 지정. 정확한 계산 값이 들어간다.
DOUBLE : 정확한 계산값이 안들어간다.
CHAR(8) : 고정 길이 문자
VARCHAR(64): 가변 길이 문자
DATETIME : 날짜와 시간 
```

#### 날짜 관련 타입
```
DATE : '2000-01-01'
DATETIME : '9999-11-27 15:37:24.5'
TIMESTAMP : DATETIME과 동일
```
> 단 TIMESTAMP는 1970 ~ 2038년까지만 저장 가능 
> 현재시간 체워 넣을때 사용.(현재 시간을 자동으로 저장)

#### 날짜 처리하기
```
NOW(), CURTIME(), CURDATE()
SELECT NOW();
SELECT NOW() AS NOW,
DATE_ADD(NOW(),INTERVAL 2 DAY) AS FUTURE; SELECT NOW() AS NOW,
DATE_SUB(NOW(), INTERVAL 30 MINUTE) AS PAST;
```

#### PRIMARY KEY 제약 조건
- 유니크(Unique) 값, 대표값, 자주 검색하는 값.(중복 안됨)
- PRIMARY KEY: 반드시 고유해야 하는 대표값
- AUTO_INCREMENT: mysql 전용 예약어

```
DROP TABLE IF EXISTS USER; CREATE TABLE USER (
UID INT PRIMARY KEY AUTO_INCREMENT );
INSERT INTO USER VALUES(NULL);
```

#### NOT NULL
- 반두시 값이 존재해야 하는 필드를 위한 제약조건

```
DROP TABLE IF EXISTS USER; CREATE TABLE USER (
UID INT PRIMARY KEY AUTO_INCREMENT, EMAIL VARCHAR(64) NOT NULL,
NAME VARCHAR(64)
);
# INSERT INTO USER VALUES(NULL); error
INSERT INTO USER VALUES (NULL, 'admin@cs.kr', 'Honux'); SELECT * FROM USER;
```

#### DEFAULT
- 기본값 지정 가능

```
DROP TABLE IF EXISTS USER; CREATE TABLE USER (
UID INT PRIMARY KEY AUTO_INCREMENT, EMAIL VARCHAR(64) NOT NULL,
NAME VARCHAR(64),
MONEY DEC(10,2) DEFAULT 4.99 NOT NULL );
INSERT INTO USER(EMAIL, NAME)
VALUES ('admin@cs.kr', 'Honux');
SELECT * FROM USER;
```

#### ENGINE
- 프로그래밍의 ENGINE과 동일 
- 잘 사용하지 않는 경향이 있음

```
DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
UID INT PRIMARY KEY AUTO_INCREMENT,
EMAIL VARCHAR(64) NOT NULL,
NAME VARCHAR(64),
MONEY DEC(10,2) DEFAULT 4.99 NOT NULL,
GRADE ENUM('bronze', 'silver', 'gold', 'platinum')
DEFAULT 'bronze' NOT NULL );
```

#### INSERT
- 테이블에 데이터 삽입시 사용

```
INSERT INTO USER(EMAIL, NAME)
VALUES ('admin@cs.kr', 'Honux');
SELECT * FROM USER;
```

#### CSV LOAD
- 자주 사용하게 되는 명령
- 여려가지 최적화를 수행해야 함

```
DROP TABLE IF EXISTS TEST;
CREATE TABLE TEST (A INT, B VARCHAR(16));
LOAD DATA LOCAL INFILE '/Users/honux/data.csv'
INTO TABLE TEST
FIELDS TERMINATED BY ',';
SELECT * FROM TEST; SELECT COUNT(B) FROM TEST;
```









