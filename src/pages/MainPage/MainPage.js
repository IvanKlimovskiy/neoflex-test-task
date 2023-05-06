import styles from "./MainPage.module.css";
import HeadphonesItem from "../../components/HeadphonesItem/HeadphonesItem";
import {headphones} from "../../data/data";

const MainPage = () => {

  const headphonesList = headphones.map(({id, isWireless, img, title, price, oldPrice, rate}) => {
    if (!isWireless) {
      return <HeadphonesItem key={id} img={img} title={title} price={price} id={id} oldPrice={oldPrice} rate={rate}/>
    }
    return null;
  });

  const wirelessHeadphonesList = headphones.map(({id, isWireless, img, title, price, oldPrice, rate}) => {
    if (isWireless) {
      return <HeadphonesItem key={id} img={img} title={title} price={price} id={id} oldPrice={oldPrice} rate={rate}/>
    }
    return null;
  });

  return (
    <section>
      <article className={styles.headphones}>
        <h2 className={styles.title}>Наушники</h2>
        <ul className={styles.headphonesList}>
          {headphonesList}
          {headphonesList}
        </ul>
      </article>
      <article className={styles.headphones}>
        <h2 className={styles.title}>Беспроводные наушники</h2>
        <ul className={styles.headphonesList}>{wirelessHeadphonesList}</ul>
      </article>
    </section>
  );
};
export default MainPage;
