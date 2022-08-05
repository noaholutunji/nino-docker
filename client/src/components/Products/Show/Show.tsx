import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBCard, MDBRow } from 'mdbreact';
import Table from './Table/Table';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

export interface IUser {
  _id: string;
  email: string;
  password: string;
}

export interface IProduct {
  _id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  description: string;
  owner: string;
}

export type ShowProps = {
  id: string;
};

const Products = (props: any) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const authUser = cookie.get('user');

    if (authUser) {
      setUser(JSON.parse(authUser));
    }

    axios
      .get(`/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const tabRow = () => {
    // console.log(user._id);
    return (
      product && (
        <Table obj={product} userId={user && user._id} key={product._id} />
      )
    );
  };

  return (
    <>
      <div className="mt-5 container">
        <MDBRow className="justify-content-center">
          <MDBCard
            className="m-2 mx-3 justify-content-center"
            style={{ width: '20rem' }}
            cascade
            ecommerce
          >
            {tabRow()}
          </MDBCard>
        </MDBRow>
      </div>
    </>
  );
};

export default Products;
