import "./styles.css";

import Header2 from "../../shared/Header2";
import Footer from "../../shared/Footer";
import Carrossel from "../../shared/Carrossel";
import fundoAzul from "../../assets/SVG/Ativo 14.svg";
import caminhao from "../../assets/SVG/Ativo 5.svg";
import Xbranco from "../../assets/SVG/Ativo 6.svg";
import listraVerde from "../../assets/SVG/Ativo 12.svg";
import fotoEquipe from "../../assets/SVG/Ativo 17.svg";
import VetorVerde from "../../assets/Ativo 37.png";
import ImgMissao from "../../assets/Ativo 44.png";
import ImgVisao from "../../assets/Ativo 42.png";
import ImgValores from "../../assets/Ativo 43.png";
import NossasAreas from "../../assets/Ativo 40.png";
import NossosParceiros from "../../assets/Ativo 35.png";
import Form from "../../shared/Form";
import NewCarousel from "../../shared/SecondCarroussel";
import NewCarousel2 from "../../shared/ThirdCarroussel";


const Empresa = () => {
  return (
    <div className="containerEmpresa">
      <Header2 />
      <div>
        <img src={NossosParceiros} alt="" className="NossosParceiros2" />
        <div className="NossosParceiros3">
          <span id="mobileUnidadesProvix">Nossos Parceiros</span>
          <span id="mobileConhecaSedes">Conheça todos eles!</span>
        </div>
      </div>
      <Carrossel />
      <img src={fundoAzul} alt="" id="fundoAzul" />
      <div className="AreasDeAtuacao">
        <img src={Xbranco} alt="" id="Xbranco" />
        <div>
          <img src={NossasAreas} alt="" id="nossasAreas" />
        </div>
        <div className="carrosselAreas">
          <NewCarousel2 />
        </div>
        <div>
          <img src={caminhao} alt="" id="caminhao" />
        </div>
      </div>
      <div className="painelValores">
        <div className="divListra">
          <img src={listraVerde} alt="" id="listraVerde" />
        </div>
        <div className="valoresETC">
          <img src={ImgMissao} alt="" className="itemValorETC" />
          <img src={ImgVisao} alt="" className="itemValorETC" />
          <img src={ImgValores} alt="" className="itemValorETC" />
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Empresa;

