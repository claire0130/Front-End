/* 
 * [미션1] executeItemNode 함수를 완성하세요
 * ㄴ 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다.
 * ㄴ todoORNumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
 * ㄴ 할일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
 * ㄴ 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
 * ㄴ 추가하려는 경우 이미 같은일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
 * ㄴ 함수를 여러개로 나눠도 상관없습니다.
 * ㄴ 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
 * 
 * [미션2] 좀더 사용하기 쉬운 웹화면이 되도록, css에 다양한 스타일을 적용하면서 꾸며봅니다.
 * https://claire0130.github.io/Front-End/Quiz/02/todolist/dist/index.html

 * [미션3] 아래 event 관련 코드를 학습해보고, 어떤 코드를 의미하는지 최대한 자세히 주석으로 설명을 넣어보세요.
 */

/**
 * --------------------------------
 * DOM 탐색, 조작 헬퍼 함수
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
 * 변수
 * --------------------------------
 */

var controller = query('.controller');
var addWrap = query('.addWrap');
var removeWrap = query('.removeWrap');
var ol = query('ol');
var li = ol.querySelectorAll('li');
var addButton = addWrap.querySelector('.add');
var removeButton = removeWrap.querySelector('.remove');


/**
 * --------------------------------
 * 메시지 출력 함수
 * --------------------------------
 */

function getMessage(messageResult) {
	var message = query('.message');
	var addMessage = message.appendChild(messageResult);
	addMessage.setAttribute('class', 'active');
	setTimeout(function() {
		message.removeChild(addMessage);
	}, 3000);
}

/**
  * --------------------------------
  * add 버튼
  * --------------------------------
  */

addButton.addEventListener('click', function() {
	// this : 클릭한 자신.
	var inputValue = this.previousElementSibling.value;

	if ( inputValue === '' ) {
		var messageResult = createEle('p', '할일 목록을 넣어 주세요');
		getMessage(messageResult);
		return;
	}

	for ( var i =0; i < li.length; i++ ) {
		// `li`내의 text node만 추출
		var textLi = li[i].firstChild.nodeValue;

		if ( inputValue === textLi ) {
			var messageResult = createEle('p', '이미 할일 목록이 있습니다');
			getMessage(messageResult);
			return;
		}
	}

	if ( inputValue !== textLi ) {
		var newList = createEle('li', inputValue);
		var addList = ol.appendChild(newList);
		// `textLi` 유사배열 출력. 배열로 전환
		li = Array.prototype.slice.apply(li);
		li.push(addList);
	}
});

/**
 * --------------------------------
 * remove 버튼 
 * --------------------------------
 */

removeButton.addEventListener('click', function() {
	// this : 클릭한 자신.
	var inputNum = this.previousElementSibling.value;

	if ( li[inputNum - 1] === undefined ) {
		var messageResult = createEle('p', '삭제할 번호를 확인하세요.');
		getMessage(messageResult);
		return;
	}
	
	ol.removeChild( li[inputNum-1] );
	li = Array.prototype.slice.apply(li);
	li.splice(inputNum-1, 1);
});