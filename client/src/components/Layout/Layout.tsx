import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
