import styles from "./App.module.css"
import Header from "../Header/Header";
import Headphones from "../Headphones/Headphones";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
function App() {
  return (
    <div className={styles.root}>
      <Header/>
      <main className={styles.content}>
        {/* <Headphones/> */}
        <Cart/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
