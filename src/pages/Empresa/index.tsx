import "./styles.css";

import Header2 from "../../shared/Header2";
import Footer from "../../shared/Footer";
import Carrossel from "../../shared/Carrossel";
import fundoAzul from "../../assets/SVG/Ativo 14.svg";
import fotoEquipe from "../../assets/SVG/Ativo 17.svg";
import VetorVerde from "../../assets/SVG/Ativo 37.svg";
import NossosParceiros from "../../assets/SVG/Ativo 35.svg";
import Form from "../../shared/Form";


const Empresa = () => {
  return (
  <div className="containerEmpresa">
    <Header2></Header2>
    <img src={NossosParceiros} alt="" id="NossosParceiros" /> 
    <Carrossel></Carrossel>
    <img src={fundoAzul} alt="" id="fundoAzul" /> 
    <div className="ConhecaOTime">
        <img src={VetorVerde} alt="" id="vetorVerde" /> 
        <img src={fotoEquipe} alt="" id="fotoEquipe" /> 
    </div>
    <Form />
    <Footer></Footer>
  </div>
)};

export default Empresa;

