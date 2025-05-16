import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectTotalPage } from "../../redux/cars/carsSelectors";
import CarItem from "../CarItem/CarItem";
import css from "./CarCatalog.module.css";
import { useEffect, useRef } from "react";
import { getAllCars } from "../../redux/cars/carsOps";
import { useSearchParams } from "react-router-dom";
import { resetCars } from "../../redux/cars/carsSlice";

const CarCatalog = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPage);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const limit = 12;
  const visibleCars = cars.slice(0, currentPage * limit);

  const filters = {};
  if (searchParams.get("brand")) {
    filters.brand = searchParams.get("brand");
  }
  if (searchParams.get("rentalPrice")) {
    filters.rentalPrice = searchParams.get("rentalPrice");
  }
  if (searchParams.get("minMileage")) {
    filters.minMileage = Number(searchParams.get("minMileage"));
  }
  if (searchParams.get("maxMileage")) {
    filters.maxMileage = Number(searchParams.get("maxMileage"));
  }
  const prevFilters = useRef("");

  useEffect(() => {
    dispatch(getAllCars({ filters, page: currentPage }));
  }, [
    dispatch,
    currentPage,
    filters.brand,
    filters.rentalPrice,
    filters.minMileage,
    filters.maxMileage,
  ]);

  const isFirstLoad = useRef(true);

  useEffect(() => {
    const filtersParams = new URLSearchParams({});
    if (filters.brand) filtersParams.set("brand", filters.brand);
    if (filters.rentalPrice)
      filtersParams.set("rentalPrice", filters.rentalPrice);
    if (!isNaN(filters.minMileage))
      filtersParams.set("minMileage", filters.minMileage);
    if (!isNaN(filters.maxMileage))
      filtersParams.set("maxMileage", filters.maxMileage);

    if (isFirstLoad.current) {
      prevFilters.current = filtersParams.toString();
      isFirstLoad.current = false;
      return;
    }

    if (filtersParams.toString() !== prevFilters.current) {
      dispatch(resetCars());
      prevFilters.current = filtersParams.toString();
      filtersParams.set("page", "1");
      setSearchParams(filtersParams);
      dispatch(getAllCars({ filters, page: 1 }));
    }
  }, [
    filters.brand,
    filters.rentalPrice,
    filters.minMileage,
    filters.maxMileage,
  ]);

  return (
    <div>
      {visibleCars.length === 0 ? (
        <p className={css.emptyMessage}>
          Ничего не найдено по заданным фильтрам.
        </p>
      ) : (
        <ul className={css.carList}>
          {visibleCars.map((car) => (
            <li key={car.id} className={css.carItem}>
              <CarItem car={car} />
            </li>
          ))}
        </ul>
      )}
      <div className={css.btnWrapp}>
        {currentPage < totalPages && (
          <button
            onClick={() =>
              setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);
                newParams.set("page", currentPage + 1);
                return newParams;
              })
            }
            className={css.btnLoadMore}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CarCatalog;
