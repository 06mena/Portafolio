import logo from './logo.svg';
import './App.css';
import Navbar  from './Components/Navbar'
import Principal from './Components/Principal'
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills'
import Projects from './Components/Projects';
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Principal/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
