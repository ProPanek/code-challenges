//https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

//Solution

function digPow(n, p){
    let currentSum = 0;
    String(n).split("").forEach((number ,index) => {
      currentSum += Math.pow(number, p + index)
    })
    
    let index = 1;
    for(;; index++ ){
      if(n * index === currentSum){
        break;
      }
      
      if(n * index > currentSum){
        index = -1
        break;
      }
    }
    
    return index
  }