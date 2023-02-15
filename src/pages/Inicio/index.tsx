import "./styles.css";

import mainBanner from "../../assets/mainBanner.jpg";
import excelenciaimg from "../../assets/SVG/Ativo 33.svg";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

const Inicio = () => {
  return (
    <>
      <div className="container">
        <Header></Header>
        <img src={mainBanner} alt="Banner" id="mainBanner" />
        <div className="mainContent">
          <img src={excelenciaimg} alt="" id="Excelencia" />
          <div className="videos"></div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Inicio;
