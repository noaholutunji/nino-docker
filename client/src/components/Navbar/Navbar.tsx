import React, { useState } from 'react';
import cookie from 'js-cookie';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  // MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';

const NavLink: React.FC<{ title: any; href: string }> = ({ title, href }) => {
  const router = useRouter();
  return (
    <MDBNavItem active={router.pathname === href}>
      <Link href={href}>
        <a className="nav-link">{title}</a>
      </Link>
    </MDBNavItem>
  );
};

export const Navbar = props => {
  const logout = () => {
    cookie.remove('jwtToken');
    cookie.remove('user');
    Router.push('/products');
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const user = cookie.get('jwtToken');

  const userLinks = (
    <MDBNavbarNav right>
      <NavLink title="Home" href="/" />
      <NavLink title="Products" href="/products" />
      <NavLink title="Cart" href="/cart" />
      <MDBNavItem>
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <span className="mr-2">Profile</span>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#!">Orders</MDBDropdownItem>
            <MDBDropdownItem href="#!">Account</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/">
          <a onClick={logout} className="nav-link">
            Logout
          </a>
        </Link>
      </MDBNavItem>
    </MDBNavbarNav>
  );

  const guestLinks = (
    <MDBNavbarNav right>
      <NavLink title="Home" href="/" />
      <NavLink title="Products" href="/products" />
      <NavLink title="Login" href="/login" />
      <NavLink title="Sign Up" href="/register" />
      <NavLink title="Cart" href="/cart" />
    </MDBNavbarNav>
  );

  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <Link href="/">
          <a>
            <strong className="white-text">NinoStyle</strong>
          </a>
        </Link>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>{user ? userLinks : guestLinks}</MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
