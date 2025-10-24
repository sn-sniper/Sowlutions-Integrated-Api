import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> //initialize the route of the Homepage
      </Routes>
    </div>
  );
};

export default AppRoutes;
