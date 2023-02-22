import "./styles.css";

import mainBanner from "../../assets/mainBanner.png";
import img1 from "../../assets/mainContentImg1.png";
import excelenciaimg from "../../assets/SVG/Ativo 33.svg";
import MapaCeara from "../../assets/SVG/Ativo 4.svg";
import Menino from "../../assets/SVG/Ativo 3.svg";
import FormImg from "../../assets/SVG/Ativo 13.svg";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import Form from "../../shared/Form";

const Inicio = () => {
  return (
    <>
      <div className="generalContainer">
        <Header></Header>
        <img src={mainBanner} alt="Banner" id="mainBanner" />


        <Footer></Footer>
      </div>
    </>
  );
};

export default Inicio;
