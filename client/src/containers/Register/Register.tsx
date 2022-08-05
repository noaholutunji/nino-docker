import React, { useState, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import cookie from 'js-cookie';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdbreact';

const Register = (props: {
  userRegisterRequest: (arg0: {
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: string;
    password: string;
  }) => void;
}) => {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phonenumber, setPhonenumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [redirect, setRedirect] = useState(false);

  const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFirstname(event.target.value);
  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLastname(event.target.value);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePhonenumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setPhonenumber(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      phonenumber,
      password
    };
    try {
      await props.userRegisterRequest(data);
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
      <MDBContainer>
        <MDBRow className="justify-content-center mt-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <p className="h4 text-center py-1">Sign Up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="First Name"
                      icon="user"
                      group
                      type="text"
                      value={firstname}
                      onChange={handleFirstnameChange}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Last Name"
                      icon="user"
                      group
                      type="text"
                      value={lastname}
                      onChange={handleLastnameChange}
                      validate
                      error="wrong"
                      success="right"
                    />
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
                      label="Phone Number"
                      icon="phone"
                      group
                      type="number"
                      value={phonenumber}
                      onChange={handlePhonenumberChange}
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
                  </div>
                  <div className="text-center">
                    <MDBBtn color="cyan" type="submit">
                      Sign Up
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

Register.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired
};

export default Register;
