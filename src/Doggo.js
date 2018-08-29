import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Doggo extends React.Component {
  render() {
    const imgStyle = {
      width: '100%',
    }

    const cardStyle = {
      width: '18rem',
      margin: '2rem',
      padding: '1rem'
    }

    const { doggo, updateDoggo, deleteDoggo } = this.props;
    return (
      <div style={cardStyle} className="card">
        <img style={imgStyle} className="card-img-top" src={doggo.imgUrl} alt={doggo.name} />
        <div className="card-body">
          <h5 className="card-title">{doggo.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={`/update/${doggo.id}`} className="btn btn-info">Update</Link>
          <button onClick={() => deleteDoggo(doggo.id)} className="btn btn-danger">Delete</button>
        </div>
      </div> 
    )
  }
}
