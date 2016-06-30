addEventListener('mousemove',function(event) {
	var dot = document.createElement('div');
	setTimeout(function(){
		dot.className = 'dot';
		dot.style.top = event.pageY + "px";
		dot.style.left = event.screenX + "px";
		document.body.appendChild(dot);
		console.log(event)
	},50);

	setTimeout(function () {
		 document.body.removeChild(dot) ;
	}, 400)
});

