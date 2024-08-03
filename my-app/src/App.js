import './App.css';
import {BrowserRouter,Outlet,Route,Routes} from 'react-router-dom'
import Layout from "./pages/Layout"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<>home</>}/>
            <Route path='projects' element={<>projects</>}/>
            <Route path='contact' element={<>contact</>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
