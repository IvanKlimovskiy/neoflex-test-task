import classNames from "classnames";
import styles from "./CartHeadphonesItem.module.css";
import {useDispatch, useSelector} from "react-redux";
import {
  increaseHeadphonesCounter,
  removeHeadphonesFromCart,
  decreaseHeadphonesCounter
} from "../../services/reducer/headphonesSlice";

const CartHeadphonesItem = ({element}) => {

  const headphones = useSelector(store => store.headphones.headphones);
  const counter = headphones.find(({id}) => id === element.id).counter;
  const totalPrice = element.price * counter
  const dispatch = useDispatch();

  const handleIncreaseCounter = () => {
    dispatch(increaseHeadphonesCounter(element.id))
  }
  const handleDecreaseCounter = () => {
    dispatch(decreaseHeadphonesCounter(element.id))
  }
  const handleRemoveHeadphones = () => {
    dispatch(removeHeadphonesFromCart(element.id))
  }

  return (
    <div key={element.id} className={styles.card}>
      <div className={styles.wrapperCard}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={element.img} alt={element.title}/>
          <div className={styles.buttonsWrapper}>
            <button
              onClick={handleDecreaseCounter}
              type="button"
              aria-label="Уменьшить количество товаров"
              className={classNames(styles.button, styles.decrease)}
            />
            <span className={styles.counter}>{counter}</span>
            <button
              onClick={handleIncreaseCounter}
              type="button"
              aria-label="Увеличить количество товаров"
              className={classNames(styles.button, styles.increase)}
            />
          </div>
        </div>
        <div className={styles.info}>
          <h4 className={styles.name}>{element.title}</h4>
          <p className={styles.price}>{element.price} ₽</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <button
          onClick={handleRemoveHeadphones}
          type="button"
          className={styles.trash}
          aria-label="Удалить товар"
        />
        <p className={styles.total}>{totalPrice} ₽</p>
      </div>
    </div>
  );
};

export default CartHeadphonesItem;
