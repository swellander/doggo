import React from 'react'
import axios from 'axios';

export default class Doggo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      url: ''
    }
  }

  componentDidMount() {
    axios('https://dog.ceo/api/breeds/image/random')
      .then( ({data}) => this.setState({url: data.message}))
      .catch(err => console.log(err))
  }
  
  render() {
    const imgStyle = {
      width: '100%',
    }

    const cardStyle = {
      width: '18rem',
      margin: '2rem',
      padding: '1rem'
    }

    const { doggo } = this.props;
    return (
      <div style={cardStyle} className="card">
        <img style={imgStyle} className="card-img-top" src={this.state.url} alt={doggo.name} />
        <div className="card-body">
          <h5 className="card-title">{doggo.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="btn btn-info">Update</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div> 
    )
  }
}
