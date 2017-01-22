(function() {
	'use strict';

	var getDom = {
		'container'	   : document.querySelector('.container'),
		'searchBox'    : document.querySelector('.fb-search'),
		'searchInput'  : document.querySelector('.search-input'),
		'buttonGroup'  : document.querySelector('.button-group'),
		'cancelButton' : document.querySelector('.button-cancel'),
		'message'	   : document.querySelector('.message')
	}

	// console.log(getDom.container);

	var eventHandler = {
		'focus' : function(event) {
			// var evt = event.target;
			var buttonGroupHidden = getDom.buttonGroup.setAttribute('class', 'hidden');
			var cancelButtonShow  = getDom.cancelButton.setAttribute('class', 'button button-cancel');
			
			this.buttonGroupHidden;
			this.cancelButtonShow;
		},
		'click' : function(event) {
			var cancelButtonHidden  = getDom.cancelButton.setAttribute('class', 'hidden');
			var buttonGroupShow  	= getDom.buttonGroup.setAttribute('class', 'button-group');

			this.cancelButtonHidden;
			this.buttonGroupShow;
		}, 
		'input' : function() {
			var searchValue = getDom.searchInput.value;
			var searchValueLen = searchValue.length;
			if ( searchValueLen >= 20 ) {
				getDom.message.setAttribute('class', 'message-show');
			}

			if ( searchValueLen <= 19 ) {
				getDom.message.setAttribute('class', 'message-hidden');
			}
		}
	};

	getDom.searchInput.addEventListener('focus', eventHandler.focus);
	getDom.cancelButton.addEventListener('click', eventHandler.click);
	getDom.searchInput.addEventListener('input', eventHandler.input);
})();