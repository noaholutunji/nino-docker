import CheckOut from '../src/containers/CheckOut/CheckOut';
import { authInitialProps } from '../src/lib/auth';

const CheckOutPage = () => {
  return (
    <>
      <CheckOut />
    </>
  );
};

CheckOutPage.getInitialProps = authInitialProps(true, '/login');

export default CheckOutPage;
