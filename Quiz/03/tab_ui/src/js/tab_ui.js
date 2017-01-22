(function(global, XHR){
	'use strict';

	var xhr = new XMLHttpRequest();

	var getDom = {
		'tabLink' : document.querySelectorAll('.tab-list a'),
		'tabActive' : document.querySelector('.tab-list .tab-active'),
		'tabSection' : document.querySelector('.tab-contents .tab-content'),
		'selectMenuItem' : null
	};

	var eventAjax = {
		'xhrStatus' : function() {
			if ( this.status !== 200 ) {
				getDom.tabSection.innerHTML = '문제가 발생 되었습니다!';
				return;
			}

			if ( this.status === 200 ) {
				var content = JSON.parse(this.responseText);
				getDom.tabSection.innerHTML = 
					'<p class="content-title">' + content.title + '</p>' + 
					'<p class="content-body">' + content.body + '</p>';
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
			getDom.selectMenuItem = this;
			getDom.selectMenuItem.classList.add('tab-active');

			xhr.open('GET', page);
			xhr.send();
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

	// status
	xhr.addEventListener('load', eventAjax.xhrStatus);

	// url
	menuLink.addEventListener('load', eventAjax.viewPage);

// ActiveXObject : IE 
})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));