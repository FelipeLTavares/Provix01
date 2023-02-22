import "./styles.css";

import Header2 from "../../shared/Header2";
import Footer from "../../shared/Footer";
import fundoAzul from "../../assets/SVG/Ativo 14.svg";
import ImgDeposito from "../../assets/mainContentImg1.png";

const Contato = () => {
  return (
    <div className="containerContato">
      <Header2></Header2>
      <img src={fundoAzul} alt="" id="fundoAzul" />
      <div className="conteudoContato">
        <div className="containerFotoDeposito">
          <img src={ImgDeposito} alt="" id="ImgDeposito" />
          <div className="formaVerde"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
};

export default Contato;
