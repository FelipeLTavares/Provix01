import "./styles.css";

import logo from "../../assets/SVG/Ativo 34.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="LOGO" id="logo" />
      <Link to="/" className="navLink2">
        INÍCIO
      </Link>
      <Link to="/empresa" className="navLink2">
        EMPRESA
      </Link>
      <Link to="/empresa" className="navLink2">
        EQUIPE
      </Link>
      <Link to="/contato" className="navLink2">
        CONTATO
      </Link>
    </nav>
  );
};

export default Header;
