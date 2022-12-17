const fs = require("fs");
const input = fs.readFileSync("./input.txt", { encoding: "utf-8"})
.replace(/\r/g, '')
.split('\n');

function part1(){
	
	var total = 0;

	for(let i = 0; i < input.length; i++)
	{

		switch (input[i].charAt(2))
		{
		case 'X':
			total += 1;
			break;
		case 'Y':
			total += 2;
			break;
		case 'Z':
			total += 3;
			break; 
		}

		if (input[i].includes('A X') || input[i].includes('B Y') || input[i].includes('C Z'))
			total += 3;
		else if (input[i].includes('A Y') || input[i].includes('B Z') || input[i].includes('C X'))
			total += 6;
	}
	console.log(total);
}

function part2(){

	var total = 0;

	for(let i = 0; i < input.length; i++)
	{
		if (input[i].charAt(2) == 'X')
		{
			switch (input[i].charAt(0))
			{
			case 'A':
				total += 3;
				break;
			case 'B':
				total += 1;
				break;
			case 'C':
				total += 2;
				break; 
			}
		}

		else if (input[i].charAt(2) == 'Y')
		{
			total += 3;

			switch (input[i].charAt(0))
			{
			case 'A':
				total += 1;
				break;
			case 'B':
				total += 2;
				break;
			case 'C':
				total += 3;
				break; 
			}
		}

		else if (input[i].charAt(2) == 'Z')
		{
			total += 6;

			switch (input[i].charAt(0))
			{
			case 'A':
				total += 2;
				break;
			case 'B':
				total += 3;
				break;
			case 'C':
				total += 1;
				break; 
			}
		}				
	}
	console.log(total);
}

part1();
part2();