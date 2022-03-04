import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React from 'react';
import "./styles.css";
import "./Jokes";
import axios from 'axios'

import { useEffect, useState } from 'react'
 
import Form from '../../components/Form';

 

function BoardList(){
    useEffect(() => {
        fetchboards()
    }, [])

    const fetchboards = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allboards')
             
            console.log(response)
           } catch (err) {
            console.log(error)
        }
    }

     

return(
     
     
    <table className="table table-bordered ">
  <thead>
    <tr>
      
      <th scope="col">Board Type</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
    </tr>

  </thead>
  <tbody>
    <tr>
        
       <td>Mark</td>
       <td>Otto</td>
       <td>@mdo</td>
    </tr>
    <tr>
       {/* <th scope="row">2</th> */}
       <td>Jacob</td>
       <td>Thornton</td>
       <td>@fat</td>
    </tr>
    <tr>
      {/* <th scope="row">3</th> */}
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      {/* <th scope="row">4</th> */}
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    
  </tbody>
</table>
     

    
)
}
export default BoardList;



// const BoardList = () => {
//     return (

        
//        <div className='container1'>
           
//            <h1 id="jokeid"> !!! Hadfdf Ha Ha !!!!</h1>
//            <div id="jokee" className='jokee'></div>
//            {/* <button id="jokeBtn" className= "btn" >Jokes</button> */}
 
//  axios.get("http://localhost:8080/api/vi/allboards")
//  const response = response.data


//  </div>

 

//     )
// }
// export default BoardList;
