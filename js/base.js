var ScrollFire = (function() {
	
var delta;
function Scrollit(){
		console.log("3")
		var length = window.scrollY
		if(window.scrollY  ===0 ){
			clearInterval(intervalid);
		}
		if(delta >= window.scrollY){
			delta=5;
		}
	console.log(length);
	delta = delta+5;
	
	 delta = window.scrollY  > delta ? delta : window.scrollY;
	window.scrollTo(window.scrollX, window.scrollY - delta);

}
function caller(){
	 delta=0;
	  intervalid = setInterval(Scrollit, 50);
	  console.log(window.scrollY);

}
	function init(id){
		console.log("2")
		var el = document.getElementById(id);
		console.log(el);
		if(id ==null){
			console.log("null che")
		}
		else{
		el.addEventListener('click',caller);
		}
	}
	return {
		
        init : init
    };


})();