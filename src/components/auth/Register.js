// React
import React, { useState } from 'react';
// React Router Dom
import { Redirect, Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Set Alert and Register actions
import { setAlert } from '../../_actions/alert';
import { register } from '../../_actions/auth';
// Material UI Components
import {
  TextField,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Button,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import '../../assets/css/Register.css';

const INIT_STATE = {
  first_name: '',
  last_name: '',
  email: '',

  password: '',
  password2: '',
  showPassword: false,
};
const Register = () => {
  const auth = useSelector((st) => st.auth);
  const dispatch = useDispatch();
  const [values, setValues] = useState(INIT_STATE);

  const {
    first_name,
    last_name,
    email,

    password,
    password2,
  } = values;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((l) => ({ ...l, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  if (auth.isAuth) {
    return <Redirect to="" href="/dashboard" />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert('Passwords do not match', 'error'));
    } else {
      dispatch(register({ first_name, last_name, email, password }));
    }
  };

  return (
    <div id="Register" className="container">
      <div className="form-box-register">
        <div className="form-title">
          <h2>Register</h2>
        </div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <TextField
                label="First name"
                id="outlined-margin-none"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                className="text-field"
                variant="outlined"
              />
            </div>
            <div className="col-6">
              <TextField
                label="Last name"
                id="outlined-margin-none"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                className="text-field"
                variant="outlined"
              />
            </div>

            <div className="col-12">
              <TextField
                id="outlined-full-width"
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                helperText="Dont worry, we wont spam you"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </div>

            <div className="col-12">
              <FormControl
                className="text-field"
                variant="outlined"
                margin="normal"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
            </div>
            <div className="col-12">
              <FormControl
                className="text-field"
                variant="outlined"
                margin="normal"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password2}
                  name="password2"
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={135}
                />
              </FormControl>
              <Link className="text-center" to="/login">
                Already have an account? Login
              </Link>
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit-button"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
