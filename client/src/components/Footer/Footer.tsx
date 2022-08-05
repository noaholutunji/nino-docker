import React from 'react';
import { MDBContainer, MDBFooter } from 'mdbreact';
import styled from 'styled-components';

// const FooterStyle = styled(MDBFooter)`
//   position: fixed;
//   width: 100%;
// `;

const Footer = () => {
  return (
    <MDBFooter className="font-small mt-3" id="FooterStyle">
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <h5 className="text-monospace">
            {' '}
            NinoStyle Designed by Noah Osuolale with Stutord
          </h5>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
