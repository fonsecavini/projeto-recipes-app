import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import '../css/login.css';

function Login(props) {
  const [disable, setDisable] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { history } = props;

  useEffect(() => {
    const SIX = 6;
    if (email.includes('@') && email.includes('.com') && password.length > SIX) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const user = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/foods');
  };

  return (
    <div className="body">
      <form className="container-login">
        <div className="container-name">
          <p>Eating is</p>
          <p>Life</p>
        </div>
        <label htmlFor="email" className="container-email">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ handleEmail }
            data-testid="email-input"
          />
        </label>
        <div />
        <div className="container-password">
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={ password }
              onChange={ handlePassword }
              data-testid="password-input"
            />
          </label>
        </div>
        <div className="container-btn">
          <button
            type="button"
            className="btn-enter"
            disabled={ disable }
            onClick={ handleClick }
            data-testid="login-submit-btn"
          >
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.func.isRequired,
};

export default Login;
