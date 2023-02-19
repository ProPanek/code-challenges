function LongestWord(sen) { 

    function containsSpecialCharsOrNumber(str) {
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(str);
    }
  
    let longestWord = ""
    const arr = sen.split(" ")
    arr.forEach(word => {
      if(!containsSpecialCharsOrNumber(word)){
        if(longestWord.length < word.length){
          longestWord = word
        }
      }
    })
  
    // code goes here  
    return longestWord; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));