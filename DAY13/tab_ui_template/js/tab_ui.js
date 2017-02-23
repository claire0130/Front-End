(function(global, XHR){
	'use strict';

	/**
	 * --------------------------------
	 * Code Review
	 * 1. `xhr` 객체는 맨위에 선언하지 말고 ajax가 실행 될 시점에 넣어라
	 * 2. `viewPage`의 있는 `this`는 메뉴의 클릭한 자신인데 명시적으로 `event.targe`으로 써라. 
	 * ㄴ> `viewPage`의 있는 `this`가 `viewPage`를 가리킨다.
	 * 3. 메뉴를 `for문` 돌리지 말고 `이벤트 위임`을 사용하라.
	 * 4. 에러 문구를 따로 분리하라.
	 * --------------------------------
	 */

	var MESSAGE = {
		'STATUSERROR' : '문제가 발생 되었습니다!'
	}

	var getDom = {
		'tabUi' : document.querySelector('.tab-list'),
		'tabLink' : document.querySelectorAll('.tab-list a'),
		'tabActive' : document.querySelector('.tab-list .tab-active'),
		'tabSection' : document.querySelector('.tab-contents .tab-content'),
		'tabTitle' : document.querySelector('#tab-overview'),
		'selectMenuItem' : null
	};

	 // console.log(getDom.tabTitle); //p

	var eventAjax = {
		'xhrStatus' : function() {
			if ( this.status !== 200 ) {
				getDom.tabSection.innerHTML = MESSAGE.STATUSERROR;
				return;
			}

			if ( this.status === 200 ) {
				var content = JSON.parse(this.responseText);
				// [방법1] HTML을 스크립트 소스에 넣는 방법 - bad
				// getDom.tabSection.innerHTML = 
				// 	'<p class="content-title">' + content.title + '</p>' + 
				// 	'<p class="content-body">' + content.body + '</p>';

				// [방법2] template로 분리해서 넣는 방법
				// var htmlP = '<p>{{%title%}}</p>';
				// var template = getDom.tabSection.innerHTML;
				// var resultTitile = htmlP.replace(htmlP, content.title);
				// var resultBody = htmlP.replace(htmlP, content.body);
				// getDom.tabTitle.innerHTML = resultTitile + resultBody;

				// [방법3] template로 분리해서 넣는 방법 
				// 마크업에 <script type="exampleTemplate" id="exampleTemplate"><p>{{name}}</p></script>
				var htmlScript = document.querySelector('#exampleTemplate');
				var template = htmlScript.innerText;
				var resultTitile = template.replace("{{name}}", content.title);
				var resultBody = template.replace("{{name}}", content.body);
				getDom.tabTitle.innerHTML = resultTitile + resultBody;
			}
		},
		'viewPage' : function(event) {
			// event.preventDefault();
			// console.log(event.target);

			var viewUrl = [1, 2, 3, 4];
			var viewUrlIdx = viewUrl[this.index];

			var page = 'http://jsonplaceholder.typicode.com/posts/' + viewUrlIdx;

			if ( getDom.selectMenuItem != null ) {
				getDom.selectMenuItem.classList.remove('tab-active');
			}

			getDom.selectMenuItem = event.target;
			getDom.selectMenuItem.classList.add('tab-active');
			
			var xhr = new XMLHttpRequest();
			xhr.open('GET', page);
			xhr.send();

			// status
			xhr.addEventListener('load', eventAjax.xhrStatus);

			// url 뒷부분 표기
			global.location.hash = viewUrlIdx;
		}
	};

	// [메뉴] for로 돌리지 말고, 이벤트 위임 사용하라. - 수정하기!!!
	for ( var i = 0; i < getDom.tabLink.length; i++ ) {
		var menuLink = getDom.tabLink[i];
		menuLink.index = i;
		menuLink.addEventListener('click', eventAjax.viewPage);
	}

	// url
	menuLink.addEventListener('load', eventAjax.viewPage);

// ActiveXObject : IE 
})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));