import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    state = {
        categories:[]
    }
    componentDidMount(){
        this.getCategories();
    }
    getCategories = () =>{
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>this.setState({categories:data}));
    }
    
  render() {
    return (
      <div>
        {this.props.selectedCategory}
        <ListGroup>
            {this.state.categories.map(category=>{
               return <ListGroupItem onClick={()=>this.props.setSelectedItem(category.categoryName)} key={category.id}>{category.categoryName}</ListGroupItem>
            })}
        </ListGroup>
      </div>
    )
  }
}
