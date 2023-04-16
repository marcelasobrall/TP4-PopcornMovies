import React from "react";

function RegisterForm() {
    return (
      <form action="#">
        <div className="input-group">
          <div className="input-box">
            <label htmlFor="firstname">Primeiro nome</label>
            <input type="text" name="firstname" id="firstname" placeholder="Informe seu primeiro nome" required />
          </div>
  
          <div className="input-box">
            <label htmlFor="lastname">Sobrenome</label>
            <input type="text" name="lastname" id="lastname" placeholder="Informe seu sobrenome" required />
          </div>
  
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Informe seu email" required />
          </div>
  
          <div className="input-box">
            <label htmlFor="number">Celular</label>
            <input type="tel" name="number" id="number" placeholder="(xx) xxxx-xxxx" required />
          </div>
  
          <div className="input-box">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" placeholder="Informe sua senha" />
          </div>
  
          <div className="input-box">
            <label htmlFor="Confimpassword">Confirme sua senha</label>
            <input type="password" name="Confirmpassword" id="Confirmpassword" placeholder="Confirme sua senha" />
          </div>
        </div>
  
        <div className="cadastrar-button">
          <button><a href="#">Cadastrar</a></button>
        </div>
      </form>
    );
  }
export default RegisterForm