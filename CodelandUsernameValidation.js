function CodelandUsernameValidation(str) { 

    function containsSpecialChars(str) {
      const specialChars = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(str);
    }
  
    const strArray = Array.from(str)
  
    if(strArray.length <= 4 || strArray.length >= 25){
      return false
    }
  
    if(!isNaN(strArray[0]) || strArray[strArray.length -1] === "_"){
      return false
    }
  
    if(containsSpecialChars(str)){
      return false
    }
  
    // code goes here  
    return true; 
  
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));