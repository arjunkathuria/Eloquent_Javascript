// when an element gains focus, the browser fires a "focus" event on it. When it loses focus, a "blur" event fires.
// unlike some other events, these two events do not propagate. A handler on the parent node is not notified when a 
// child element gains or loses focus.

var help = document.querySelector("#help");
var fields = document.querySelectorAll('input');

for (var i = 0; i < fields.length; i++){
   fields[i].addEventListener('focus', function (event) {
      var text = event.target.getAttribute('data-help');
      help.textContent = text;
   });

   fields[i].addEventListener("blur", function (event) {
      help.textContent = "";
   })
}

addEventListener("load", function (event) {
   console.log("Page is fully loaded, Biatch! B|")
})

addEventListener('beforeunload',function (event) {
   event.returnValue = " are you sure bruh ?";
});