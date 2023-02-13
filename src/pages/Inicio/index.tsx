import "./styles.css";

import mainBanner from "../../assets/mainBanner.jpg";
import Header from "../../shared/Header";

const Inicio = () => {
  return (
    <>
      <div className="container">
        <Header></Header>
        <img src={mainBanner} alt="Banner" id="mainBanner" />
        <div className="mainContent">
          <div className="text">Excelência!</div>
          <div className="videos"></div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
