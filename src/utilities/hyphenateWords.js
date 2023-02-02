import ProjectData from './data/projects.js'

function hyphenateWords(str) {
  
  str = str.replace(/\s+/g, "_").toLowerCase()
  return str

}

export default hyphenateWords