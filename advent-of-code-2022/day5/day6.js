const fs = require("fs");
const input = fs.readFileSync("./input.txt", { encoding: "utf-8"})
.replace(/\r/g, '')
.trimEnd();

const [rawStacks, rawMoves] = input.split("\n\n").map(x => x.split("\n"));

const parsedStacks = rawStacks.map((line) => [ ... line].filter((value, index) => index % 4 == 1));
const indexes = parsedStacks.pop();
const stacks = {};

for (const line of parsedStacks)
{
	for (let i = 0; i < line.length; i++)
	{
		if (line[i] != ' ')
		{
			if (!stacks[indexes[i]])
			{
				stacks[indexes[i]] = [];
			}
			stacks[indexes[i]].unshift(line[i])
		}
		
	}
}

const moves = []
for (const move of rawMoves)
{
	const match = /move (\d+) from (\d+) to (\d+)/g.exec(move);
	moves.push(
	{
		count: parseInt(match[1]),
		from: parseInt(match[2]),
		to: parseInt(match[3]),
	});
}

function part1()
{
	const stacksCopy = JSON.parse(JSON.stringify(stacks));
	for (const move of moves)
	{

		for (let i = 0; i < move.count; i++)
		{
			const crate = stacksCopy[move.from].pop();
			stacksCopy[move.to].push(crate);
		}
		
	}
	console.log(
		indexes.map(value => 
		{
			const stack = stacksCopy[value];
			return stack[stack.length -1];
		}).join(""));
}

function part2()
{
	const stacksCopy = JSON.parse(JSON.stringify(stacks));
	for (const move of moves)
	{
		const crates = stacksCopy[move.from].splice(-move.count, move.count);
		stacksCopy[move.to] = stacksCopy[move.to].concat(crates);
	}
	console.log(
		indexes.map(value => 
		{
			const stack = stacksCopy[value];
			return stack[stack.length -1];
		}).join(""));
}
part1();
part2();