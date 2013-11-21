/**
 * Created by sasha on 21.11.13.
 */
!function(){
	console.log("".match(/.+/)); //null
	console.log("".match(/./)); //null
	console.log("asd".match(/.+/)); //asd
	console.log("asd".match(/./)); //a
	console.log("".match(/.*/)); //пуста стровка
	console.log("asd".match(/.*/)); //asd

	console.log("".match(/.?/)); //""
	console.log("asd".match(/.?/)); //a

}();