import Add from '../src/containers/NewProduct/NewProduct';
import { authInitialProps } from '../src/lib/auth';

const NewProduct = () => {
  return (
    <>
      <Add />
    </>
  );
};

NewProduct.getInitialProps = authInitialProps(true, '/login');

export default NewProduct;
