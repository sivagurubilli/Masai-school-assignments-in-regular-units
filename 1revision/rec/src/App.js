import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import {Routes,Route} from "react-router-dom"
import Puppy from './components/puppy/Puppy';

function App() {
  return (
     <div>


<Routes>
  <Route path ="/" element={<Home/>}/>
  <Route path="/puppy/:name"  element={<Puppy />}/>
</Routes>
     </div>
   
  );
}

export default App;
