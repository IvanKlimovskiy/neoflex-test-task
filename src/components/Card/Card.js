import classNames from "classnames";
import styles from "./Card.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Card = ({ element }) => {
  const [counter, setCounter] = useState(1);
  const [totalPrice, setTotalPrice] = useState(element.price);

  const dispatch = useDispatch();

  return (
    <div key={element.id} className={styles.card}>
      <div className={styles.wrapperCard}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={element.img} alt={element.title} />
          <div className={styles.buttonsWrapper}>
            <button
              onClick={() => {
                setCounter((counter) => counter - 1);
                setTotalPrice((totalPrice) => totalPrice - element.price);
                dispatch({
                  type: "DECREASE_TOTAL_PRICE",
                  headphonesPrice: element.price,
                });
              }}
              type="button"
              aria-label="Уменьшить количество товаров"
              className={classNames(styles.button, styles.decrease)}
            />
            <span className={styles.counter}>{counter}</span>
            <button
              onClick={() => {
                setCounter((counter) => counter + 1);
                setTotalPrice((totalPrice) => totalPrice + element.price);
                dispatch({
                  type: "INCREASE_TOTAL_PRICE",
                  headphonesPrice: element.price,
                });
              }}
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
          type="button"
          className={styles.trash}
          aria-label="Удалить товар"
        />
        <p className={styles.total}>{totalPrice} ₽</p>
      </div>
    </div>
  );
};

export default Card;
