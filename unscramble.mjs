import * as fs from "fs";
import {getSubsets} from "./subset.mjs";

const input = process.argv[2];

//const words = fs.readFileSync("english3.txt").toString().split("\n").map(v=>v.trim()).filter(v=>v.length>1);
const words = fs.readFileSync("engmix.txt").toString().split("\n").map(v=>v.trim()).filter(v=>v.length>1);

//console.log(words);

//build search tree
const mushTable = new Map();
for(let word of words){
    const mush = word.split("").sort().join("");
    if(!mushTable.has(mush)){
        mushTable.set(mush,[word]);
    }else{
        mushTable.get(mush).push(word);
    }
}

outer:
for(let subset of getSubsets([],input.split(""))){
    //console.log(subset);
    const result = [];
    for(let sub of subset){
        let arr;
        if(arr = mushTable.get(sub.sort().join(""))){
            //console.log(arr);
            result.push(arr);
        }else{
            continue outer;
        }
    }
    console.log(result);
}

//console.log(mushTable.get(input.split("").sort().join("")));



