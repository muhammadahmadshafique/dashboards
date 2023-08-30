import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard1 from "./pages/Dashboard1.jsx";
import Dashboard2 from "./pages/Dashboard2.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard1/>} />
      <Route path="/dashboard2" element={<Dashboard2/>} />
    </Routes>
  );
}

export default App;
