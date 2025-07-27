function sum(x,res = 0){
    console.log(x,res)
    if(x){
        res = x+res
        return (y)=>sum(y,res)
    }else{
        return res
    }
}

console.log(sum(1)(2)(3)())