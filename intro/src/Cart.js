import React, { Component } from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { Alert, Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Dropdown nav isOpen={this.props.dropdownOpen} toggle={this.props.toggle}>
        <DropdownToggle nav caret>
        <GiShoppingCart/>
        <Badge color="primary">
      {this.props.cart.length}
      </Badge>
        </DropdownToggle>
        <DropdownMenu>
                {
                  this.props.cart.map(cart=>{
                    return<DropdownItem header>
                      {cart.product.productName+" "+cart.quantity}
                    </DropdownItem>
                  })
                }
        </DropdownMenu>
      </Dropdown>
      </div>
    )
  }
}
