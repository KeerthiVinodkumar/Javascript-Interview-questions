let arr=[1,2,2,3,4,2];
function getUniqueArray(arr){
    let uniqueArr=[];
    
    for(ele of arr){
        if(uniqueArr.indexOf(ele)==-1){
            uniqueArr.push(ele)
        }
    }
    return uniqueArr
}

console.log(getUniqueArray(arr))