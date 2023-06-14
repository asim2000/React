import React, { Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productAction from '../../redux/actions/productAction';
import * as cartAction from '../../redux/actions/cartAction';
import {Table,Button} from 'reactstrap';

class ProductList extends Component {
  componentDidMount(){
    this.props.actions.getProducts(this.props.currentCategory)
  }
  addToCart(product) {
    this.props.actions.addToCart({product,quantity:1})
  }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>QuantityPerUnit</th>
              <th>UnitPrice</th>
              <th>UnitsInStock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td>
                    <Button
                      color="info"
                      onClick={() => this.addToCart(product)}
                    >
                      Add
                    </Button>
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

function mapStateToProps(state) {
  return {
    products:state.getProductsReducer,
    currentCategory:state.changeCategoryReducer
  }
}

function mapDispatchToProps(dispatch) {
  return{
    actions:{
      getProducts:bindActionCreators(productAction.getProducts,dispatch),
      addToCart:bindActionCreators(cartAction.addToCart,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
