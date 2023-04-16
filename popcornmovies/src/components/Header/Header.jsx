import React from 'react';

function Header() {
    return (
      <div className="form-header">
        <div className="title">
          <h1>Popcorn Movies</h1>
        </div>
        <div className="login-button">
          <button><a href="#">Entrar</a></button>
        </div>
      </div>
    );
  }

export default Header