// the unless construct is the opposite of the if construct, it runs unless the condition mentioned is satisfied

function unless (test,then) {
	if(!test) then();
}

function repeat(times,body) {

	for(var i=0;i<times;i++){body(i)};
}

repeat(7,function(n){
	unless(n%2,function(){
		console.log(n, "is even" );
	})
})