(function(oReq){
	'use strict';

	var oReq = new XMLHttpRequest();

	console.log(oReq);

	oReq.open("GET", "./data/codesquad.json");

	var githubList = document.querySelector('.github-list');
	var ajaxButton = document.querySelector('.button-ajax');

	function reqListener() {
		// console.log(this.responseText);
		// var dataText = this.responseText;
		if ( oReq.status !== 200 ) {
			githubList.innerHTML = '문제가 발생 되었습니다!'
		}

		var jsonObj = JSON.parse(oReq.responseText);

		for ( var key in jsonObj ) {
			// console.log(key);
			console.log(jsonObj[key]);
			githubList.innerHTML = githubList.innerHTML + '<dt>' + key + '</dt>' + '<dd>' + jsonObj[key] + '</dd>';
		}
	}

	ajaxButton.addEventListener('click', reqListener);
	oReq.send();
})(this.XMLHttpRequest);
