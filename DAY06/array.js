'use strict';

/**
 * -----------------------------------------------------------------------------------------------
 * .forEach() VS .map() VS .filter()의 차이점.
 * ㄴ> .forEach(): 반환 값이 없다. undefined
 * ㄴ> .map()    : 반환 값이 있다. 새로운 배열로 반환
 * ㄴ> .filter() : 반환 값이 있다. 새로운 배열로 반환 -> true를 반환, 그렇지 않으면 false
 * -----------------------------------------------------------------------------------------------
 * .forEach() VS .map() VS .filter()의 공통점
 * 매개변수가 callback 이고 callback을 실행할 때 this로서 사용하는 값.
 * 매개변수로 들어간 callback 함수의 매개변수는 item(element), index, array 순서로 들어간다.
 * IE하위버전(IE 6, 7, 8)에 쓸 수 없다. - ECMASCript 5 Edition : 크로스브라우징 이슈 발생 => 하위브라우저 폴리필 사용(작은 코드)
 * -----------------------------------------------------------------------------------------------
 */

 // for > forEach() : 미묘한 속도 차이가 있다. 'for'가 조금 빠르다.
 // each(): http://api.jquery.com/jquery.each/
 // jQuery 사용하는 것보다 polyfill 코드를 사용하는것이 좋다.

var arrList = ['크롱', 'jk', 'honux', ['코니', '샐리'], '브라이언'];

/**
 * --------------------------------------------------------------------------------
 * .forEach [Array] : 없는 것을 추상화.
 * IE하위버전(IE 6, 7, 8)에 쓸 수 없다. - ECMASCript 5 Edition : 크로스브라우징 이슈
 * 아이템, 인덱스, 배열 순서로 가져온다
 * forEach() return을 반환 할 수 없다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * --------------------------------------------------------------------------------
 */

var for_result = arrList.forEach(function(item, index, arr) {
	console.log('item: ', item);
	console.log('index: ', index);
	console.log('arr: ', arr);
	return 'item ' + index + ':' + item;
});
console.log(for_result); // undefined


console.log('-----------------------------------------------------------------------');

/**
 * --------------------------------------------------------------------------------------------
 * .map()
 * 아이템, 인덱스, 배열 순서로 가져온다
 * 반환 값이 있다. 배열로 반환
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * --------------------------------------------------------------------------------------------
 */

var map_result = arrList.map(function(item, index, arr) {
	console.log('item: ', item);
	console.log('index: ', index);
	console.log('arr: ', arr);
	return item + '은 ' + index + '번째 원소입니다';
});
console.log(map_result); // [크롱은 0번째 원소입니다"]

console.log('-----------------------------------------------------------------------');

/**
 * --------------------------------------------------------------------------------------------------------
 * filter()
 * 아이템, 인덱스, 배열 순서로 가져온다
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter_result
 * --------------------------------------------------------------------------------------------------------
 */

var filter_result = arrList.filter(function(item, index, arr) {
	console.log('item: ', item);
	console.log('index: ', index);
	console.log('arr: ', arr);
});
console.log(filter_result);

console.log('-----------------------------------------------------------------------');
