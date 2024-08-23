import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
    </div>
  );
} 

export default App;
