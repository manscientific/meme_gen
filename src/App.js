import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EditPage from "./pages/edit";

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edit" element={<EditPage />} /> {/* ✅ Fix here */}
      </Routes>
    </div>
  );
}

export default App;
