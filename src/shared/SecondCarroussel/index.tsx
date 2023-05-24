import "./styles.css";
import fotoAcao1 from "../../assets/FotosAcoes/foto1.jpg";
import fotoAcao2 from "../../assets/FotosAcoes/foto2.jpg";
import fotoAcao3 from "../../assets/FotosAcoes/foto3.jpg";
import fotoAcao4 from "../../assets/FotosAcoes/foto4.jpg";
import fotoAcao5 from "../../assets/FotosAcoes/foto5.jpg";
import fotoAcao6 from "../../assets/FotosAcoes/foto6.jpg";
import fotoAcao7 from "../../assets/FotosAcoes/foto7.png";
import fotoAcao8 from "../../assets/FotosAcoes/foto8.png";
import fotoAcao9 from "../../assets/FotosAcoes/foto9.png";
import fotoAcao10 from "../../assets/FotosAcoes/foto10.png";
import fotoAcao11 from "../../assets/FotosAcoes/foto11.png";
import fotoAcao12 from "../../assets/FotosAcoes/foto12.png";
import fotoAcao13 from "../../assets/FotosAcoes/foto13.png";
import fotoAcao14 from "../../assets/FotosAcoes/foto14.png";

import { useState } from "react";

const NewCarousel = () => {
  const [testee, setTestee] = useState(0);

  const lista2 = [
    fotoAcao1,
    fotoAcao2,
    fotoAcao3,
    fotoAcao4,
    fotoAcao5,
    fotoAcao6,
    fotoAcao7,
    fotoAcao8,
    fotoAcao9,
    fotoAcao10,
    fotoAcao11,
    fotoAcao12,
    fotoAcao13,
    fotoAcao14,
  ];

  const avancar = () => {
    const tamanho = lista2.length - 1;
    if (testee === tamanho) {
      setTestee(testee - tamanho);
    } else {
      setTestee(testee + 1);
    }
  };

  const voltar = () => {
    const tamanho = lista2.length - 1;
    if (testee === 0) {
      setTestee(testee + tamanho);
    } else {
      setTestee(testee - 1);
    }
  };

  return (
      <div id="SCarGalery">
        <div
          id="SCarBtnLeft"
          className="SCarBtn"
          style={{ marginRight: "-2.5rem" }}
          onClick={voltar}
        >
          <div id="trianguloParaEsquerda"></div>
        </div>
        <img id="SCarImg" src={lista2[testee]} alt="IMGS" />
        <div
          id="SCarBtnRight"
          className="SCarBtn"
          style={{ marginLeft: "-2.5rem" }}
          onClick={avancar}
        >
          <div id="trianguloParaDireita"></div>
        </div>
      </div>
  );
};

export default NewCarousel;
