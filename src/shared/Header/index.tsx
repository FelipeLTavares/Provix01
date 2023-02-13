import "./styles.css";

import logo from "../../assets/SVG/Ativo 1.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="LOGO" id="logo" />
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
    </nav>
  );
};

export default Header;
