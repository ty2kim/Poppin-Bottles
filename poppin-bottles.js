'use strict';

var poppinBottles = function(money){
	console.log(`Your investment: $${money}`);

	if(money < 2){
		console.log("The minimum investment is $2");
		return;
	}

	var numRecyle = 1;
	var bottles = money / 2;
	var caps = 0;
	var curRedeemed = 0;
	var bottlesLeft = bottles;
	var capsLeft = bottles;
	var redeemedByBottles = 0;
	var redeemedByCaps = 0;
	var totalRedeemedByBottles = 0;
	var totalRedeemedByCaps = 0;
	var totalRedeemed = 0;

	while(true){
		console.log(`-------------------------------------- <Recycle: #${numRecyle}>`);

		bottles = curRedeemed + bottlesLeft;
		caps = curRedeemed + capsLeft;
		console.log(`Bottles to recycle: ${bottles}, Caps to recycle: ${caps}`);

		redeemedByBottles = Math.floor(bottles / 2);
		redeemedByCaps = Math.floor(caps / 4);
		curRedeemed = redeemedByBottles + redeemedByCaps;
		totalRedeemedByBottles += redeemedByBottles;
		totalRedeemedByCaps += redeemedByCaps;
                console.log(`Number of redeemed bottles from recycling bottles: ${redeemedByBottles}`);
                console.log(`Number of redeemed bottles from recycling caps: ${redeemedByCaps}`);
		console.log(`Number of redeemed bottles: ${curRedeemed}`);

		bottlesLeft = bottles % 2;
		capsLeft = caps % 4;
		console.log(`Bottles left: ${bottlesLeft}, Caps left: ${capsLeft}`);

		totalRedeemed += curRedeemed;
		console.log(`Total number of redeemed bottles so far: ${totalRedeemed}`);

		numRecyle++;
		console.log("----------------------------------------------------")

		if(curRedeemed === 0){
			break;
		}
	}

	console.log("<Recycle Report>");
	console.log(`Your investment: $${money}`);
	console.log(`${money/2} bottles were purchased`);
	console.log(`Number of obtained bottles by recycling bottles: ${totalRedeemedByBottles}`);
	console.log(`Number of obtained bottles by recycling caps:    ${totalRedeemedByCaps}`);
	console.log(`Total number of obtained bottles by recycling:   ${totalRedeemed}`);

}

poppinBottles(process.argv[2]);

/*
bottles = 10
caps = 10
curRedeemed = 5 + 2 = 7
bottlesLeft = 0
capsLeft = 2
totalRedeemed = 7

bottles = 7
caps = 7 + 2 = 9
curRedeemed = 3 + 2 = 5
bottlesLeft = 1
capsLeft = 1
totalRedeemed = 12

bottles = 5 + 1 = 6
caps = 5 + 1 = 6
curRedeemed = 3 + 1 = 4
bottlesLeft = 0
capsLeft = 2
totalRedeemed = 16

bottles = 4
caps = 4 + 2 = 6
curRedeemed = 2 + 1 = 3
bottlesLeft = 0
capsLeft = 2
totalRedeemed = 19

bottles = 3
caps = 3 + 2 = 5
curRedeemed = 1 + 1 = 2
bottlesLeft = 1
capsLeft = 1
totalRedeemed = 21

bottles = 2 + 1 = 3
caps = 2 + 1 = 3
curRedeemed = 1
bottlesLeft = 1
capsLeft = 3
totalRedeemed = 22

bottles = 1 + 1 = 2
caps = 1 + 3 = 4
curRedeemed = 1 + 1 = 2
bottlesLeft = 0
capsLeft = 0
totalRedeemed = 24

bottles = 2
caps = 2
curRedeemed = 1
bottlesLeft = 0
capsLeft = 2
totalRedeemed = 25

bottles = 1
caps = 1 + 2 = 3
curRedeemed = 0
bottlesLeft = 1
capsLeft = 3
totalRedeemed = 25
(break)
*/
