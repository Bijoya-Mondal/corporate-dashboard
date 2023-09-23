import CorporateInfoForm from "./components/CorporateInfoForm";
import MainPage from "./components/MainPage";
import SideNav from "./components/SideNav";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>

    <Route path="/" element={<MainPage />} /> 

    <Route path="/register" element={<CorporateInfoForm />} />

    </Routes>
  );
}

export default App;
