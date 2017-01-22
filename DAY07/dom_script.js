'use strict';

/**
 * --------------------------------
 * DOM 탐색 API
 * - querySelector() : IE 8+ 지원
 * - querySelectorAll() : IE 8+ 지원
 * --------------------------------
 * DOM 조작 API
 * - removeChild()
 * - appendChild()
 * - insertBefore()
 * - cloneNode() 
 * - replaceChild()
 * --------------------------------
 */

/**
 * --------------------------------
 * DOM 탐색, 조작 함수
 * --------------------------------
 */

function queryAll(selector) {
	return document.querySelectorAll(selector);
}

function query(selector) {
	return document.querySelector(selector);
}

function createEle(element_name, text) {
	var create_node = document.createElement(element_name);
	if ( typeof text === 'string' ) {
		var text_node = document.createTextNode(text);
		create_node.appendChild(text_node);
	}
	return create_node;
}

/**
 * --------------------------------
 * 미션3. strawberry 삭제 후 추가
 * --------------------------------
 */
// <li>strawberry</li> 삭제
var ulElement = queryAll('ul')[0];
var liLastElement = ulElement.querySelector('li:last-child');
	ulElement.removeChild(liLastElement);

// <li>new strawberry</li> 동적 생성
var markedLiStrawberry = createEle('li', 'add strawberry');
markedLiStrawberry.setAttribute('class', 'active');

// <li>new strawberry</li> 삽입(추가)
ulElement.appendChild(markedLiStrawberry);


/**
 * --------------------------------------------
 * 미션4. banana와 orange 사이에 새로운 과일을 추가 
 * --------------------------------------------
 */
var markedLiMango = createEle('li', 'add mango');
markedLiMango.setAttribute('class', 'active');

var liOrange = ulElement.querySelector('li:nth-child(3)');
ulElement.insertBefore(markedLiMango, liOrange);


/**
 * --------------------------------------------
 * 미션5. apple를 grape와 strawberry 사이로 이동
 * --------------------------------------------
 */

// 삭제
var liApple = ulElement.querySelector('li:first-child');
ulElement.removeChild(liApple);

var markedLiApple = createEle('li', 'moving apple');
markedLiApple.setAttribute('class', 'active');

var liGrape = ulElement.querySelector('li:nth-child(4)');
ulElement.insertBefore(markedLiApple, liGrape);


/**
 * --------------------------------
 * 미션6. class가 'red'인 노드 삭제
 * --------------------------------
 */
var ulSecond = queryAll('ul')[1];
var classRed = ulSecond.querySelectorAll('.red');

for ( var i = 0, len = classRed.length; i < len; i++ ) {
	var classRedElement = classRed[i];
	ulSecond.removeChild(classRedElement);
}

/**
 * --------------------------------------------------------------------
 * 미션7. section 태그의 자손 중에 blue라는 클래스를 가지고 있는 노드가 있다면, 
 * 그 하위에 있는 h2 노드를 삭제. 
 * --------------------------------------------------------------------
 */

var sectionElement = query('section');
var classBlue = sectionElement.querySelector('.blue');
var find_h2 = sectionElement.querySelector('h2');

if ( classBlue ) {
	sectionElement.removeChild(find_h2);
	console.log('<h2> 노드가 삭제되었습니다.');
}