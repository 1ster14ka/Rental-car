import { HashLoader } from "react-spinners";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loaderWrapp}>
      <HashLoader loading={true} className={css.loader} />
    </div>
  );
};

export default Loader;
