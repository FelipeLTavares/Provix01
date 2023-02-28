import "./styles.css";

import Header2 from "../../shared/Header2";
import Footer from "../../shared/Footer";
import fundoAzul from "../../assets/SVG/Ativo 14.svg";
import fotoEquipe from "../../assets/SVG/Ativo 17.svg";
import VetorVerde from "../../assets/Ativo 37.png";
import Form from "../../shared/Form";
import NewCarousel from "../../shared/SecondCarroussel";


const Equipe = () => {
  return (
    <div className="containerEmpresa">
      <Header2 />      
      <div className="NossosParceiros3">
          <span id="textoEquipe1">Nossa<br/>Equipe</span>
          <span id="textoEquipe2">Conheça todos eles!</span>
      </div>
      <img src={fundoAzul} alt="" id="fundoAzul" />
      <div className="ConhecaOTime2">
        <img src={VetorVerde} alt="" id="vetorVerde" />
        <img src={fotoEquipe} alt="" id="fotoEquipe" />
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

