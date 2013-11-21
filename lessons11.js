/**
 * Created by sasha on 21.11.13.
 */
!function(){
	console.log(typeof  new RegExp('d'));

	var first = /./g,
		second = new RegExp('.', 'g');
}();