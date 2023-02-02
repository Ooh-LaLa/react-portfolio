
import './App.css';
import { Routes, Route } from "react-router-dom"
import Resume from './pages/Resume/Resume';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NavBar from './components/NavBar.jsx'
import Projects from './pages/Projects/Projects';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';


function App() {
  return (
    <>
    <NavBar/>
    <main>
   <Routes>
    <Route path="about" element={<About />}/>
    <Route path="/" element={<Home />}/>
    <Route path="contact" element={<Contact />}/>
    <Route path="/resume" element={<Resume />}/>
    <Route path="projects" element={<Projects />}/>
    <Route path="projects/:projectDetails" element={<ProjectDetails />}/>
   </Routes>
   </main>
   </>
  )
}

export default App;
