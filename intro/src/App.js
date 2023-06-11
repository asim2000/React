import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Navi from "./Navi";
import { Component } from "react";

class App extends Component {
  state = {
    selectedCategory: {},
    products: [],
    cart: [],
  };
  componentDidMount() {
    this.getProducts();
  }
  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(item=>item.product.id===product.id)
    addedItem ? addedItem.quantity++ : newCart.push({product:product,quantity:1});
    this.setState({cart:newCart});
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
              <Navi cart={this.state.cart} />
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
              <ProductList
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
