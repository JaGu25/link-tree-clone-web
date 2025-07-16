import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Test from "../pages/test/test";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default AppRoutes;
