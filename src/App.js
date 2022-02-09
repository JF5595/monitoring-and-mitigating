import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About'
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Analytics from './Components/Analytics.js'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="analyze" element={<Analytics/>}/>
      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;
