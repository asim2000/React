import React, { Component } from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { Alert, Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import {RiDeleteBin6Line} from 'react-icons/ri'

export default class Cart extends Component {
  renderSummary = ()=> {
    return <Dropdown nav isOpen={this.props.dropdownOpen} toggle={this.props.toggle}>
    <DropdownToggle nav caret>
    <GiShoppingCart/>{this.props.cart.length}
    </DropdownToggle>
    <DropdownMenu>
            {
              this.props.cart.map(item=>(
                <DropdownItem key={item.product.id} header>
                  <RiDeleteBin6Line color='red' onClick={()=>this.props.removeFromCart(item.product)}/>&nbsp;
                  {item.product.productName}
                  <Badge color="primary">{item.quantity}</Badge>
                </DropdownItem>
              ))
            }
    </DropdownMenu>
  </Dropdown>
  }
  render() {
    return (
      <div>
        {
          this.props.cart.length>0 ? this.renderSummary() : <div/>
        }
      </div>
    )
  }
}
