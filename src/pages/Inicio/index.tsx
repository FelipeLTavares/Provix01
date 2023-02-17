import "./styles.css";

import mainBanner from "../../assets/mainBanner.png";
import img1 from "../../assets/mainContentImg1.png";
import excelenciaimg from "../../assets/SVG/Ativo 33.svg";
import MapaCeara from "../../assets/SVG/Ativo 4.svg";
import Menino from "../../assets/SVG/Ativo 3.svg";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

const Inicio = () => {
  return (
    <>
      <div className="container">
        <Header></Header>
        <img src={mainBanner} alt="Banner" id="mainBanner" />
        <div className="mainContent">
          <div className="texts">
            <img src={excelenciaimg} alt="" id="textTitle" />

            <div id="textSubtitle">É O QUE ENTREGAMOS</div>

            <div className="textParagraph">
              Em 2004 a Francisca gardia após vir do interior de mombaça resolve
              criar sua primeira chamada Digital Informatica, onde começou a
              vender materiais de Informatica e materiais escolares.
            </div>
            <div className="textParagraph">
              Após 8 anos nesse mercado e observando às mudanças que o mercado
              estava sofrendo, decidiu acrescentar mais produtos em seu
              Portfólio e focar mais no setor alimentício e de material de
              limpeza, ao fazer isso foi necessário mudar de nome e assim nasceu
              a provix distribuidora em 2011, uma empresa focada na distribuição
              de produtos alimentícios, higiene pessoal, limpeza….
            </div>
            <div className="textParagraph">
              Que atua em toda região nordeste.
            </div>
          </div>

          <div className="mainContentImgs">
            <iframe
              id="mainVideo"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img src={img1} alt="Imagem1" className="mainContentImg" />
              <img src={img1} alt="Imagem1" className="mainContentImg" />
            </div>
          </div>
        </div>

        <div id="secondaryContent">
          <div id="SCTitle">
            <div id="SCmunicipios">MUNICÍPIOS</div>
            <div id="SCDouble">
              <div className="SCDouble">ESCOLAS</div>
              <div className="SCDouble">ALUNOS</div>
            </div>
            <div id="SCImpactados">Impactados</div>
          </div>

          <div id="SCImgs">
            <div id="SCMapaCearaBox">
              <img src={MapaCeara} alt="asdasd" id="SCMapaCeara" />
            </div>
            <div id="SCMeninoBox">
              <img src={Menino} alt="asdasd" id="SCMenino" />
            </div>
          </div>

          <div id="SCDados">
            <div id="SCNumeros">26</div>
            <div id="SCDescNumeros">MUNICÍPIOS</div>
            <div id="SCNumeros">1203</div>
            <div id="SCDescNumeros">ESCOLAS</div>
            <div id="SCNumeros">354.854</div>
            <div id="SCDescNumeros">ALUNOS</div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Inicio;
