import React, { Component } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

export default class CartList extends Component {
  render() {
    return (
      <div>
        <p className='mt-5 mb-5'><Link to="/"><Button>Product List</Button></Link></p>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>QuantityPerUnit</th>
              <th>UnitPrice</th>
              <th>UnitsInStock</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(item => {
              return (
                <tr key={item.product.id}>
                  <th scope="row">{item.product.id}</th>
                  <td>{item.product.productName}</td>
                  <td>{item.product.quantityPerUnit}</td>
                  <td>{item.product.unitPrice}</td>
                  <td>{item.product.unitsInStock}</td>
                  <td>{item.quantity}</td>
                  <td>
                  <RiDeleteBin6Line color='red' onClick={()=>this.props.removeFromCart(item.product)}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}
