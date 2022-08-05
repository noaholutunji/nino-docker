import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Body from './Body/Body';
import Link from 'next/link';
import cookie from 'js-cookie';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Products = props => {
  const [product, setProduct] = useState(null);

  const user = cookie.get('jwtToken');

  const userLinks = (
    <p className="lead">
      <Link href="/new">
        <MDBBtn color="primary">Add Product</MDBBtn>
      </Link>
    </p>
  );

  const guestLinks = <div></div>;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/products');
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props]);

  const tabRow = () => {
    return (
      product &&
      product.map(function(object, i) {
        return <Body obj={object} key={i} />;
      })
    );
  };

  return (
    <>
      <MDBContainer className="mt-3 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h2 className="h1 display-4">Welcome to NinoStyle</h2>
              <p className="lead">Shop with 100% confidence</p>
              <hr />
              <p className="">
                Get any kind of fashion wears you want at affordable prices
              </p>

              {user ? userLinks : guestLinks}
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>

        <MDBRow>{tabRow()}</MDBRow>
      </MDBContainer>
    </>
  );
};

export default Products;
