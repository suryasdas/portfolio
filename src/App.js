import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Resume } from './components/Resume';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
