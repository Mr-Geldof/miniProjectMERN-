import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Location from './components/clients/location/location';
import AddLocation from './components/clients/locataire/ADD/AddLocation';
import AddLocataire from './components/clients/locataire/ADD/AddLocataire';
import Home from './navbar/home';
import Locataire from './components/clients/locataire/locataire';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/location" element={<Location/>}/>
        <Route path="/location/addlocation" element={<AddLocation/>} />
        <Route path='/locataire' element={<Locataire/>}/>
        <Route path="/location/addlocataire" element={<AddLocataire/>} />
      </Routes>
    </>
  );
}

export default App;
