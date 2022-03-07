import { useState } from 'react';
import axios from 'axios'
import './styles.css'
import { useForm } from 'react-hook-form';

const Form = () => {

    const [description, setdescription] = useState('')
    const [boardtype, setboardtype] = useState('')

    // console.log(firstName, lastName)

    const handleSubmit = e => {
        e.preventDefault()
        const newallboards = {
            description: description,
            boardtype: boardtype
        }
    }

    return (
     <>
     To Search for a board enter the info below
      <form className="row g-3 needs-validation" novalidate id="form-container">
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">Description</label>
        <input type="text" className="form-control" id="validationCustom01" value="Board Description"  />
       
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">Board Type</label>
        <input type="text" className="form-control" id="validationCustom02" value="Enter Board Type here"  />
         
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustomUsername" className="form-label">Price</label>
        <div className="input-group has-validation">
           
          <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"    />
          
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