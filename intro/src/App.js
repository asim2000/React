import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from 'reactstrap';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Navi from './Navi';
import { Component } from 'react';
class App extends Component {
  state={
    selectedCategory:{},
    products:[]
  }
  componentDidMount(){
    this.getProducts();
}
getProducts = (categoryId) => {
  let url = "http://localhost:3000/products";
  if(categoryId) url += "?categoryId="+categoryId;
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}));
}
  setSelectedCategory = selectedCategory => {
    this.setState({
      selectedCategory:selectedCategory,
    });
    this.getProducts(selectedCategory.id);
  }
  render(){
    return (
      <div>
        <Container>
      <Row>
        <Navi/>
      </Row>
      <Row>
        <Col xs="3">
          <CategoryList setSelectedCategory={this.setSelectedCategory} selectedCategory = {this.state.selectedCategory}/>
        </Col>
        <Col xs="9">
          <ProductList products = {this.state.products}/>
        </Col>
      </Row>
    </Container>
      </div>
    );
  }
}

export default App;
