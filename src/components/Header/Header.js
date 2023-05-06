import styles from "./Header.module.css";
import favourites from "../../assets/favourites.svg";
import cart from "../../assets/cart.svg";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useMemo} from "react";

const Header = () => {
  const headphones = useSelector(store => store.headphones.headphones);

  const counter = useMemo(() => {
    return headphones.reduce((accum, {counter}) => {
      return accum + counter
    }, 0)
  }, [headphones])

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link className={styles.logoLink} to={"/"}>
          QPICK
        </Link>
      </h1>
      <div className={styles.wrapper}>
        <a href={"#"} className={styles.favourites}>
          <img className={styles.icon} src={favourites} alt="Избранное"/>
          <span className={styles.counter}>2</span>
        </a>
        <Link to={"/cart"} className={styles.cart}>
          <img className={styles.icon} src={cart} alt="Корзина"/>
          <span className={styles.counter}>{counter}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
