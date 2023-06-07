import "./styles.css";

import Header2 from "../../shared/Header2";
import Footer from "../../shared/Footer";
import fundoAzul from "../../assets/SVG/Ativo 14.svg";
import ImgDeposito from "../../assets/imagemGalpao.jpg";
import Unidades from "../../assets/Ativo 41.png";
import Maps from "../../shared/Maps";

const Contato = () => {
  return (
    <div className="containerContato">
      <Header2></Header2>

      <div id="containerFundoAzul">
        <img src={fundoAzul} alt="" id="fundoAzul" />
      </div>

      <div id="containerUnidadesProvix">
        <img src={Unidades} alt="" id="unidadesProvix" />
        <span id="mobileUnidadesProvix">Unidades Provix</span>
        <span id="mobileConhecaSedes">Conheça nossas sedes</span>
      </div>

      <div className="conteudoContato">
        <div className="containerFotoDeposito1">
          <img src={ImgDeposito} alt="" id="ImgDeposito" />
          <div className="formaVerde" />
        </div>

        <div className="ContatoEndereco1">
          <div id="ContatoEnderecoTextos1">
            <span id="endIracema">Parque Iracema, 2799 A</span>
            <span id="endBR116">BR 116 • Fortaleza</span>
          </div>

          <div id="map1">
            <Maps />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contato;
