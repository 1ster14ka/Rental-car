import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CarPage from "./pages/CarPage/CarPage";
import CarDetailsPage from "./pages/CarDetailsPage/CarDetailsPage";
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CarPage />} />
        <Route path="/catalog/:id" element={<CarDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
