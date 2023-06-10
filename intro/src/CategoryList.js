import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    state = {
        categories:[{id:1,name:"Chai"},{id:2,name:"Cheese"}],
        
    }
    
  render() {
    return (
      <div>
        {this.props.selectedCategory}
        <ListGroup>
            {this.state.categories.map(category=>{
               return <ListGroupItem onClick={()=>this.props.setSelectedItem(category.name)} key={category.id}>{category.name}</ListGroupItem>
            })}
        </ListGroup>
      </div>
    )
  }
}
