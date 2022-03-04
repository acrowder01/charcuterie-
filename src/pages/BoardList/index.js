import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React from 'react';
import "./styles.css";
import "./Jokes";
import axios from 'axios'

import { useEffect, useState } from 'react'
 
import Form from '../../components/Form';

 

const allboards = () => {

    const [ allboards, setallboards ] = useState([])


    useEffect(() => {
        fetchboards()
    }, [])

    const fetchboards = async () => {

        try {
            const response = await axios.get('http://localhost:8080/api/v1/allboards')
             
            console.log(response)
            setallboards(response.data)


           } catch (err) {
            console.log(err)
        }
    }

     console.log("this is our state", allboards)

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

      {
          allboards.map(boards => {
              return (
            <tr key={boards.id}>
                <td>{boards.boardtype}</td>
                <td>{boards.description}</td>
                <td>{boards.price}</td>
                
             </tr>
                   
              )
          })

      }

      
  </tbody>
</table>
        
);
}
export default allboards;



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
