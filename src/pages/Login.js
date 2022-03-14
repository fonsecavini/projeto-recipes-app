import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

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

Login.propTypes = {
  history: propTypes.func.isRequired,
};

export default Login;
