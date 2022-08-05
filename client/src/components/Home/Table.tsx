import React from 'react';
import { MDBCol } from 'mdbreact';
import styled from 'styled-components';

const Img: any = styled.img`
  max-height: 220px;
  max-width: 220px;
`;

export interface Image {
  obj: {
    _id: string;
    name: string;
    price: string;
    brand: string;
    description: string;
    image: string;
    owner: string;
  };
}

const TableImg = (props: Image) => {
  return (
    <>
      <MDBCol className="mt-3">
        <Img
          className="img-fluid"
          alt=""
          cascade
          top
          src={props.obj.image}
          waves
        />
      </MDBCol>
    </>
  );
};

export default TableImg;
