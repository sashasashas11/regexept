/**
 * Created by sasha on 21.11.13.
 */
!function(){

	console.log("solid 23px #rad".match(/(?:\d+|asd)px #(\w+)/)); //"23px", "23"
	console.log("solid 23px #rad".match(/(?:\d+|asd)px #([a-z])/)); //"23px", "23"

}();