

function hyphenateWords(str) {
  
  str = str.replace(/\s+/g, "_").toLowerCase()
  return str

}

export default hyphenateWords