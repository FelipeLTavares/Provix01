import "./styles.css";
import fotoAcao1 from "../../assets/FotosAcoes/foto1.jpg";
import fotoAcao2 from "../../assets/FotosAcoes/foto2.jpg";
import fotoAcao3 from "../../assets/FotosAcoes/foto3.jpg";

import { useState } from "react";

const NewCarousel = () => {
  const [testee, setTestee] = useState(0);

  const lista2 = [
    fotoAcao1,
    fotoAcao2,
    fotoAcao3,
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
