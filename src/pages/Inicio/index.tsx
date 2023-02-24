import "./styles.css";

import mainBanner from "../../assets/Ativo 392.png";
import Footer from "../../shared/Footer";

import Header from "../../shared/Header";
import Main from "./Main";
import { SecondBanner } from "./SecondBanner";

const Inicio = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <img src={mainBanner} alt="Banner" id="mainBanner" />
      <Main />
      <SecondBanner />
      <Footer />
    </div>
  );
};

export default Inicio;
