 import React from 'react';
 import axios from 'axios';
 
 const Jokes = () => {
    // In able for us to use our context, we import first, then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  // We will pass on our user to all of App's children via the Provider value prop
  const [user, setUser] = useState('')
  const [jokeList, setjokeList] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchJoke()

    // Dependency array: if empty, it will call useEffect once only when DOM Component loads
  }, [])

  const fetchJoke = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118")

      setjokeList(response.data.results)

    } catch (error) {
      console.log(error)
    }
  }
    


     return (
         <div>
             test
         </div>
     );
     }

 export default Jokes;
 