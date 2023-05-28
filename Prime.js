function isPrime(number){
    if(number<2){
        return false
    }
    for(i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false
        }
    }
    return true
}
function isPrimeNumber(start,end){
    const primenumbers=[]
    for(let number=start;number>=end;number--){
        if(isPrime(number)){
            primenumbers.push(number)
        }
    }
    console.log(primenumbers);
}
isPrimeNumber(70,3)