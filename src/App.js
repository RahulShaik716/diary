import './App.css';
import Write from './components/Write';
import List from './components/List';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Write/>}/>
      <Route path="/list" element={<List/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
