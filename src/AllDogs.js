import React from 'react';
import axios from 'axios';
import Doggo from './Doggo';

export default class AllDogs extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: []
    }
    this.deleteDoggo = this.deleteDoggo.bind(this);
  }

  componentWillReceiveProps() {
    console.log('will receive props')
  }
  
  componentDidMount() {
    axios.get('/api/doggos')
      .then( ({ data }) => this.setState({ doggos: data }))
      .catch(err => console.log(err))
  }

  deleteDoggo(id) {
    axios.delete(`/api/doggos/${id}`)
      .then(response => response.data)
      .then(() => this.setState({ doggos: this.state.doggos.filter(dog => dog.id !== id) }))
      .catch(err => console.log(err))
  }

  updateDoggo(id) {
    console.log('Doggo id is', id);
  }

  render() {
    console.log('allDogs is rendering');
    return (
      <div>
        <div className="row">
          { 
            this.state.doggos.map(doggo => 
              <Doggo 
                deleteDoggo={this.deleteDoggo} 
                updateDoggo={this.updateDoggo}
                key={doggo.id} 
                doggo={doggo} 
              />
            ) 
          }
        </div> 
      </div>
    )
  }
}
