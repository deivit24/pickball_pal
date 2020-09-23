// React
import React, { useState } from 'react';
// React Router Dom
import { Redirect, Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Login Action
import { login } from '../../_actions/auth';

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
// Login CSS
import '../../assets/css/Login.css';

const INIT_STATE = {
  email: '',
  password: '',
  showPassword: false,
};

const Login = () => {
  const auth = useSelector((st) => st.auth);

  const dispatch = useDispatch();
  const [values, setValues] = useState(INIT_STATE);
  const { email, password } = values;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (auth.isAuth) {
    return <Redirect to="" href="/dashboard" />;
  }
  return (
    <div id="Login" className="container">
      <div className="form-box">
        <div className="form-title">
          <h2>Login</h2>
        </div>
        <form noValidate autoComplete="on" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <TextField
                id="outlined-full-width"
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                helperText=""
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
              <Link className="text-center" to="/register">
                Don't have an account? Register
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

export default Login;
