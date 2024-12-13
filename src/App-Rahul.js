import "./App.css";
import Page from "./components/Page";
import Page10 from './components/Page10';
import OurProcess from './components/OurProcess';
import Pageinsurance from "./components/Pageinsurance";
import Mainfile from "./components/Mainfile";
import { Routes, Route } from "react-router-dom";
import Getstarted from "./components/Getstarted";
import Refer from "./components/Refer";
import Now from "./components/Now";



function App() {
  return (
    <>
      <Page />
      <Routes>
        <Route path="/" element={<Mainfile />} />
        <Route path="/OurProcess" element={<OurProcess />} />
        <Route path="/Pageinsurance" element={<Pageinsurance />} />
        <Route path="/Getstarted" element={<Getstarted />} />
        <Route path="/Refer" element={<Refer />} />
        <Route path="/Now-hiring" element={<Now />} />
        <Route path="*" element={<div className=" py-[100px] text-[50px] font-bold">
          Hello  page not found, Go back !!!!!
        </div>} />
      </Routes>
      <Page10 />
      
    </>
  );
}

export default App;
