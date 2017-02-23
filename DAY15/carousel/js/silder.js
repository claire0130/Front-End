(function(global) {
	'use strict';

	var wrapper = document.querySelector('.wrapper');
	var sliderBox = wrapper.querySelector('.silder-box');
	var slider = sliderBox.querySelectorAll('.slider');
	var buttonList = wrapper.querySelector('.button-list');
	
	function eventButton(event) {
		var eTarget = event.target.className;
		var translateWidth = sliderBox.style.transform;
		var resultWidth = translateWidth.replace(/translate3d\((\-?\d+)px.+/, '$1');
		var valueWidth = parseInt(resultWidth);
		var direction = 600;

		if ( eTarget === 'previous-button' ) {
			var newWidth = valueWidth + direction;
			sliderBox.style.transform = 'translate3d(' + newWidth + 'px, 0px, 0px)';
		} else if ( eTarget === 'next-button' ) {
			var newWidth = valueWidth - direction;
			sliderBox.style.transform = 'translate3d(' + newWidth + 'px, 0px, 0px)';
		}
	}
	buttonList.addEventListener('click', eventButton);
})(this);