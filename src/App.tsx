import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyComponents from "./pages/MyComponents";
import Home from "./pages/Home";

function App() {
  return (
    <div
      className="w-screen h-screen min-h-screen overflow-auto
    bg-background text-primary ">
      <Routes>
        <Route path="/components" element={<MyComponents />} />
        <Route path="" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
