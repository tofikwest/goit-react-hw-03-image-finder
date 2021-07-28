import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./LoaderSpinner.module.scss";

const LoaderSpinner = () => (
  <div className={styles.LoaderSpinner}>
    <Loader type="random" color="#1111" height={300} width={300} timeout={0} />
  </div>
);

export default LoaderSpinner;
