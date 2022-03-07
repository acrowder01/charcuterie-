import { useState } from 'react';
import axios from 'axios'
import './styles.css'

const Form = () => {

    const [description, setdescription] = useState('')
    const [boardtype, setboardtype] = useState('')

    // console.log(firstName, lastName)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
          const addboard = {
            boardtype: boardtype,
            description: description 
              }

          const response = await axios.post('http://localhost:8080/api/v1/addboard', addboard)
           
          

         } catch (err) {
          console.log(err)
      }
  }


    return (
     <>
     <br></br>
               *****To Search for a board enter the info below*********
      <form className="row g-3 needs-validation" novalidate id="form-container" onSubmit={handleSubmit} >
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">Description</label>
        <input type="text"
         className="form-control" 
         id="validationCustom01" 
         value= {description} 
         onChange={e => setdescription(e.target.value)}
         />
       
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">Board Type</label>
        <input type="text" 
        className="form-control" 
        id="validationCustom02" 
        value={boardtype}  
        onChange={e => setboardtype(e.target.value)}/>

         
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustomUsername" className="form-label">Price</label>
        <div className="input-group has-validation">
           
          <input type="text" 
          className="form-control" 
          id="validationCustomUsername" aria-describedby="inputGroupPrepend"   
          value= "price"
           
           />
          
        </div>
      
      </div>
      
      <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
    </>
    );
     
    }

export default Form;