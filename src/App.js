import Products from "./componants/Products";
import Weather from "./componants/Weather";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/weather" element={<Weather />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
