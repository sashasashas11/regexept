/**
 * Created by sasha on 21.11.13.
 */
!function(){

	console.log("1max asd sergiy".match(/max | sergiy/g)); // max , sergiy
	console.log("max asd sergiy".match(/\d(max | sergiy)/g)); //null
	console.log("1max asd sergiy".match(/\d(max | sergiy)/g)); //1max

}();