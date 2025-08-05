import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Precision from "./pages/PrecisionMain/Precision";
import Quality from "./pages/QualityMain/Quality";
import Collaboration from "./pages/Collaboration/Collaboration";
import Sizeandshape from "./pages/SizeandshapeMain/Sizeandshape";
import Labelshape from "./pages/Labelshape/Labelshape";
import ImageGallery from "./pages/ScrollImage/ScrollImage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/precition" element={<Precision/>}/>
          <Route path="/quality" element={<Quality/>}/>
          <Route path="/collaborate" element={<Collaboration/>}/>
          <Route path="/sizeandshape" element={<Sizeandshape/>}/>
          <Route path="/labelshape" element={<Labelshape/>}/>
          <Route path="/imagegallery" element={<ImageGallery/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
