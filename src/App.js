import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import CityPage from "./pages/CityPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CityPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/items/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
