import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { toggleLogin } from '../Pages/LoginPage';
import { toggleSignup } from '../Pages/SignupPage';

const PleaseLogin = (props) => (
  <div className="please-log-in-container">
    <h1 className="please-log-in">
      Please Log In to
      {' '}
      {props.message}
    </h1>
    <div className="please-log-in-button-container">
      <Button
        variant="contained"
        color="success"
        startIcon={<LoginIcon />}
        sx={{ width: '300px', marginTop: '20px' }}
        onClick={toggleLogin}
      >
        Log In
      </Button>
      <Button
        variant="contained"
        color="success"
        startIcon={<PersonAddIcon />}
        sx={{ width: '300px', marginTop: '20px' }}
        onClick={toggleSignup}
      >
        Sign Up
      </Button>
    </div>
  </div>
);

export default PleaseLogin;

PleaseLogin.propTypes = {
  message: PropTypes.string.isRequired,
};
