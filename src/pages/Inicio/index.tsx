import "./styles.css";

import mainBanner from "../../assets/mainBanner.jpg";

const Inicio = () => {
  return (
    <>
      <div className="container">
        <img src={mainBanner} alt="Banner" id="mainBanner" />
      </div>
    </>
  );
};

export default Inicio;
