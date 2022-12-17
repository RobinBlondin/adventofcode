const fs = require("fs");
const input = fs.readFileSync("./input.txt", { encoding: "utf-8"})
.replace(/\r/g, '')
.trim();

function part1()
{
	var count = 5
	var sequence = [input[0], input[1], input[2], input[3]];
	
	for (let i = 4; i < input.length; i++)
	{
		sequence.push(input[i]);
		sequence.shift();
		
		function checkIfArrayIsUnique(sequence) {
  			return sequence.length === new Set(sequence).size;
		}
		if (checkIfArrayIsUnique(sequence) === true)
			break;

		count++;
	}
	
	console.log(count)
}

function part2()
{
	var count = 15
	var sequence = [input[0], input[1], input[2], input[3], input[4], input[5], input[6],input[7], input[8], input[9], input[10], input[11], input[12], input[13]];
	
	for (let i = 14; i < input.length; i++)
	{
		sequence.push(input[i]);
		sequence.shift();
		
		function checkIfArrayIsUnique(sequence) {
  			return sequence.length === new Set(sequence).size;
		}
		if (checkIfArrayIsUnique(sequence) === true)
			break;

		count++;
	}
	
	console.log(count)
}

part1();
part2();
