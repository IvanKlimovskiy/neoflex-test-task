import classNames from "classnames";
import pods from "../../assets/Apple AirPods.png";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapperCard}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={pods} alt={""} />
          <div className={styles.buttonsWrapper}>
            <button
              type="button"
              aria-label="Уменьшить количество товаров"
              className={classNames(styles.button, styles.decrease)}
            />
            <span className={styles.counter}>1</span>
            <button
              type="button"
              aria-label="Увеличить количество товаров"
              className={classNames(styles.button, styles.increase)}
            />
          </div>
        </div>
        <div className={styles.info}>
          <h4 className={styles.name}>Apple BYZ S852I</h4>
          <p className={styles.price}>2 927 ₽</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <button
          type="button"
          className={styles.trash}
          aria-label="Удалить товар"
        />
        <p className={styles.total}> 2 927 ₽</p>
      </div>
    </div>
  );
};

export default Card;
