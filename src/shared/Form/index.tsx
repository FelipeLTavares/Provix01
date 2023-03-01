import "./styles.css";

import emailjs from "@emailjs/browser";

import FormImg from "../../assets/SVG/Ativo 13.svg";
import { useRef } from "react";

const Form = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current!,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          window.alert("E-mail enviado com sucesso");
        },
        (error) => {
          window.alert("Falha ao enviar e-mail. Tente novamente mais tarde.");
        }
      );
  };

  return (
    <div id="formContainer">
      <div id="formImgBox">
        <img src={FormImg} alt="ImgFormulario" id="formImg" />
      </div>

      <form ref={form} onSubmit={sendEmail} id="mainForm">
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
            name="nome"
          />

          <input
            className="formInput"
            id="email"
            placeholder="Email"
            type="text"
            name="email"
          />
          <input
            className="formInput"
            id="sobrenome"
            placeholder="Sobrenome"
            type="text"
            name="sobrenome"
          />
          <input
            className="formInput"
            id="telefone"
            placeholder="Telefone"
            type="text"
            name="telefone"
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
