import styles from "./CartPage.module.css";
import CartHeadphonesItem from "../../components/CartHeadphonesItem/CartHeadphonesItem";
import {useSelector} from "react-redux";
import {useMemo} from "react";

const CartPage = () => {
  const headphones = useSelector(store => store.headphones.headphones);

  const totalPrice = useMemo(() => {
    return headphones.reduce((accum, {counter, price}) => {
      if (counter === 1) {
        return accum + price;
      } else if (counter > 1) {
        return accum + price * counter;
      } else {
        return 0;
      }
    }, 0)
  }, [headphones])

  const headphonesList = headphones.map((element) => {
    return <CartHeadphonesItem key={element.id} element={element}/>;
  });

  return (
    <section>
      <h3 className={styles.title}>Корзина</h3>
      <div className={styles.cart}>
        <div className={styles.cardsWrapper}>
          {headphones.length === 0 ? (
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

export default CartPage;
