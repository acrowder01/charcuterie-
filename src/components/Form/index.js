import { useState } from 'react';
import axios from 'axios'
import './styles.css'

const Form = ( {fetchboards, editForm, boardToEdit}) => {
  // console.log('board to edit', boardToEdit )

    const [description, setdescription] = useState('')
    const [boardtype, setboardtype] = useState('')
    const [price, setprice] = useState('')

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const addboard = {
          boardtype: boardtype,
          description: description,
          price: price
            }

            try {
               if(editForm){
        // EDITform is true then we will be updating. 
        
        const response = await axios.put(`http://localhost:8080/api/v1/boardtype/${boardToEdit.id}`, addboard)
        } else {
          //Adding Student
       const response = await axios.post('http://localhost:8080/api/v1/addboard', addboard)

       if(response.status === 200) {
        setboardtype('')
        setdescription('')
        setprice('')
      
      }
     } 


              fetchboards()
           } catch (err) {
             console.log(err)
         }
        
        
  }


    return (
     <>
     <br></br>
      

      <form className="row g-3 needs-validation" noValidate id="form-container" onSubmit={handleSubmit} >
      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">Board Type</label>
        <input type="text" 
        className="form-control" 
        id="validationCustom02" 
        placeholder={boardToEdit.boardtype}
        value={boardtype}  
        onChange={e => setboardtype(e.target.value)}/>

         
      </div>
      
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">Description</label>
        <input type="text"
         className="form-control" 
         id="validationCustom01" 
         placeholder={boardToEdit.description}
         value= {description} 
         onChange={e => setdescription(e.target.value)}
         />
       
      </div>
     

      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">Price</label>
        <input type="number" 
        className="form-control" 
        id="validationCustom02" 
        placeholder={boardToEdit.price}
        value={price}  
        onChange={e => setprice(e.target.value)}/>

         
      </div>
      
      
      
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
             {editForm ? "Edit" : "Submit"}
        </button>
      </div>
    </form>
    </>
    );
     
    }

export default Form;