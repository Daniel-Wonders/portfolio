import './App.css';
import {BrowserRouter,Outlet,Route,Routes} from 'react-router-dom'
import Layout from "./pages/Layout"
import Home from "./pages/Home"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='projects' element={<>projects</>} />
            <Route path='contact' element={<>contact</>} />
            <Route path='about' element={<>About</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
