import './App.css';
import {BrowserRouter,Outlet,Route,Routes} from 'react-router-dom'
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<>contact</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
