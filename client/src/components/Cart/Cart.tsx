import React, { useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { IntProps } from '../Products/Body/Body';
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from '../../store/actions/cartActions';
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCol,
  // MDBTooltip,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  // MDBInput,
  MDBBtn
} from 'mdbreact';

const ImgCart = styled.img`
  max-height: 150px;
  min-width: 50px;
`;

const ProductTable = styled(MDBTable)`
  td {
    vertical-align: middle;
    &:nth-child(6) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

export const Cart = (props: IntProps) => {
  const handleRemove = (product: {}) => {
    props.removeItem(product);
  };
  //to add the quantity
  const handleAddQuantity = (product: {}) => {
    props.addQuantity(product);
  };
  //to substruct from the quantity
  const handleSubtractQuantity = (product: {}) => {
    props.subtractQuantity(product);
  };

  const cart = props.cart;

  const [cols] = useState([
    {
      label: '',
      field: 'img'
    },
    {
      label: 'Product',
      field: 'product'
    },

    {
      label: 'Price',
      field: 'price'
    },
    {
      label: 'QTY',
      field: 'qty'
    },
    {
      label: 'Amount',
      field: 'amount'
    },
    {
      label: '',
      field: 'button'
    }
  ]);

  const rows:
    | {
        [rest: string]: any;
        clickEvent?: (() => void) | undefined;
        colspan?: number | undefined;
      }[]
    | {
        img: JSX.Element;
        product: JSX.Element[];
        price: string;
        qty: string;
        amount: JSX.Element;
        button: JSX.Element;
      }[]
    | undefined = [];
  cart.addedItems.map(
    (item: {
      image: string | undefined;
      name: React.ReactNode;
      price: number;
      quantity: number;
      _id: {};
    }) => {
      return rows.push({
        img: (
          <ImgCart src={item.image} alt="" className="img-fluid z-depth-0" />
        ),

        product: [
          <h5 className="mt-3">
            <strong>{item.name}</strong>
          </h5>
        ],
        price: `₦ ${item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`,

        qty: `${item.quantity}`,
        amount: (
          <strong>
            ₦{' '}
            {(item.quantity * item.price)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </strong>
        ),

        button: (
          <>
            {/* <MDBTooltip placement="top"> */}
            <MDBBtn
              title="Increase quantity"
              color="success"
              size="sm"
              onClick={() => {
                handleAddQuantity(item._id);
              }}
            >
              +
            </MDBBtn>
            {/* <div>Increase quantity</div> */}
            {/* </MDBTooltip> */}
            {/* <MDBTooltip placement="top"> */}
            <MDBBtn
              color="info"
              size="sm"
              onClick={() => {
                handleSubtractQuantity(item._id);
              }}
              disabled={item.quantity === 1}
            >
              -
            </MDBBtn>
            {/* <div>Decrease quantity</div> */}
            {/* </MDBTooltip> */}
            {/* <MDBTooltip placement="top"> */}
            <MDBBtn
              color="danger"
              size="sm"
              onClick={() => {
                handleRemove(item._id);
              }}
            >
              X
            </MDBBtn>
            {/* <div>Remove item</div> */}
            {/* </MDBTooltip> */}
          </>
        )
      });
    }
  );

  return cart.addedItems.length > 0 ? (
    <>
      <MDBRow className="my-2 ml-3 mr-1 mb-5" center>
        <MDBCol xs="6" md="12">
          <MDBCard className="w-100">
            <MDBCardBody>
              <ProductTable className="product-table" responsive>
                <MDBTableHead
                  className="font-weight-bold"
                  color="mdb-color lighten-5"
                  columns={cols}
                />
                <MDBTableBody rows={rows} />
              </ProductTable>
            </MDBCardBody>
          </MDBCard>
          <div className="text-center">
            <h3 className="my-4">
              <strong>Total:</strong> ₦{' '}
              {cart.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </h3>

            <p className="lead mt-3 py-2 ml-5">
              <Link href="/checkout">
                <MDBBtn color="primary">CheckOut</MDBBtn>
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  ) : (
    <>
      <p className="text-center my-5">
        <h5>
          <strong>Your cart is empty!</strong>
        </h5>
      </p>
    </>
  );
};

const mapStateToProps = (state: { cart: {} }) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch: {
  (arg0: { type: string; id: string }): void;
  (arg0: { type: string; id: string }): void;
  (arg0: { type: string; id: string }): void;
}) => {
  return {
    removeItem: (product: string) => {
      dispatch(removeItem(product));
    },
    addQuantity: (product: string) => {
      dispatch(addQuantity(product));
    },
    subtractQuantity: (product: string) => {
      dispatch(subtractQuantity(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
