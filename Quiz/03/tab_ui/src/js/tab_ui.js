(function(global, XHR){
	'use strict';

	var MESSAGE = {
		'STATUSERROR' : '문제가 발생 되었습니다!'
	}

	var getDom = {
		'tabUi' : document.querySelector('.tab-list'),
		'tabLink' : document.querySelectorAll('.tab-list a'),
		'tabActive' : document.querySelector('.tab-list .tab-active'),
		'tabContent' : document.querySelector('.tab-content'),
		'tabSection' : document.querySelector('.tab-contents .tab-content'),
		'selectMenuItem' : null
	};

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

				//[방법2] template로 분리해서 넣는 방법 - good
				var htmlScript = document.querySelector('#exampleTemplate');
				var template = htmlScript.innerText;
				var resultTitile = template.replace("{{name}}", content.title);
				var resultBody = template.replace("{{name}}", content.body);
				getDom.tabContent.innerHTML = resultTitile + resultBody;
			}
		},
		'viewPage' : function(event) {
			event.preventDefault();

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

	// 메뉴
	for ( var i = 0; i < getDom.tabLink.length; i++ ) {
		var menuLink = getDom.tabLink[i];
		menuLink.index = i;
		menuLink.addEventListener('click', eventAjax.viewPage);
	}

	// url
	menuLink.addEventListener('load', eventAjax.viewPage);

// ActiveXObject : IE 
})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));