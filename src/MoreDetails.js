import React from 'react';
import { Link } from 'react-router-dom';


   function MoreDetails({match}) {
        return(
            <ul>     
             <li>{match.params.id}</li>       
            
          </ul>
        );
        
    }




export default MoreDetails;