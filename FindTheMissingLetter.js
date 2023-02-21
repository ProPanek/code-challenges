function findMissingLetter(array)
{
  const isUpperCase = array[0] === array[0].toUpperCase()
  const charCodes = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = charCodes.map((x) => isUpperCase ? String.fromCharCode(x).toUpperCase() : String.fromCharCode(x).toLowerCase());
  const findFirstIndex = alphabet.indexOf(array[0])
  
  let missingLetter = ""
  
  alphabet.slice(findFirstIndex).some(((v, i) =>{ 
    if (v !== array[i]){
      return missingLetter = v
    }
  }))
  return missingLetter
}
