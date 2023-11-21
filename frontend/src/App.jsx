import  Home  from "./Home";
import Bike from "./components/pages/bike/Bike"
import Eleck from "./components/pages/electronic/Electronics"
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/pages/bike/Bike" element={<Bike />} />
        <Route path="/components/pages/electronic/Electronics" element={<Eleck />} />

      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
