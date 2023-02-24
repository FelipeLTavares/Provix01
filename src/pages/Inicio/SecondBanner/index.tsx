import "./styles.css";

import CearaMap from "../../../assets/SVG/Ativo 4.svg";
import Boy from "../../../assets/SVG/Ativo 3.svg";

export const SecondBanner = () => {
  return (
    <div id="SBcontainer">
      <div id="SBTitle">
        <div id="SBMunicipios">MUNICÍPIOS</div>
        <div id="SBBox">
          <div className="SBEscolasAlunos">ESCOLAS</div>
          <div className="SBEscolasAlunos">ALUNOS</div>
        </div>
        <div id="SBImpactados">Impactados</div>
      </div>

      <div id="SBImages">
        <div id="SCMapaCeara">
          <img src={CearaMap} alt="asdasd" />
        </div>

        <div id="SBMenino">
          <img src={Boy} alt="asdasd" />
        </div>
      </div>

      {/* <div id="SCDados">
        <div id="SCNumeros">26</div>
        <div id="SCDescNumeros">MUNICÍPIOS</div>
        <div id="SCNumeros">1203</div>
        <div id="SCDescNumeros">ESCOLAS</div>
        <div id="SCNumeros">354.854</div>
        <div id="SCDescNumeros">ALUNOS</div>
      </div> */}
    </div>
  );
};
