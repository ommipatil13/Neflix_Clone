import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.scss';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";
import Popular from "./Components/Popular/Popular";
import Toprated from "./Components/Toprated/Toprated";

function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/movies" element={<Movies />} /> 
        <Route path="/popular" element={<Popular/>} /> 
        <Route path="/toprated" element={<Toprated/>} /> 
      </Routes>
    </Router>
    
  );
}

export default App; 
