import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <section>
      <h3 className={styles.title}>Корзина</h3>
      <div className={styles.cart}>
      <p className={styles.emptyCart}>Корзина пуста</p>
        <div className={styles.totalPrice}>
          <div className={styles.totalPriceHeading}>
            <h3 className={styles.totalPriceTitle}>Итого</h3>
            <span className={styles.totalPriceSum}>₽ 2 927</span>
          </div>
          <button className={styles.order}>Перейти к оформлению</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
