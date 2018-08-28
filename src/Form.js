import React from 'react';

export default ({submit, change, name}) => {
    return (
      <div className="container col-sm-4 offset-sm-4">
        <form>
          <label>Name</label>
          <input onChange={change} value={name} name="name" type="text" className="form-control" placeholder="Doggo's name" />
          <button onClick={submit} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
}
