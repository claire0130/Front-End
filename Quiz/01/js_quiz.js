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

getOdd(10);
getOdd(4);


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

getRectArea(10, 4);

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
getTriangletArea(10, 4);

 /**
  * ------------------------------------------------------------
  * [문제4]
  * 밑변에 높이를 argument로 받아
  * 사각형과 삼각형의 넓이를 배열에 담아 반환하는 함수를 만드세요
  * ------------------------------------------------------------
  */

function getArea(num1, num2) {
    var rect_result = getRectArea(num1, num2);
    var triang_result = getTriangletArea(num1, num2);
    var arr = [];
    arr.push(rect_result, triang_result);
    return arr;
}

getArea(10,4);

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
console.log(myFriends);

/**
 * ----------------------------------------------------------------------------
 * [문제7] 예습 
 * 객체(object)는 다음처럼 name(key)와 value로 구성된 데이터 타입.
 * - new Object() 형태보다는 리터럴 방식인 {key1: value1, key2: value2}가 많이 사용된다.
 * - 어떤 값이든 객체의 속성이 될 수 있다. 즉, 객체 안에 객체도 품을 수 있다.
 * - 오브젝트의 속성에 접근할 때는 점(.)과 속성 이름을 사용한다.
 * - add item (key, value), delete item (key)
 * ----------------------------------------------------------------------------
 */

// - 고민하기 -
// 특정 name에 해당하는 값을 얻으려면 어떻게 접근해야 할까요?
// 특정 name에 해당하는 값을 수정하려면 어떻게 해야할까요?
// 새로운 값을 어떻게 추가할 수 있을까요?
// 특정 값을 삭제하려면 어떻게 해야 할까요?
// 객체는 어떤 상황에서 유용하게 쓰일 거 같나요?

var myObj = { 'name' : 'codesquad'};
console.log(myObj.name); // codesquad
console.log(myObj['name']); // codesquad

console.log(myObj.subject1 = 'javascript'); 
console.log(myObj); // {name: "codesquad", subject1: "javascript"}

console.log(myObj.subject2 = 'Swift'); 
console.log(myObj); // {name: "codesquad", subject1: "javascript", subject2: "Swift"}

console.log(delete myObj.subject2);
console.log(myObj); // {name: "codesquad", subject1: "javascript"}