import React from 'react';
import Create from './Create';
import Update from './Update';
import AllDogs from './AllDogs';
import { Link, Route } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to='/' className="btn btn-primary">Home</Link>
      <Link to='/add' className="btn btn-success">Add Doggo</Link>
      <Route exact path="/" component={AllDogs} />
      <Route path="/add" component={Create} />
      <Route path="/update/:id" render={(props)=> <Update id={props.match.params.id} />} />
    </div>
  )
}
