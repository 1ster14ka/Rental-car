import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
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
