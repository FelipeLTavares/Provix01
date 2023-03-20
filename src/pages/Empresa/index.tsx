import "./styles.css";

import Header2 from "../../shared/Header2";
import Footer from "../../shared/Footer";
import Carrossel from "../../shared/Carrossel";
import fundoAzul from "../../assets/SVG/Ativo 14.svg";
import caminhao from "../../assets/SVG/Ativo 5.svg";
import Xbranco from "../../assets/SVG/Ativo 6.svg";
import listraVerde from "../../assets/SVG/Ativo 12.svg";
import ImgMissao from "../../assets/Ativo 42.png";
import ImgVisao from "../../assets/Ativo 43.png";
import ImgValores from "../../assets/Ativo 44.png";
import NossasAreas from "../../assets/Ativo 40.png";
import NossosParceiros from "../../assets/Ativo 35.png";
import NewCarousel2 from "../../shared/ThirdCarroussel";


const Empresa = () => {

  const imagensTextos = [{
    imagem: ImgMissao,
    texto: "Fornecer produtos e contribuir com projetos de qualidade, necessários para o bom funcionamento dos Municípios Cearenses, contribuindo para o bem estar social",
  },
  {
    imagem: ImgVisao,
    texto: "Ser referência de eficiência e excelência no relacionamento com o serviço púbico\nSer a mais lembrada pela eficiência e excelência no relacionamento com o serviço público (Top of Mind)",
  },
  {
    imagem: ImgValores,
    texto: "CONFIABILIDADE: Nossa operação é confiável, nossa entrega é confiável, nós honramos os contratos e acordos comerciais. FLEXIBILIDADE: Nós temos habilidade para ajustar volumes e entrega, nós temos frequência de novos projetos e produtos, nós temos ampla variedade produtos. RAPIDEZ: Nossa entrega é rápida. QUALIDADE: Processo isento de erro, produtos sob especificação técnica. CUSTO: Nós temos o preço justo a realidade de mercado, nós buscamos sempre o melhor resultado",
  }]
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
        {imagensTextos.map((item) => (
        <div className="itemContainer">
            <img
            src={item.imagem}
            alt=""
            className="itemValorETC"
            />
            <div className="texto-ativo"><p>{item.texto}</p></div>
        </div>
        ))} 
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Empresa;

