import './App.css';
import BasicExample from './Components/NavScrollExample';
import {Router, Route, Routes} from 'react-router-dom';
 
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ProjectsPage from './Pages/ProjectsPage';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';


function App() {
  return (
    <div>
   
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route path="/projects" Component={ProjectsPage}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/resume" Component={Resume}/>
          <Route path="/skills" Component={Skills}/>
        </Routes>

    </div>
  );
}

export default App;
