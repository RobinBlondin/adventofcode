var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var input = text.split("\n");

function part1(){

	var compartmentOne = '';
	var compartmentTwo = '';
	var total = 0;
	var letters = [];
	var count = 0;


	for (let i = 0; i < input.length; i++)
	{
		compartmentOne = input[i].slice(0, input[i].length / 2);
		compartmentTwo = input[i].slice(input[i].length / 2);

		for (let j = 0; j < compartmentOne.length; j++)
		{
			for (let h = 0; h < compartmentTwo.length; h++)
			{
				if (compartmentOne.charAt(j) == compartmentTwo.charAt(h))
				{
					letters.push(compartmentOne.charAt(j));
					if (compartmentOne.charCodeAt(j) > 90)
					{
						total += compartmentOne.charCodeAt(j) - 96;
					}
					else
					{
						total += compartmentOne.charCodeAt(j) - 38;
					}
					count = 1;
					break;

				}

			}
			if (count == 1)
				break;
		}
		count = 0;
	}
	console.log(total);
}

function part2(){

	var total = 0;
	var rucksack = '';
	var count = 0;

	for (let i = 0; i < input.length / 3; i++)
	{	
		rucksack = input[count];
		for (let j = 0; j < rucksack.length; j++)
		{

			if (input[count+1].indexOf(rucksack[j]) > -1 && input[count+2].indexOf(rucksack[j]) > -1)
			{
				if (rucksack.charCodeAt(j) > 90)
					total += rucksack.charCodeAt(j) - 96;
				else
					total += rucksack.charCodeAt(j) - 38;
				break; 
			}
		}
		count += 3;
	}
	console.log(total)
}

part1();
part2();