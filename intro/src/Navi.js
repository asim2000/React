import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Badge,
} from 'reactstrap';
import Cart from './Cart';
import { Link } from 'react-router-dom';
function Navi(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs>
      <NavItem>
        <NavLink active>
          <Link className='text-decoration-none' to="/">Home</Link>
        </NavLink>
      </NavItem>
      <Cart dropdownOpen = {dropdownOpen} toggle = {toggle} cart = {props.cart}  removeFromCart = {props.removeFromCart}/>
      <NavItem>
        <NavLink href='#'><Link className='text-decoration-none' to="/form">Form</Link></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navi;