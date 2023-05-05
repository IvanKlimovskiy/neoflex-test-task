import styles from "./App.module.css"
import Header from "../Header/Header";
import Headphones from "../Headphones/Headphones";
function App() {
  return (
    <div className={styles.root}>
      <Header/>
      <main className={styles.content}>
        <Headphones/>
      </main>
    </div>
  );
}

export default App;
