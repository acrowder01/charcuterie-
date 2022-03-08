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

    const  DeletBoard  = async (id) => {
      try {
        const response = await axios.delete(`http://localhost:8080/api/v1/boardtype/${id}`)
         
      } catch (err) {
        console.log(err)
           }
    }

     console.log("this is our state", allboards)
     
     
return(
     
     <>
       <Form fetchboards = {fetchboards}/>
       
    <table className="table table-bordered ">
  <thead>
    <tr>
      
      <th scope="col">Board Type</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Edit Boards</th>
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
                <td>

                <i className="bi bi-trash"
                 onClick={()=>DeletBoard(boards.id)}> 
                  
                 <svg  

                 xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                </i>
            </td>
          </tr>
                   
              )
          })

      }

       </tbody>
</table>
</>
        
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
