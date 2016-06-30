var lastX;
var rect = document.body.querySelector("div");
rect.addEventListener('mousedown', function (event) {
	if (event.which == 1) {
		lastX = event.pageX;
		addEventListener('mousemove',moved);
				event.preventDefault();
	}
});
function buttonsPressed(event) {
	if (event.buttons == null)
			return event.which != 0;
	else
			return event.buttons != 0;

}
function moved(event) {
	if(!buttonsPressed(event)){
		removeEventListener('mousemove', moved);
	} else{
		var distX = event.pageX - lastX;
		var newWidth = Math.max(10, rect.offsetWidth + distX);
		rect.style.width = newWidth + 'px';
		console.log(rect.offsetWidth, event.offsetDirection);
		lastX = event.pageX;
	}

}