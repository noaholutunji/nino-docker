import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import Router from 'next/router';
import {
  MDBBtn,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  // MDBTooltip,
  MDBCardFooter,
  MDBIcon
} from 'mdbreact';

interface IntProps {
  userId: string;
  obj: {
    _id: string;
    image: string;
    name: string;
    brand: string;
    price: number;
    description: string;
    owner: string;
  };
}

const Table = (props: IntProps) => {
  const router = useRouter();
  const { id } = router.query;

  const deleted = async () => {
    const token = cookie.get('jwtToken');

    axios
      .delete(`/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        Router.push('/products');
      })
      .catch(err => console.log(err));
  };
  console.log(props.userId);
  console.log(props.obj.owner);

  return (
    <>
      <MDBCardImage cascade top alt="" src={props.obj.image} waves />

      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
          <strong>Name: </strong>
          {props.obj.name}
        </MDBCardTitle>
        <MDBCardTitle tag="h5">
          <strong>Brand: </strong>
          {props.obj.brand}
        </MDBCardTitle>
        <MDBCardTitle>
          <span className="float-left">
            <span className="discount mx-2">
              ₦ {props.obj.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </span>
          </span>
        </MDBCardTitle>
        <MDBCardText>{props.obj.description}</MDBCardText>

        {props.userId === props.obj.owner && (
          <div>
            <Link
              href={`/edit?id=${props.obj._id}`}
              as={`/edit/${props.obj._id}`}
            >
              <a className="btn btn-primary btn-sm">Edit</a>
            </Link>

            <MDBBtn onClick={deleted} color="danger btn-sm">
              Delete
            </MDBBtn>
          </div>
        )}
      </MDBCardBody>
    </>
  );
};

export default Table;
