export const getSubsets = function*(base,arr){
    //recursively partition in 2
    /*
    000 0
    001 1
    010 2
    011 3
    100
    101
    110
    111
    */
    for(let i = 0; i < (1<<(arr.length-1));i++){
        let sub1 = [];
        let sub2 = [];
        for(let j = 0; j < arr.length; j++){
            if((i>>>j)&1){
                sub2.push(arr[j]);
            }else{
                sub1.push(arr[j]);
            }
        }
        let subsub = [...base,sub1];
        if(sub2.length === 0){
            yield subsub;
        }else{
            yield* getSubsets(subsub,sub2);
        }
    }
};

/*
for(let subset of subsets([],[1,2,3])){
    //console.log(subset);
}
console.log("modmail");
let cnt = 0;
for(let subset of subsets([],"modmail".split(""))){
    //console.log(subset);
    cnt++;
}
console.log(cnt);
*/

