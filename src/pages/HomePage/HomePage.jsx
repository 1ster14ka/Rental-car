import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetCars } from "../../redux/cars/carsSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCars());
  }, [dispatch]);
  const navigate = useNavigate();

  function handleCatalogClick() {
    navigate("/catalog");
  }

  return (
    <div className={css.homeContainer}>
      <div className={css.homeWrappText}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <h3 className={css.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </h3>
        <button className={css.btnCatalog} onClick={handleCatalogClick}>
          View Catalog
        </button>
      </div>
    </div>
  );
};

export default HomePage;
