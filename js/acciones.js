// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.beep (1);
		});//tap beep
		
		$('#vivrar').tap(function(){
			navigator.notification.vibrate (1000);
		});//tap vivrar
		
	},false);//deviceready
});//ready