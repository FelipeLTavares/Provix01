import "./styles.css";

import excelenciaimg from "../../../assets/SVG/Ativo 33.svg";
import img1 from "../../../assets/foto5.png";
import img2 from "../../../assets/foto2.jpg";
import img3 from "../../../assets/foto3.jpg";

const Main = () => {
  return (
    <div id="MCContainer">
      <div id="MCLeft">
        <div id="title">
          <img src={excelenciaimg} alt="Excelencia" />
        </div>

        <div id="MCSubtitle">É O QUE ENTREGAMOS</div>

        <div id="MCLeftContent">
          <p>
            Em 2004 a Francisca gardia após vir do interior de mombaça resolve
            criar sua primeira chamada Digital Informatica, onde começou a
            vender materiais de Informatica e materiais escolares.
          </p>
          <p>
            Após 8 anos nesse mercado e observando às mudanças que o mercado
            estava sofrendo, decidiu acrescentar mais produtos em seu Portfólio
            e focar mais no setor alimentício e de material de limpeza, ao fazer
            isso foi necessário mudar de nome e assim nasceu a provix
            distribuidora em 2011, uma empresa focada na distribuição de
            produtos alimentícios, higiene pessoal, limpeza…
          </p>
          <p>Que atua em toda região nordeste.</p>
        </div>
      </div>

      <div id="MCRight">
        <div id="MCVideo">
        <img src={img1} alt="Img1" className="MCPhotoGrande" />
        </div>

        <div id="MCPhotos">
          <img src={img2} alt="Img1" className="MCPhoto" />
          <img src={img3} alt="Img1" className="MCPhoto" />
        </div>
      </div>
    </div>
  );
};

export default Main;
