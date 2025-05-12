import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <img src="/public/RentalCar.svg" alt="" />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </header>
  );
};

export default Navigation;
