import styles from "./Header.module.css";
import favourites from "../../assets/favourites.svg";
import cart from "../../assets/cart.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>QPICK</h1>
      <div className={styles.wrapper}>
      <a className={styles.favourites}>
        <img className={styles.icon} src={favourites} alt="Избранное" />
        <span className={styles.counter}>2</span>
      </a>
      <a className={styles.cart}>
        <img className={styles.icon} src={cart} alt="Корзина" />
        <span className={styles.counter}>5</span>
      </a>
      </div>
    </header>
  );
};

export default Header;
