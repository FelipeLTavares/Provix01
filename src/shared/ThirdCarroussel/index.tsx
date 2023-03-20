import "./styles.css";
import fotoArea1 from "../../assets/ALIMENTOS.png";
import fotoArea2 from "../../assets/CONGELADOS.png";
import fotoArea3 from "../../assets/INFORMÁTICA.png";
import fotoArea4 from "../../assets/LIMPEZA.png";
import fotoArea5 from "../../assets/MATERIAL ESCOLAR.png";

import { useState } from "react";

const NewCarousel2 = () => {
  const [testee, setTestee] = useState(0);

  const lista2 = [
    fotoArea1,
    fotoArea2,
    fotoArea3,
    fotoArea4,
    fotoArea5,
  ];

  const avancar = () => {
    const tamanho = lista2.length - 1;
    if (testee === tamanho) {
      setTestee(testee - tamanho);
    } else {
      setTestee(testee + 1);
    }
  };

  return (
      <div id="SCarGalery2">
        <img id="SCarImg2" src={lista2[testee]} alt="IMGS" />
        <div
          id="SCarBtnRight2"
          className="SCarBtn2"
          style={{ marginLeft: "-2.5rem" }}
          onClick={avancar}
        >
          <div id="trianguloParaDireita2"></div>
        </div>
      </div>
  );
};

export default NewCarousel2;
