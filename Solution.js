var multThree = 0;
var multFive = 0;
for(var i=1; i<1000; i++) {
    if(i % 3 === 0) {
          multThree += i;
	}
}
for(var j=1; j<1000; j++) {
    if(j % 5 === 0) {
        multFive +=j;
    }
}
console.log(multThree + multFive);
