var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var input = text.split(/[\s,-]+/);

function part1(){
	var total = 0;
	var count = 0;

	for (let i = 0; i < input.length / 4; i++)
	{
		if ( parseInt(input[count]) >= parseInt(input[count+2]) && parseInt(input[count+1]) <= parseInt(input[count+3]) )
			total++;
		else if ( parseInt(input[count]) <= parseInt(input[count+2]) && parseInt(input[count+3]) <= parseInt(input[count+1]))
			total++;

		count += 4;
	}
	console.log(total);
}

function part2(){

	var total = 0;
	var count = 0;

	for (let i = 0; i < input.length / 4; i++)
	{
		if (parseInt(input[count+1]) <= parseInt(input[count+3]) && parseInt(input[count+1]) >= parseInt(input[count+2]))
			total++;
		else if (parseInt(input[count+3]) <= parseInt(input[count+1]) && parseInt(input[count+3]) >= parseInt(input[count]))
			total++;


		count += 4;
	}
	console.log(total);
}

part1();
part2();