var table = [76,9,4,1];

function phi(table) {
	var num = table[0]*table[3]-table[1]*table[2];
	var den = Math.sqrt((table[0]+table[1])* (table[3]+table[2])*(table[0]+table[2])*(table[1]+table[3]));

	var ans = num/den;
	return(ans);

}


console.log(phi(table));