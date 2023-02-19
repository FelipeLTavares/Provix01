import "./styles.css";

import FormImg from "../../assets/SVG/Ativo 13.svg";

const Form = () => {
  return (
    <div id="formContainer">
      <img src={FormImg} alt="ImgFormulario" id="formImg" />

      <form id="mainForm">
        <div id="formHeader">
          <div id="formHeaderTitleBox">
            <span id="formTrabalhe">TRABALHE</span>
            <span id="formConosco">Conosco</span>
          </div>
        </div>

        <div id="formInputsBox">
          <input
            className="formInput"
            id="nome"
            placeholder="Nome"
            type="text"
          />

          <input
            className="formInput"
            id="email"
            placeholder="Nome"
            type="text"
          />
          <input
            className="formInput"
            id="sobrenome"
            placeholder="Nome"
            type="text"
          />
          <input
            className="formInput"
            id="telefone"
            placeholder="Nome"
            type="text"
          />
          <input
            className="formInput"
            id="formButton"
            placeholder="Nome"
            type="submit"
            value="Enviar"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
