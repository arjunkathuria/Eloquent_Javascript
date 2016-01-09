function min(a,b){
	if(a>b) 
		return b;
	else if (a==b)
		return "Equal";
	else
		return a;
}

console.log(min(5,10));
