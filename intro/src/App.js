import logo from './logo.svg';
import './App.css';
import {Container,Row,Col} from 'reactstrap';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Navi from './Navi';
import { Component } from 'react';
class App extends Component {
  state={
    selectedCategory:""
  }
  setSelectedItem = selectedItem => this.setState({selectedCategory:selectedItem})
  render(){
    return (
      <div>
        <Container>
      <Row>
        <Navi/>
      </Row>
      <Row>
        <Col xs="3">
          <CategoryList setSelectedItem={this.setSelectedItem} selectedCategory = {this.state.selectedCategory}/>
        </Col>
        <Col xs="9">
          <ProductList selectedCategory = {this.state.selectedCategory}/>
        </Col>
      </Row>
    </Container>
      </div>
    );
  }
}

export default App;
