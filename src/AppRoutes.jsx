import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section3 from "./components/Major/Section3.jsx";
import Second from "./components/Major/Second.jsx";
import Third from './components/Major/Third.jsx'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Section3 />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>
    </Router>
  );
}
