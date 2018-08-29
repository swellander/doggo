import React from 'react';
import Create from './Create';
import Update from './Update';
import AllDogs from './AllDogs';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';


export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { doggos: []
    }
    this.deleteDoggo = this.deleteDoggo.bind(this);
    this.createDoggo = this.createDoggo.bind(this);
    this.updateDoggo = this.updateDoggo.bind(this);
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

  createDoggo(e, doggo) {
    e.preventDefault();
    axios('https://dog.ceo/api/breeds/image/random')
      .then( ({data}) => doggo.imgUrl = data.message)
      .then(() => console.log(doggo))
      .then(() => axios.post('/api/doggos', doggo)
      .then(response => response.data)
      .then( doggo => {
        console.log(this.state);
        this.setState({ doggos: [ ...this.state.doggos, doggo] })
      }))
    
      .catch(err => console.log(err))
      .catch(err => console.log(err))
  }

  updateDoggo(e, doggo, id) {
    e.preventDefault();
    axios.put(`/api/doggos/${id}`, doggo)
      .then(() => console.log('hey'))
  }

  render() {
    return (
      <div>
        <Link to='/' className="btn btn-primary">Home</Link>
        <Link to='/add' className="btn btn-success">Add Doggo</Link>
        <Route exact path="/" render={() => <AllDogs deleteDoggo={this.deleteDoggo} doggos={this.state.doggos} /> } />
        <Route path="/add" render={() => <Create create={this.createDoggo} /> } />
        <Route path="/update/:id" render={(props)=> <Update update={this.updateDoggo} id={props.match.params.id} />} />
      </div>
    )
  }
}
