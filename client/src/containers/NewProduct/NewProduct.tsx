import React, { useState, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../store/actions/productActions';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Footer from '../../components/Footer/Footer';
// import { Redirect } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdbreact';

const NewProduct = props => {
  const [name, setName] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  // const [redirect, setRedirect] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBrand(event.target.value);
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(event.target.value);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setImage(event.target.value);
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setDescription(event.target.value);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const data = {
      name,
      brand,
      price,
      image,
      description
    };
    try {
      await props.createProduct(data);
      // setRedirect(true);
      Router.push('/products');
    } catch (error) {
      console.log(error);
    }
  };

  // if (redirect) {
  //   return <Redirect to={'/products'} />;
  // }

  return (
    <>
      <MDBContainer>
        <MDBRow className="justify-content-center mt-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <p className="h4 text-center py-1">Add New Product</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Name"
                      icon="user"
                      group
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Brand"
                      icon="mobile"
                      group
                      type="text"
                      value={brand}
                      onChange={handleBrandChange}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Price"
                      icon="tag"
                      group
                      type="number"
                      value={price}
                      onChange={handlePriceChange}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Image"
                      icon="image"
                      group
                      type="text"
                      value={image}
                      onChange={handleImageChange}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Description"
                      icon="pencil-alt"
                      group
                      type="text"
                      value={description}
                      onChange={handleDescriptionChange}
                      validate
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="cyan" type="submit">
                      Add Product
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
};

NewProduct.propTypes = {
  createProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProduct }
)(NewProduct);
