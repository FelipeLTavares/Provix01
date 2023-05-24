import "./styles.css";

import excelenciaimg from "../../../assets/Ativo 1.png";
import img1 from "../../../assets/foto5.png";
import img2 from "../../../assets/15Comprimida2405.jpg";

const Main = () => {
  return (
    <div id="MCContainer">
      <div id="MCLeft">
        <div id="title">
          <img className="Excelencia" src={excelenciaimg} alt="Excelencia" />
        <div id="MCSubtitle">É O QUE ENTREGAMOS</div>
        </div>


        <div id="MCLeftContent">
          <p style={{marginBottom: '-1%', fontSize: '1.2rem'}}>
            Criada em 2011 pela empresária cearense Francisca Gardia, a Provix Distribuidora é uma empresa focada na distribuição de produtos alimentícios, higiene pessoal, limpeza, entre outros. 
          </p>
          <p style={{marginBottom: '-1%', fontSize: '1.2rem'}}>
            Atualmente atende todos os municípios do Ceará, comercializando um mix variado de produtos. 
          </p>
          <p style={{marginBottom: '-1%', fontSize: '1.2rem'}}>
            Investe permanentemente em tecnologia, mantém relações comerciais de confiança por meio do cumprimento de todos os compromissos com clientes e fornecedores. Leva em conta o respeito, a ética, a humildade e a disciplina em cada negócio.
          </p>
          <p style={{marginBottom: '-1%', fontSize: '1.2rem'}}>
            Nesses anos de atividade empresarial, a Provix tem passado por processos de melhoria contínua de suas atividades, buscando se adaptar ao mercado cada vez mais competitivo, evoluindo na atuação e identificação no seu segmento.   
          </p>
          <p style={{fontSize: '1.2rem'}}>
            Sempre incorporando novas parcerias e produto de qualidade, a Provix segue os valores adquiridos no passado e o olhar firme no futuro.
          </p>
        </div>
      </div>

      <div id="MCRight">
        <div id="MCVideo">
          <img src={img1} alt="Img1" className="MCPhotoGrande" />
        </div>
        <div id="MCVideo">
          <img src={img2} alt="Img1" className="MCPhotoGrande" />
        </div>
      </div>
    </div>
  );
};

export default Main;
