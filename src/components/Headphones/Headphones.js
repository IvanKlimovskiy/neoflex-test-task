import {headphones} from "../../data/data";
import styles from "./Headphones.module.css";
import star from "../../assets/star.svg"

const Headphones = () => {

  const headphonesList = headphones.map(item => {
    if (!item.isWireless) {
      return <li key={item.id} className={styles.headphonesItem}>
        <img className={styles.image} src={item.img} alt={item.title}/>
        <div className={styles.descriptionWrapper}>
          <div className={styles.headingWrapper}>
            <h3 className={styles.name}>{item.title}</h3>
            <p>{item.price}</p>
          </div>
          <div className={styles.bottomWrapper}>
            <div className={styles.rating}>
              <img src={star} alt="Рейтинг"/>
              <p>{item.rate}</p>
            </div>
            <p>Купить</p>
          </div>
        </div>
      </li>
    }
    return null
  })

  return (<section className={styles.headphones}>
    <h2 className={styles.title}>Наушники</h2>
    <ul className={styles.headphonesList}>
      {headphonesList}
      {headphonesList}
    </ul>
  </section>);
};
export default Headphones;
