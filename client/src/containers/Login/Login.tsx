import React, { useState, SyntheticEvent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Router from 'next/router';
import cookie from 'js-cookie';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdbreact';

export const Login = props => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [redirect, setRedirect] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const data = {
      email,
      password
    };
    try {
      await props.login(data);
      // setRedirect(true);
      Router.push('/products');
    } catch (error) {
      console.log(error);
    }
  };

  if (cookie.get('jwtToken')) {
    Router.push('/products');
  }

  return (
    <>
      <MDBContainer className="pb-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <MDBCard className="mt-5">
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <p className="h4 text-center py-1">Login</p>
                  <MDBInput
                    label="Email Address"
                    icon="envelope"
                    group
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Password"
                    icon="lock"
                    group
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    validate
                  />

                  <div className="text-center">
                    <MDBBtn color="cyan" type="submit">
                      Login
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(Login);
