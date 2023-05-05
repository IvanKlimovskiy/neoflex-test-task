import styles from "./Cart.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cart = () => {
  const { headphonesCounter, totalPrice, headphones } = useSelector(
    (store) => store
  );

  const headphonesList = headphones.map((element) => {
    return <Card key={element.id} element={element} />;
  });

  return (
    <section>
      <h3 className={styles.title}>Корзина</h3>
      <div className={styles.cart}>
        <div className={styles.cardsWrapper}>
          {headphonesCounter === 0 ? (
            <p className={styles.emptyCart}>Корзина пуста</p>
          ) : (
            headphonesList
          )}
        </div>
        <div className={styles.totalPrice}>
          <div className={styles.totalPriceHeading}>
            <h3 className={styles.totalPriceTitle}>Итого</h3>
            <span className={styles.totalPriceSum}>₽ {totalPrice}</span>
          </div>
          <button className={styles.order}>Перейти к оформлению</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
