import { useState, useContext } from 'react';
import { Routes, Route} from 'react-router-dom'

//importing components
import Nav from './components/Nav';

 //importing context
import UserContext from './contexts/UserContext';
import Header from './pages/Charcuterie_Boards/Header';
import Basket from './pages/Charcuterie_Boards/Basket';
import Main from './pages/Charcuterie_Boards/Main';
import Styles from './pages/Charcuterie_Boards/Styles.css'

//importing pages
import BoardList from './pages/BoardList';
import Home from './pages/Home'
import Charcuterie_Boards from './pages/Charcuterie_Boards';
 
import Login from './pages/Login';
 
import Product from './components/Product';

// CSS
import './App.css';

 
 
function App() {
  //creating variable to create usercontext
// const user = useContext(UserContext)
// console.log(user)

//passing the user  to all of Apps  children through the Provider prop
const [user, setUser] = useState('')


// const jokeText = document.getElementById("joke");
// const jokeBtn = document.getElementById("jokeBtn");
// jokeBtn.addEventListener("click", generateJokes);
// // joke.addEventListener (onclick, generateJokes)
// generateJokes();

// async function generateJokes(){
//   const res = await fetch(
//            "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
//             )
//      const data = await res.json();
//     console.log(data)
//     console.log(data.joke)
//     let joke =""
//     if(data.joke == undefined) {
//       joke = `${data.setup} <br /> ${data.delivery}`
//     } else {
//       joke = data.joke

//     }


// }





  return (
    <div className ="App">

      {/* passing the state which is {user} from nav. allow share information to all the children */}
      <UserContext.Provider value ={{user}}>
      <Nav />
      </UserContext.Provider>

      <Routes>
      {/* setuser is property and {setuser} is the state */}
        <Route path = 'login' element={<Login setUser={setUser} />} />
        <Route path = 'Home' element={<Home />} />
        <Route path = 'Charcuterie_Boards' element={<Charcuterie_Boards />} />
        
        <Route path = 'BoardList' element={<BoardList />} /> 
         
        
      </Routes>

      
      
    </div>
  );
}

export default App;