//https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

//Solution

function findNb(m) {
    let currentSum = 0
    let cubes = -1
    for(let n = 1;;n++){
      currentSum += Math.pow(n, 3)
      
      if(currentSum === m){
        cubes = n
        break;
      }
      
      if(currentSum > m){
        break;
      }
    }
    return (cubes);
}
