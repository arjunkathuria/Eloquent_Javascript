var protoRabbit = {
speak: function (line) {
	console.log("the " + this.type + " Rabbit says '" + line + " '");
	}	
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type="killer";
killerRabbit.speak("This is SPARTAA!")