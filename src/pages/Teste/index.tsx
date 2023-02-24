import "./styles.css";

import fundoAzul from "../../assets/SVG/Ativo 14.svg";

import Header from "../../shared/Header";

const Teste = () => {
  return (
    <div id="empresaContainer">
      <Header />
      <img src={fundoAzul} alt="asd" id="empresaFundoAzul" />
    </div>
  );
};

export default Teste;
