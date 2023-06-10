import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class ProductList extends Component {
    
  render() {
    return (
      <div>
        <Table
>
  <thead>
    <tr>
      <th>
        Id
      </th>
      <th>
        Product Name
      </th>
      <th>
      QuantityPerUnit
      </th>
      <th>
      UnitPrice
      </th>
      <th>
      UnitsInStock
      </th>
    </tr>
  </thead>
  <tbody>
    {
        this.props.products.map(product => {
           return <tr key={product.id}>
      <th scope="row">
        {product.id}
      </th>
      <td>
        {product.productName}
      </td>
      <td>
        {product.quantityPerUnit}
      </td>
      <td>
        {product.unitPrice}
      </td>
      <td>
        {product.unitsInStock}
      </td>
    </tr>
        })
    }
  </tbody>
</Table>
      </div>
    )
  }
}
