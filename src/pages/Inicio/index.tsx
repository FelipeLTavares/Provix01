import "./styles.css";

import mainBanner from "../../assets/mainBanner.jpg";

const Inicio = () => {
  return (
    <>
      <div className="container">
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
