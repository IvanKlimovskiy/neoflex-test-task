import styles from "../HeadphonesItem/HeadphonesItem.module.css";
import star from "../../assets/star.svg";
import {useDispatch, useSelector} from "react-redux";
import {addHeadphonesToCart, increaseHeadphonesCounter} from "../../services/reducer/headphonesSlice";

const HeadphonesItem = ({id, img, title, price, oldPrice, rate}) => {

  const dispatch = useDispatch();
  const headphonesSelector = useSelector(store => store.headphones.headphones)

  const handleAddHeadphones = () => {
    const headphones = headphonesSelector.find(item => item.id === id)
    if (headphones) {
      dispatch(increaseHeadphonesCounter(id))
    } else {
      dispatch(addHeadphonesToCart({id, img, title, price, oldPrice, rate, counter: 1}))
    }
  }

  return <li key={id} className={styles.headphonesItem}>
    <img className={styles.image} src={img} alt={title}/>
    <div className={styles.descriptionWrapper}>
      <div className={styles.headingWrapper}>
        <h3 className={styles.name}>{title}</h3>
        <div className={styles.priceWrapper}>
          <p style={{margin: 0}} className={styles.price}>
            {price} Р
          </p>
          {oldPrice ? (
            <p className={styles.oldPrice} style={{margin: 0}}>
              {oldPrice} Р
            </p>
          ) : null}
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.rating}>
          <img src={star} alt="Рейтинг"/>
          <p>{rate}</p>
        </div>
        <button
          onClick={handleAddHeadphones}
          className={styles.button}
        >
          Купить
        </button>
      </div>
    </div>
  </li>
}
export default HeadphonesItem;
