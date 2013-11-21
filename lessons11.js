/**
 * Created by sasha on 21.11.13.
 */
!function(){

	console.log("\nasdas\n44".match(/^\d/)); //null
	console.log("\nasdas\n44".match(/^\d/m)); // 44
	console.log("asdas44dd".match(/^\d/)); //null
	console.log("1asdasdd".match(/^\d/)); //1
}();