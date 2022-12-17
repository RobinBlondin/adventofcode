const fs = require("fs");
const input = fs.readFileSync("./input.txt", { encoding: "utf-8"})
.replace(/\r/g, '')
.split('\n');

function part1(){

    var elfCal = 0;
    var mostCal = 0;

    for (const line of input)
    {
        if (line == '')
        {
            if (elfCal > mostCal)
            {
                mostCal = elfCal;
                elfCal = 0;
            }
            else
                elfCal = 0;
        }
        else
            elfCal += parseInt(line);
    }
    console.log(mostCal);
}

function part2()
{
    var elfCal = 0;
    var sum = 0;
    var elfCalArr = [3, 2, 1];

    for (const line of input)
    {
        if (line == '')
        {
            if (elfCal > Math.min.apply(Math, elfCalArr))
            {

                elfCalArr[elfCalArr.indexOf(Math.min.apply(Math, elfCalArr))] = elfCal;
                elfCal = 0;
            }
            else
                elfCal = 0;
        }
        else
            elfCal += parseInt(line);
    }
    sum = elfCalArr[0] + elfCalArr[1] + elfCalArr[2];
    console.log(sum);
}
part1();
part2();
