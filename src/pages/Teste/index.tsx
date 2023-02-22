import mainBanner from "../../assets/Ativo 39.png";
import Footer from "../../shared/Footer";

import Header from "../../shared/Header";
import Main2 from "./Main2";
import { SecondBanner } from "./SecondBanner";

const Teste = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <img src={mainBanner} alt="Banner" id="mainBanner" />
      <Main2 />
      <SecondBanner />
      <Footer />
    </div>
  );
};

export default Teste;
