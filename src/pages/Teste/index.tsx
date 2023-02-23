import mainBanner from "../../assets/mainBanner.png";
import Footer from "../../shared/Footer";
import Form from "../../shared/Form";

import Header from "../../shared/Header";
import NewCarousel from "../../shared/SecondCarroussel";
import Main2 from "./Main2";
import { SecondBanner } from "./SecondBanner";

const Teste = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <img src={mainBanner} alt="Banner" id="mainBanner" />
      <Main2 />
      <SecondBanner />
      <NewCarousel />
      <Form />
      <Footer />
    </div>
  );
};

export default Teste;
