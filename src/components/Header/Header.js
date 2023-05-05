import styles from "./Header.module.css";
import favourites from "../../assets/favourites.svg";
import cart from "../../assets/cart.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>QPICK</h1>
      <div className={styles.wrapper}>
      <a className={styles.favourites}>
        <img src={favourites} />
      </a>
      <a className={styles.cart}>
        <img src={cart} />
      </a>
      </div>
    </header>
  );
};

export default Header;
