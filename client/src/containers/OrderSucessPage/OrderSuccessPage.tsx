import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol } from 'mdbreact';

const OrderSuccess = () => {
  return (
    <>
      <div className="container my-5 justify-content-center">
        <MDBCol>
          <MDBCard style={{ width: '30rem' }}>
            <MDBCardBody>
              <h2>Order Successful</h2>
              <a href="/products">Continue Shopping</a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </>
  );
};

export default OrderSuccess;
