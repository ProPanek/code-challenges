function FirstFactorial(num) { 

  let sum = 1

  for(let i=1; i <= num; i++){
    sum = i * sum
  }

  // code goes here  
  return sum; 

}
   
// keep this function call here 
console.log(FirstFactorial(readline()));