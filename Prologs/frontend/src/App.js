import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import ProjectDetails from "./pages/project-details/ProjectDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project" element={<ProjectDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
