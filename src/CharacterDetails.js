import React from 'react';
import MoreDetails from './MoreDetails';
import {
    Link,
    Route
  } from 'react-router-dom';
  import Characters from './Characters';


   function CharacterDetails({data, match, id}) {
        return(
            <div>
            <ul>
            <Link to="/">{data.name} </Link>
            {/* <li>born: {data.born}</li>
            <li>culture: {data.culture}</li> */}
          </ul>

            </div>

        );
        
    }




export default CharacterDetails;