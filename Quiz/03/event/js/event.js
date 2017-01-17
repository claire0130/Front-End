(function() {
	'use strict';

	var container 	 = document.querySelector('.container');
	var searchBox 	 = container.querySelector('.fb-search');
	var searchInput  = searchBox.querySelector('.search-input');
	var buttonGroup  = searchBox.querySelector('.button-group');
	var cancelButton = searchBox.querySelector('.button-cancel');
	var message 	 = container.querySelector('.message');

	// var ERROR_MSG = {
	// 	'INPUT' : {
	// 		'EXIST_INPUT' : '10자만 이상 입력이 가능합니다.'
	// 	}
	// }

	var eventHandler = {
		'focus' : function() {
			buttonGroup.setAttribute('class', 'hidden');
			cancelButton.setAttribute('class', 'button button-cancel');
		},
		'click' : function() {
			cancelButton.setAttribute('class', 'hidden');
			buttonGroup.setAttribute('class', 'button-group');
		}, 
		'input' : function() {
			var searchValue = searchInput.value;
			if ( searchValue.length >= 20 ) {
				// var messageResult = ERROR_MSG.INPUT.EXIST_INPUT;
				// console.log(messageResult);
				message.setAttribute('class', 'message-show');
			}

			if ( searchValue.length <= 19 ) {
				message.setAttribute('class', 'message-hidden');
			}

		}
	};

	searchInput.addEventListener('focus', eventHandler.focus);
	cancelButton.addEventListener('click', eventHandler.click);
	searchInput.addEventListener('input', eventHandler.input);
})();