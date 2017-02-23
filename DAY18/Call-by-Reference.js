'use strict';

/**
 * --------------------------------
 * Call by reference
 * --------------------------------
 */

// ex1.
a = [1, 2, 3];
b = a; 
a.push(4);
console.log(b); // 1, 2, 3, 4

// ex2.
a = [1, 2, 3];
b = a; 
a.push(4);
a = [5, 6, 7];
b.push(5);
console.log(a); // 5, 6, 7
console.log(b); // 1, 2, 3, 5

// ex3.
function foo(arr) {
	arr.push('foo');
	arr = [4, 5, 6];
	arr.push('bar');
	console.log('arr', arr); // [4, 5, 6, "bar"]
}

var a = [1, 2, 3];
foo(a);
console.log('a', a); // [1, 2, 3, "foo"]