import "./styles.css";

import Header2 from "../../shared/Header2";
import Footer from "../../shared/Footer";
import fundoAzul from "../../assets/SVG/Ativo 14.svg";
import ImgDeposito from "../../assets/mainContentImg1.png";
import Unidades from "../../assets/Ativo 41.png";
import Maps from "../../shared/Maps";

const Contato = () => {


  
  return (
    <div className="containerContato">
      <Header2></Header2>
      <img src={Unidades} alt="" id="unidadesProvix" />
      <img src={fundoAzul} alt="" id="fundoAzul" />
      <div className="conteudoContato">
        <div className="containerFotoDeposito">
          <img src={ImgDeposito} alt="" id="ImgDeposito" />
          <div className="formaVerde"></div>
        </div>
        <div className="textosEnd">
          <span id="endIracema">Parque Iracema, 2799 A</span>
          <span id="endBR116">BR 116 • Fortaleza</span>
        </div>
        <div id="map">
          <Maps />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
};

export default Contato;
