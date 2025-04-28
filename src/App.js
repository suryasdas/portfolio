// import './App.css';
// import { Banner } from './components/Banner';
// import { NavBar } from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Resume } from './components/Resume';
// import { Skills } from './components/Skills';
// import { Projects } from './components/Projects';
// import { Contact } from './components/Contact';
// import { Footer } from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Dhara } from './components/Dhara';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Banner />
//                 <Skills />
//                 <Projects />
//                 <Contact />
//               </>
//             }
//           />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/dhara" element={<Dhara />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Banner } from './components/Banner';
import { NavBar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { HiddenRoute } from './components/HiddenRoute';
import { Footer } from './components/Footer';

function AppContent() {
  const { pathname } = useLocation();
  const hideNav = pathname === '/dhara';

  return (
    <div className="App">
      {/* only show NavBar if not on /dhara */}
      {!hideNav && <NavBar />}

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
        <Route path="/dhara" element={<HiddenRoute />} />
      </Routes>

      {/* you can also hide the footer if you want */}
      {!hideNav && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
