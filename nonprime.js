function isPrime(number){
    if(number<2){
        return false
    }
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false
        }
    }
    return true
}
function isnonPrimeumber(start,end){
  let  count=0
    for(number=start;number<=end;number++){
        if(!isPrime(number)){
            count++
        }
        else{
            count=0
        }
        if(count===3){
            console.log(number+1);
            count=0
        }
    }
}
isnonPrimeumber(10,70)