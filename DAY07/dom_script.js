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
var find_ul = queryAll('ul')[0],
	find_li_last = find_ul.querySelector('li:last-child');
	find_ul.removeChild(find_li_last);

// <li>new strawberry</li> 동적 생성
var marked_li_strawberry = createEle('li', 'add strawberry');
marked_li_strawberry.setAttribute('class', 'active');

// <li>new strawberry</li> 삽입(추가)
find_ul.appendChild(marked_li_strawberry);


/**
 * --------------------------------------------
 * 미션4. banana와 orange 사이에 새로운 과일을 추가 
 * --------------------------------------------
 */
var marked_li_mango = createEle('li', 'add mango');
marked_li_mango.setAttribute('class', 'active');

var find_orange = find_ul.querySelector('li:nth-child(3)');
find_ul.insertBefore(marked_li_mango, find_orange);


/**
 * --------------------------------------------
 * 미션5. apple를 grape와 strawberry 사이로 이동
 * --------------------------------------------
 */

// 삭제
var find_li_apple = find_ul.querySelector('li:first-child');
find_ul.removeChild(find_li_apple);

var marked_li_apple = createEle('li', 'moving apple');
marked_li_apple.setAttribute('class', 'active');

var find_grape = find_ul.querySelector('li:nth-child(4)');
find_ul.insertBefore(marked_li_apple, find_grape);


/**
 * --------------------------------
 * 미션6. class가 'red'인 노드 삭제
 * --------------------------------
 */
var find_ul_second = queryAll('ul')[1],
	find_class_reds = find_ul_second.querySelectorAll('.red'),
	i = 0,
	len = find_class_reds.length;

for ( ; i < len; i++ ) {
	var red_color_node = find_class_reds[i];
	find_ul_second.removeChild(red_color_node);
}

/**
 * --------------------------------------------------------------------
 * 미션7. section 태그의 자손 중에 blue라는 클래스를 가지고 있는 노드가 있다면, 
 * 그 하위에 있는 h2 노드를 삭제. 
 * --------------------------------------------------------------------
 */

var find_section = query('section'),
	find_class_blue = find_section.querySelector('.blue'),
	find_h2 = find_section.querySelector('h2');

	if ( find_class_blue ) {
		find_section.removeChild(find_h2);
		console.log('<h2> 노드가 삭제되었습니다.');
	}