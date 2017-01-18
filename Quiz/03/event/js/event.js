(function() {
	'use strict';

	/**
	 * --------------------------------
	 * DOM 탐색 함수
	 * --------------------------------
	 */

	var container 	 = document.querySelector('.container');
	var searchBox 	 = container.querySelector('.fb-search');
	var searchInput  = searchBox.querySelector('.search-input');
	var buttonGroup  = searchBox.querySelector('.button-group');
	var cancelButton = searchBox.querySelector('.button-cancel');
	var message 	 = container.querySelector('.message');

	var eventHandler = {
		'focus' : function(event) {
			// var evt = event.target;
			var buttonGroupHidden = buttonGroup.setAttribute('class', 'hidden');
			var cancelButtonShow  = cancelButton.setAttribute('class', 'button button-cancel');
			
			this.buttonGroupHidden;
			this.cancelButtonShow;
		},
		'click' : function(event) {
			var cancelButtonHidden  = cancelButton.setAttribute('class', 'hidden');
			var buttonGroupShow  = buttonGroup.setAttribute('class', 'button-group');

			this.cancelButtonHidden;
			this.buttonGroupShow;
		}, 
		'input' : function(event) {
			var searchValue = searchInput.value;
			if ( searchValue.length >= 20 ) {
				message.setAttribute('class', 'message-show');
			}

			if ( searchValue.length <= 9 ) {
				message.setAttribute('class', 'message-hidden');
			}

		}
	};

	searchInput.addEventListener('focus', eventHandler.focus);
	cancelButton.addEventListener('click', eventHandler.click);
	searchInput.addEventListener('input', eventHandler.input);

})();
