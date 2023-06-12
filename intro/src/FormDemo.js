import alertify from 'alertifyjs'
import React, { Component } from 'react'
import { Button, Form,FormGroup, Input, Label } from 'reactstrap'

export default class 
FormDemo extends Component {
    state = {
      username:"",
      password:""
    }
    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.username + " succesfully added");
    }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input id='username' type='text' name='username' onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Username</Label>
                <Input id='password' type='password' name='password' onChange={this.handleChange}/>
            </FormGroup>
            <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}
