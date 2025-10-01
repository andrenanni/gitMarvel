import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MarvelPage from "./pages/MarvelPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/marvel" element={<MarvelPage />} />
      </Routes>
    </Router>
  );
}

export default App
