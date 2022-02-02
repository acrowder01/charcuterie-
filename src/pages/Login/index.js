import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import React from 'react';
 
//  import './styles.CSS'

const Login = ({ setUser }) => {
// creating state for logging in and rendering the nav bar

    const [username, setUsername] = useState('')
    //create a const for useNavigate function to redirect the login page after submitting
    const navigate = useNavigate()

//create handlechange for submit
    const handleChange = e =>{
        setUsername(e.target.value)}

        const handleSubmit = e => {
            e.preventDefault()
            setUser(username)

             // UseNavigate to redirect the users to a different page
        navigate('/Charcuterie_Boards')

        }


// console.log('props',setUser())

        

    return (

        <form className='mx-auto border p-2 m-2' id='login-form' onSubmit=
        {handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputUser1" className="form-label">UserName</label>
                <input
                 type="text" 
                 className="form-control" 
                 id="exampleInputUser1" 
                 aria-describedby="UserHelp" 

                 //adding value for the username and onchange to be the handlechange
                 value ={username}
                 onChange={handleChange}
                 />

                <div id="UserHelp" className="form-text">We'll never share your username with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;
