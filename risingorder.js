function isAscendingorder(number){
    digits= number.toString().split('');
    for(let i=1; i<=digits.length;i++){
        if(parseInt(digits[i])<parseInt(digits[i-1])){
            return false
        }

    }
    return true
}
console.log(isAscendingorder(1231))