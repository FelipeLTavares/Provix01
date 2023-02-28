import "./styles.css";

import logo from "../../assets/SVG/Ativo 1.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <nav className="mainHeader">
        <img src={logo} alt="LOGO" id="logo" />

        <div id="headerLinks">
          <Link to="/" className="navLink">
            INÍCIO
          </Link>
          <Link to="/empresa" className="navLink">
            EMPRESA
          </Link>
          <Link to="/equipe" className="navLink">
            QUEM SOMOS
          </Link>
          <Link to="/contato" className="navLink">
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
          <Link to="/" className="navLink">
            INÍCIO
          </Link>
          <Link to="/empresa" className="navLink">
            EMPRESA
          </Link>
          <Link to="/empresa" className="navLink">
            EQUIPE
          </Link>
          <Link to="/contato" className="navLink">
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
