import React from 'react';
import axios from 'axios';
import Doggo from './Doggo';

export default ({ doggos, deleteDoggo, updateDoggo }) => {
    return (
      <div>
        <div className="row">
          { 
            doggos.map(doggo => 
              <Doggo 
                deleteDoggo={deleteDoggo} 
                updateDoggo={updateDoggo}
                key={doggo.id} 
                doggo={doggo} 
              />
            ) 
          }
        </div> 
      </div>
    )
}
