import "./styles.css";
import fotoArea1 from "../../assets/area1.jpg";
import fotoArea2 from "../../assets/area2.jpg";
import fotoArea3 from "../../assets/area3.jpg";
import fotoArea4 from "../../assets/area4.jpg";
import fotoArea5 from "../../assets/area5.jpg";
import fotoArea6 from "../../assets/area6.jpg";
import fotoArea7 from "../../assets/area7.jpg";

import { useState } from "react";

const NewCarousel2 = () => {
  const [testee, setTestee] = useState(0);

  const lista2 = [
    fotoArea1,
    fotoArea2,
    fotoArea3,
    fotoArea4,
    fotoArea5,
    fotoArea6,
    fotoArea7
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
