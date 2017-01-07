'use strict';

/**
 * ----------------------------------------------
 * [문제1]
 * n개의 숫자를 인자를 받아,
 * `while문`을 이용해서 `홀수`를 출력하는 함수를 만드세요.
 * ----------------------------------------------
 */

function getOdd(arg) {
    var i = 0, num_list =[];
    while ( i < arg ) {
        i++;
        if ( i % 2 === 1 ) {
            num_list.push(i);
        }
    }
    return num_list.toString();
}

getOdd(10); // "1,3,5,7,9"
getOdd(4); // "1,3"


/**
 * ------------------------------------------------------------
 * [문제2]
 * 밑변에 높이를 argument로 받아
 * 사각형의 넓이를 반환하는 함수를 만드세요
 * ------------------------------------------------------------
 */

function getRectArea(base, height) {
    return base * height;
}

getRectArea(10, 4); // 40

/**
 * ------------------------------------------------------------
 * [문제3]
 * 밑변에 높이를 argument로 받아
 * 삼각형의 넓이를 반환하는 함수를 만드세요
 * ------------------------------------------------------------
 */

function getTriangletArea(base, height) {
    return (base * height)/2;
}

getTriangletArea(10, 4); // 20

 /**
  * ------------------------------------------------------------
  * [문제4]
  * 밑변에 높이를 argument로 받아
  * 사각형과 삼각형의 넓이를 배열에 담아 반환하는 함수를 만드세요
  * ------------------------------------------------------------
  */

function getArea(num1, num2) {
    var rect_result = getRectArea(num1, num2),
        triang_result = getTriangletArea(num1, num2),
        arr = [];
    arr.push(rect_result, triang_result);
    return arr;
}

getArea(10,4); // [40, 20]

/**
 * -------------------------------------------------------------------
 * 문제5.
 * 최근검색어 리스트를 변경할 수 있도록 addWord 함수와 removeWord 함수를 만드세요.
 * -------------------------------------------------------------------
 */

var recentSearchWord = ['코드스쿼드', '자바스크립트그룹'];

// 배열 추가
function addWord(recentSearchWord, idx) {
    return recentSearchWord.push(idx);
}

function removeWord(recentSearchWord, idx) {
    var idx_check = recentSearchWord.indexOf(idx);
    if ( idx_check === -1 ) {
        console.log('입력하신 요소가 없습니다.');
        return false;
    }
    if ( idx_check > -1 ) {
        return recentSearchWord.splice(idx_check, 1);
    }
}

addWord(recentSearchWord, '크롱');
console.log(recentSearchWord); // ['코드스쿼드', '자바스크립트그룹', '크롱'];

removeWord(recentSearchWord, '자바스크립트그룹');
console.log(recentSearchWord); // ['코드스쿼드', '크롱'];

/**
 * ------------------------------------------------------------
 * [문제6]
 * 특정배열의 순서에 값을 넣을 수 있는 insertElement 함수를 만드세요
 * ------------------------------------------------------------
 */

var myFriends = ['hary', 'john', 'rock'];
function insertElement(myFriends, position, element) {
    var removed = myFriends.splice(position, 0, element);
    return myFriends;
}

var myFriends = insertElement(myFriends, 2, 'james');
console.log(myFriends); // ["hary", "john", "james", "rock"]

/**
 * ----------------------------------------------------------------------------
 * [문제7] 예습
 * 객체(object)는 다음처럼 name(key)와 value로 구성된 데이터 타입.
 * - new Object() 형태보다는 리터럴 방식인 {key1: value1, key2: value2}가 많이 사용된다.
 * - 어떤 값이든 오브젝트의 속성이 될 수 있다. 즉, 오브젝트 안에 오브젝트도 품을 수 있다.
 * ----------------------------------------------------------------------------
 */

var myObj = { 'name' : 'codesquad'};

// 1. 특정 name에 해당하는 값을 얻으려면 어떻게 접근해야 할까요?
// 오브젝트의 속성에 접근할 때는 점(.)과 속성 이름을 사용한다.
myObj.name;
myObj['name'];

// 2. 특정 name에 해당하는 값을 수정하려면 어떻게 해야할까요?



// 3. 새로운 값을 어떻게 추가할 수 있을까요?
// add item (key, value)
myObj.subject1 = 'javascript';
myObj.subject2 = 'Swift';
myObj.teach = '크롱';

// 4. 특정 값을 삭제하려면 어떻게 해야 할까요?
//delete item (key)
delete myObj.subject2;

// 객체는 어떤 상황에서 유용하게 쓰일 거 같나요?
