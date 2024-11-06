import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/portfolio/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
