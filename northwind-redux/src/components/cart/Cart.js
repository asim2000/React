import React, { Component } from "react";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartAction from "../../redux/actions/cartAction";
import { RiDeleteBin6Line } from "react-icons/ri";

class Cart extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    )
  }
  renderCartSummary() {
    return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Cart
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <Link className="text-decoration-none" to="/cart">
            Go to cart
          </Link>
        </DropdownItem>

        {this.props.cart.map((item) => (
          <DropdownItem key={item.product.id}>
            <RiDeleteBin6Line
              color="red"
              onClick={() => this.props.actions.removeFromCart(item.product)}
            />
            &nbsp;
            {item.product.productName}
            <Badge color="primary">{item.quantity}</Badge>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
    )
  }
  render() {
    return <div>
      {this.props.cart.length>0 ? this.renderCartSummary() : this.renderEmpty()}
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartAction.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
