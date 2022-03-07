import { useState } from 'react';
import axios from 'axios'
import './styles.css'

const Form = () => {

    const [description, setdescription] = useState('')
    const [boardtype, setboardtype] = useState('')
    const [price, setprice] = useState('')

    // console.log(firstName, lastName)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const addboard = {
          boardtype: boardtype,
          description: description,
          price:price
            }
        
  }


    return (
     <>
     <br></br>
               *****To Search for a board enter the info below*********
      <form className="row g-3 needs-validation" noValidate id="form-container" onSubmit={handleSubmit} >
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">Board Type</label>
        <input type="text" 
        className="form-control" 
        id="validationCustom02" 
        value={boardtype}  
        onChange={e => setboardtype(e.target.value)}/>

         
      </div>
      
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
        <label htmlFor="validationCustom02" className="form-label">Price</label>
        <input type="number" 
        className="form-control" 
        id="validationCustom02" 
        value={price}  
        onChange={e => setprice(e.target.value)}/>

         
      </div>
      
      
      
      <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
    </>
    );
     
    }

export default Form;