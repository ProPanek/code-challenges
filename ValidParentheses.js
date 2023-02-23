//https://www.codewars.com/kata/52774a314c2333f0a7000688/javascript

//Solution

function validParentheses(parens) {
    const array = parens.split("")
    const open = []
    const close = []
    
    for (let i = 0; i < array.length; i++ ){
      if(array[i] === "("){
        open.push(array[i])
      }
      
      if(open.length === 0 && array[i] === ")") {
        close.push(array[i])
      }
      
      if(array[i] === ")" && open.length > 0){
        open.shift()
        close.shift()
      }
    }
    
    return open.length === 0  && close.length === 0 ? true : false
  }