function sumOfArray(array)
{
    if(array.length===1)
    {
        return array[0];
    }
    else{
        let sum=array.pop();
        return sum+sumOfArray(array);

    }
    
}
console.log(sumOfArray([0,4,5,1,3,2]));