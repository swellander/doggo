import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Form extends React.Component {
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
    e.preventDefault();
    axios.post('/api/doggos', this.state)
      .then(response => console.log(response))
      .catch(err => console.log(err))
    //redirect to home page
    this.setState({redirect: true})
  }



  render() {
    if(this.state.redirect) return <Redirect push to="/" />
    return (
      <div className="container col-sm-4 offset-sm-4">
        <form>
          <label>Name</label>
          <input onChange={this.onChange} value={this.state.name} name="name" type="text" className="form-control" placeholder="Doggo's name" />
          <button onClick={this.onSubmit} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
