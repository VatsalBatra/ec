var searchbox = (function() {
	console.log("10")
function widthinc(){
	console.log("9")
	var y1=document.getElementById("search_box")
	y1.style.width = "300px";
}
function init(id){
	var el = document.getElementById(id);
	el.addEventListener('click',widthinc);
		
	console.log("8")
}
return {
		
        init : init
    };

})();