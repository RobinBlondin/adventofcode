const fs = require("fs");
const input = fs.readFileSync("./input.txt", { encoding: "utf-8"})
.replace(/\r/g, '')
.split('\n');

function part1(){

    const fileSizeMatch = new RegExp(/[0-9]+/);
    const dirForward = new RegExp(/\$ cd [a-z]+/);
    const dirBackward = new RegExp(/\$ cd \.\./)

    var temp = 0;
    var result = 0;
    var cd = 0;
    
    for (let i = 0; i < input.length; i++)
    {
        if (dirForward.test(input[i]) == true)
            cd++;
        else if (dirBackward.test(input[i]) == true)
            cd--;
        
        //console.log(cd > 0);

        if (cd > 0)
        {   
            if (fileSizeMatch.test(input[i]) == true)
                temp += cd * (parseInt(input[i].match(fileSizeMatch)));
            
            console.log(temp);
        }
        else if (cd === 0)
        {
            if (temp > 0 && temp < 100000)
            {
                result += temp;
                temp = 0;
            }
            else
                temp = 0;
        }
    }
    console.log(result);
}

function part2(){

}

part1();
part2();