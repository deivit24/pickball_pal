import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { login } from '../../_actions/auth';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import '../../assets/css/Login.css';

import teal from '@material-ui/core/colors/teal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: '100%',
  },
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
}));

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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const classes = useStyles();
  if (auth.isAuth) {
    return <Redirect href="/dashboard" />;
  }
  return (
    <div className="container">
      <div className={classes.root}>
        <div id="form-box">
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
                  className={classes.textField}
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
    </div>
  );
};

export default Login;
