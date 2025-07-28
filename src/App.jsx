import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Precisionm from "./pages/MainPrecision/MainPrecision";
import Quality from "./pages/QualityMain/Quality";
import Collaboration from "./pages/Collaboration/Collaboration";
import Precision from "./pages/PrecitionMain/Precition";
import CustomizeLabelSection from "./pages/LabelShape/LabelShape";
import Package from "./pages/Package/Package";
import Explore from "./pages/Explore/Explore";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/precition" element={<Precision/>}/>
          <Route path="/quality" element={<Quality/>}/>
          <Route path="/collaborate" element={<Collaboration/>}/>
          <Route path="/sizeandshape" element={<CustomizeLabelSection/>}/>
          <Route path="/package" element={<Package/>}/>
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
