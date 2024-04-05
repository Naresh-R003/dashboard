import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import IWantToHire from './pages/IWantToHire/IWantToHire';
import Enginners from './pages/Enginners/Enginners';
import Jobs from './pages/Jobs/Jobs';
import Projects from './pages/Projects/Projects';
import Reports from './pages/Reports/Reports';
import Funds from './pages/Funds/Funds';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route path="/" element={<IWantToHire/>}/>
          <Route path="/Enginners" element={<Enginners/>}/>
          <Route path="/Jobs" element={<Jobs/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Reports" element={<Reports/>}/>
          <Route path="/Funds" element={<Funds/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
