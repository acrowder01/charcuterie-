import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React from 'react';
import "./styles.css";
import "./Jokes";

import { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../../components/Form';

 

function BoardList(){
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allboards')
             
            console.log(response)
           } catch (err) {
            console.log(error)
        }
    }

     

return(
     
    <div>
      hello ace
    </div>
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
