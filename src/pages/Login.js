import React, { useState } from 'react';

function Login() {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateButton = () => {
    setDisable(false);
  };

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleClick = () => {
    validateButton();
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            name="email"
            value={ email }
            onChange={ handleEmail }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            name="password"
            value={ password }
            onChange={ handlePassword }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ disable }
          onClick={ handleClick }
          data-testid="login-submit-btn"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
