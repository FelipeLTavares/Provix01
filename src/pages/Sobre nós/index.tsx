import "./styles.css";

import Header2 from "../../shared/Header2";
import Footer from "../../shared/Footer";
import fundoAzul from "../../assets/SVG/Ativo 14.svg";
import fotoEquipe from "../../assets/SVG/Ativo 17.svg";
import VetorVerde from "../../assets/Ativo 37.png";
import fotoTime from "../../assets/foto3.jpg";
import Form from "../../shared/Form";
import NewCarousel from "../../shared/SecondCarroussel";


const Equipe = () => {
  return (
    <div className="containerEmpresa">
      <Header2 />      
      <div className="NossosParceiros3">
          <span id="textoEquipe1">Quem<br/>Somos</span>
          <span id="textoEquipe2">Conheça um pouco cobre nós!</span>
      </div>
      <img src={fundoAzul} alt="" id="fundoAzul" />
      <div className="ConhecaOTime2">
        <img src={VetorVerde} alt="" id="vetorVerde" />
        <img src={fotoTime} alt="" id="fotoEquipe" />
      </div>
      <div className="containerCarrosselNovo">
        <div id="SCarTitle">Nossas Ações</div>
        <NewCarousel />
      </div>
      <Form />
      <Footer />
    </div>
  )
};

export default Equipe;

