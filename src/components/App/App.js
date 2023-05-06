import styles from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import Spinner from "../Spinner/Spinner";
import {MainPage, CartPage} from "../../pages";

const App = () => {
  const [loading, setLoading] = useState(true);

  const fakeFetchToApi = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fakeFetchToApi();
  }, []);

  return loading ? (
    <div className={styles.loading}>
      <Spinner/>
      <p className={styles.loadingText}>Загрузка</p>
    </div>
  ) : (
    <Router>
      <div className={styles.root}>
        <Header/>
        <main className={styles.content}>
          <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/cart"} element={<CartPage/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
