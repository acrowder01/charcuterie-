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
        <div className="ui centered grid">
            <form className="ui form" id="form-container" onSubmit={handleSubmit}>
                <div className="field">
                    <label className='ui left aligned container'>board type</label>
                    <input
                        type="text"
                        name="board type "
                        placeholder="boadtype"
                        onChange={e => setboardtype(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className='ui left aligned container'>description</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        onChange={e => setdescription(e.target.value)}
                    />
                </div>
                <div className="ui right aligned container">

                    <button className="ui button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;