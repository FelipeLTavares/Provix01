import "./styles.css";

import FormImg from "../../assets/SVG/Ativo 13.svg";

const Form = () => {
  return (
    <div id="formContainer">
      <div id="formImgBox">
        <img src={FormImg} alt="ImgFormulario" id="formImg" />
      </div>

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
            placeholder="Email"
            type="text"
          />
          <input
            className="formInput"
            id="sobrenome"
            placeholder="Sobrenome"
            type="text"
          />
          <input
            className="formInput"
            id="telefone"
            placeholder="Telefone"
            type="text"
          />
          <input
            className="formInput"
            id="formButton"
            placeholder="Enviar"
            type="submit"
            value="Enviar"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
