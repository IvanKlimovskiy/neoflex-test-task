import styles from "./Footer.module.css";
import languageIcon from "../../assets/planet.svg";
import vk from "../../assets/vk.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.logo}>QPICK</h2>
      <ul className={styles.list}>
        <li className={styles.item}>Избранное</li>
        <li className={styles.item}><a style={{textDecoration: "none", color: "#000"}} href="#">Корзина</a></li>
        <li className={styles.item}>Контакты</li>
      </ul>
      <div className={styles.languageWrapper}>
        <p>Условия сервиса</p>
        <div className={styles.wrapper}>
          <img src={languageIcon} alt="Язык" />
          <a style={{ color: "#FFA542" }} className={styles.langLink} href="">
            Рус
          </a>
          <a className={styles.langLink} href="">
            Eng
          </a>
        </div>
      </div>
      <ul className={styles.iconsList}>
        <li>
          <img className={styles.icon} src={vk} alt="" />
        </li>
        <li>
          <img className={styles.icon} src={telegram} alt="" />
        </li>
        <li>
          <img className={styles.icon} src={whatsapp} alt="" />
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
