import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Navi from "./Navi";
import { Component } from "react";
import alertify from 'alertifyjs';
import { Routes,Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo from "./FormDemo";
class App extends Component {
  state = {
    selectedCategory: {},
    products: [],
    cart: [],
  };
  componentDidMount() {
    this.getProducts();
  }
  removeFromCart = product => {
    let newCart = this.state.cart.filter(item=>item.product.id!==product.id);
    this.setState({cart:newCart});
    alertify.success(product.productName+" successfully removed.")
  }
  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(item=>item.product.id===product.id)
    addedItem ? addedItem.quantity++ : newCart.push({product:product,quantity:1});
    this.setState({cart:newCart});
    alertify.success(product.productName+" successfully added.")
  };
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) url += "?categoryId=" + categoryId;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  setSelectedCategory = (selectedCategory) => {
    this.setState({
      selectedCategory: selectedCategory,
    });
    this.getProducts(selectedCategory.id);
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Navi cart={this.state.cart} removeFromCart = {this.removeFromCart} />
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                setSelectedCategory={this.setSelectedCategory}
                selectedCategory={this.state.selectedCategory}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route exact path="/" Component={()=>(
                  <ProductList
                  products={this.state.products}
                  addToCart={this.addToCart}
                />
                )
                  
                }/>
                <Route exact path="/cart" Component={()=>(
                  <CartList cart={this.state.cart} removeFromCart={this.removeFromCart}/>
                )}/>
                <Route path="/form" Component={FormDemo}/>
                <Route path="*" Component={NotFound}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
