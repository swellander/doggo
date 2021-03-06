import React from 'react';
import Form from './Form';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const name = e.target.value;
    this.setState({name})
  }

  onSubmit(e) {
    this.props.update(e, this.state, this.props.id);
    //redirect to home page
    this.setState({redirect: true})
  }

  

  render() {
    if(this.state.redirect) return <Redirect push to="/" />
    return (
      <Form 
        submit={this.onSubmit}
        change={this.onChange}
        name={this.state.name}
      />
    )
  }
}
