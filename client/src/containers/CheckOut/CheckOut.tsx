import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBInput,
  MDBCardBody,
  MDBBtn
} from 'mdbreact';

const CheckOut = props => {
  const cart = props.cart;

  const ProductTable = styled(MDBTable)`
    td {
      vertical-align: middle;
    }
  `;

  const [cols] = useState([
    {
      label: 'Product',
      field: 'product'
    },
    {
      label: 'QTY',
      field: 'qty'
    },
    {
      label: 'Amount',
      field: 'amount'
    }
  ]);

  const rows = [];
  cart.addedItems.map(item => {
    return rows.push({
      product: [
        <h5 className="mt-3">
          <strong>{item.name}</strong>
        </h5>
      ],
      qty: `${item.quantity}`,
      amount: (
        <strong>
          ₦{' '}
          {(item.quantity * item.price)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        </strong>
      )
    });
  });

  return (
    <MDBContainer>
      <div></div>
      <MDBRow>
        <MDBCol md="6" className="mt-4">
          <h4 className="text-center mt-1">CHECKOUT</h4>
          <form>
            <div className="grey-text">
              <MDBInput
                label="First Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Last Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Phone Number"
                icon="mobile"
                group
                type="number"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Shipping Address"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />

              <p className="lead mt-3 py-2 ml-5">
                <Link href="/checkout/successfulorder">
                  <MDBBtn color="primary">Confirm Order</MDBBtn>
                </Link>
              </p>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="6">
          <h4 className="text-center mt-4">Your Order Summary</h4>
          <MDBCardBody>
            <ProductTable className="product-table">
              <MDBTableHead
                className="font-weight-bold"
                color="mdb-color lighten-5"
                columns={cols}
              />
              <MDBTableBody rows={rows} />
            </ProductTable>
            <MDBBtn>
              Total: ₦{' '}
              {cart.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  null
)(CheckOut);
