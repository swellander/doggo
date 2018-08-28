import React from 'react';
import axios from 'axios';
import Doggo from './Doggo';

export default class AllDogs extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: []
    }
  }

  componentDidMount() {
    axios.get('/api/doggos')
      .then( ({ data }) => this.setState({ doggos: data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="row">
          { this.state.doggos.map(doggo => <Doggo key={doggo.id} doggo={doggo} />) }
        </div> 
      </div>
    )
  }
}
