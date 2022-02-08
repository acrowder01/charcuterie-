import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React from 'react';
import "./styles.css"
import "./Jokes"



const FunStuff = () => {
    return (
        
       <div className='container1'>
           
           <h1 id="jokeid">Jokes - make me laugh</h1>
           <div id="jokee" className='jokee'></div>
           <button id="jokeBtn" className= "btn" >Jokes</button>
 </div>

 

    )
}
export default FunStuff;
