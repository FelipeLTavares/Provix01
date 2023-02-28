import "./styles.css";

import logo from "../../assets/SVG/Ativo 34.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <nav className="mainHeader">
        <img src={logo} alt="LOGO" id="logo" />

        <div id="headerLinks">
          <Link to="/" className="navLink2">
            INÍCIO
          </Link>
          <Link to="/empresa" className="navLink2">
            EMPRESA
          </Link>
          <Link to="/equipe" className="navLink2">
            QUEM SOMOS
          </Link>
          <Link to="/contato" className="navLink2">
            CONTATO
          </Link>
        </div>

        <div
          id="headerHiddenMenu"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <div className="hiddenMenuICon"></div>
          <div className="hiddenMenuICon"></div>
          <div className="hiddenMenuICon"></div>
        </div>
      </nav>

      <div id="headerModal" style={{ display: openModal ? "flex" : "none" }}>
        <div id="headerModalContent">
          <Link to="/" className="navLink2">
            INÍCIO
          </Link>
          <Link to="/empresa" className="navLink2">
            EMPRESA
          </Link>
          <Link to="/equipe" className="navLink2">
            QUEM SOMOS
          </Link>
          <Link to="/contato" className="navLink2">
            CONTATO
          </Link>
          <div
            id="headerModalVoltar"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
