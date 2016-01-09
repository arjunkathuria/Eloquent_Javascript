function speak(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};
var newRabbit = {type: "new"}

// whiteRabbit.speak("Oh my ears and whiskers, " +
//                   "how late it's getting!");

// fatRabbit.speak("I could sure use a carrot right now.");

speak.apply(newRabbit,["mnuwahaha, look what i've got here"])

speak.call({type: "OLD"},"Buwahahahah :D ")
