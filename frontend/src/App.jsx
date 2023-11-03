import  Home  from "./Home";
import Bike from "./pages/bike/Bike"
import Eleck from "./pages/electronic/Electronics"
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/bike/Bike" element={<Bike />} />
        <Route path="/pages/electronic/Electronics" element={<Eleck />} />

      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
