import React from 'react';
import Basket from './Basket';
import Header from './Header';
import Main from './Main';

const Charcuterie_Boards = () => {
     
    return (
       
        <div>
        <div>
            <Header></Header>
            </div>
            <div>
                <Basket></Basket>
                <Main className ="row"></Main>
            </div>
            </div>
    );
}

export default Charcuterie_Boards;
