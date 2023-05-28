function nextfivemultiple(number,count){
    multiples=[]
    for(i=1;i<=count;i++){
        multiples.push(number*i)
    }
    return multiples
}
console.log(nextfivemultiple(7,5))