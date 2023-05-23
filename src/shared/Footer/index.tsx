import "./styles.css";

import logo from "../../assets/SVG/Ativo 29.svg";
import instagram from "../../assets/SVG/Ativo 32.svg";
import facebook from "../../assets/SVG/Ativo 30.svg";
import linkedin from "../../assets/SVG/Ativo 31.svg";
import { Link } from "react-router-dom";
import fundo from "../../assets/SVG/Ativo 15.svg";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="footer">
        <img src={logo} alt="LOGO" id="logoFooter" />
        <div className="colunaFooter">
          <span>Navegação</span>
          <Link to="/" className="footerlink">
            Início
          </Link>
          <Link to="/empresa" className="footerlink">
            Empresa
          </Link>
          <Link to="/empresa" className="footerlink">
            Quem somos
          </Link>
          <Link to="/contato" className="footerlink">
            Contato
          </Link>
        </div>
        <div className="colunaFooter">
          <span>Contatos</span>
          <a className="footerlink">
            Parque Iracema, 2799 A <br/> • BR 116 • Fortaleza
          </a>
          <a className="footerlink">
            (85) 3469-9003
          </a>
          <a className="footerlink">
            administrativo@provix.com.br
          </a>
        </div>
        <div className="colunaFooter">
          <span>Sociais</span>
          <div className="LinhaSocial">
            <img src={facebook} alt="facebook" id="iconesSociais" />
            <a className="footerlink">
            provixdistribuidora
            </a>
          </div>
          <div className="LinhaSocial">
            <img src={instagram} alt="instagram" id="iconesSociais" />
            <a className="footerlink">
            provixdistribuidora
            </a>
          </div>
          <div className="LinhaSocial">
            <img src={linkedin} alt="linkedin" id="iconesSociais" />
            <a className="footerlink">
            provixdistribuidora
            </a>
          </div>
        </div>
      </div>
      <img src={fundo} id="fundo" />
    </div>
  );
};

export default Footer;
