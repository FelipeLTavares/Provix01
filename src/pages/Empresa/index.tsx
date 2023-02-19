import "./styles.css";

import Header2 from "../../shared/Header2";
import Footer from "../../shared/Footer";
import Carrossel from "../../shared/Carrossel";
import fundoAzul from "../../assets/SVG/Ativo 14.svg";
import NossosParceiros from "../../assets/SVG/Ativo 35.svg";

const Empresa = () => {
  return (
    <div>
      <Header2></Header2>
      <img src={NossosParceiros} alt="" id="NossosParceiros" />
      <Carrossel></Carrossel>
      <img src={fundoAzul} alt="" id="fundoAzul" />
      <Footer></Footer>
    </div>
  );
};

export default Empresa;
