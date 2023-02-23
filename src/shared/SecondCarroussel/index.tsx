import "./styles.css";

import { useState } from "react";

const NewCarousel = () => {
  const [testee, setTestee] = useState(0);

  const lista2 = [
    "https://picsum.photos/id/1/1000/1500",
    "https://picsum.photos/id/12/1000/1500",
    "https://picsum.photos/id/123/1000/1500",
    "https://picsum.photos/id/143/1000/1500",
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
    <div id="SCarContainer">
      <div id="SCarTitle">Nossas Ações</div>
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
    </div>
  );
};

export default NewCarousel;
