import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Menu from './components/Menu'
import Landing from './components/Landing'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about-me" element={<Aboutme />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
