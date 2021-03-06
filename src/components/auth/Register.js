import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useRegister from '../hooks/useRegister';
import validate from '../utilities/validateRegister';
import styled from 'styled-components';

const Register = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   country: '',
  //   password: '',
  //   password2: ''
  // });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();
  // Destructuring
  // const { name, email, country, password, password2 } = formData;

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  // };

  const callback = (values) => {
    setName(values.name);
    setEmail(values.email);
    setCountry(values.country);
    setPassword(values.password);
    setPassword2(values.password2);
    setIsValid(true);
  };

  const { handleChange, values, handleClick, errors } = useRegister(
    callback,
    validate
  );

  const clearFields = () => {
    setName('');
    setEmail('');
    setCountry('');
    setPassword('');
    setPassword2('');
    setIsValid(false);
  };

  useEffect(() => {
    if (!isValid) {
      return console.log('invalid');
    }

    const newUser = {
      name,
      email,
      country,
      password
    };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    };
    fetch('https://magic-find.herokuapp.com/api/users', options)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);

        history.push('/login');
      })
      .catch((error) => console.log(error));
  }, [isValid]);

  return (
    <Fragment>
      <form className="form">
        <h2 className="page-title">Register</h2>
        <div className="form-element">
          {errors.name ? (
            <p className="error">{errors.name}</p>
          ) : (
            <label htmlFor="name">Name:</label>
          )}
          <input
            className={errors.name && 'empty-field'}
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="form-element">
          {errors.email ? (
            <p className="error">{errors.email}</p>
          ) : (
            <label htmlFor="email">Email:</label>
          )}
          <input
            className={errors.email && 'empty-field'}
            id="email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-element">
          {errors.country ? (
            <p className="error">{errors.country}</p>
          ) : (
            <label htmlFor="country">Country:</label>
          )}
          <input
            className={errors.country && 'empty-field'}
            id="country"
            type="text"
            name="country"
            value={values.country}
            onChange={handleChange}
            placeholder="Country"
          />
        </div>
        <div className="form-element">
          {errors.password ? (
            <p className="error">{errors.password}</p>
          ) : (
            <label htmlFor="password">Password:</label>
          )}
          <input
            className={errors.password && 'empty-field'}
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="form-element">
          {errors.password2 ? (
            <p className="error">{errors.password2}</p>
          ) : (
            <label htmlFor="password2">Repeat Password:</label>
          )}

          <input
            className={errors.password2 && 'empty-field'}
            id="password2"
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
            placeholder="Repeat Password"
          />
          <div className="item-buttons">
            <button className="item-button primary " onClick={clearFields}>
              Clear
            </button>
            <button className="item-button success" onClick={handleClick}>
              Register
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Register;
