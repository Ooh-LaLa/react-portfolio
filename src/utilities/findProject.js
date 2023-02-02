import hyphenateWords from "./hyphenateWords"
import ProjectData from '../data/projects.js'



function findProject(str) {
   const title = ProjectData.find(project => {
      return hyphenateWords(project.title) === str
   })
   return title
}

export default findProject