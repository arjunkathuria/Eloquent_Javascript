function chicken(){
	return egg();
}

function egg(){
	return chicken();
}

console.log("who came first " + chicken());
