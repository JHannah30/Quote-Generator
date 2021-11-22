import './AddQuoteTab.css';
import { useState } from 'react';

const AddQuoteTab = ({ darkMode }) => {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

function test(){
    console.log(inputs);
}

    return ( 
        <div className={darkMode ? "add-quote-container-dark" : "add-quote-container"}>
            <form onSubmit={handleSubmit} className="add-quote-form">
                <label className="form-label">What's you name?</label>
                <input 
                    className="form-input-text"
                    type="text" 
                    name="name" 
                    value={inputs.name} 
                    onChange={handleChange}
                />
                <label className="form-label">Give us a few words of wisdom</label>
                    <textarea 
                        className="form-input-textarea"
                        name="quote"
                        value={inputs.quote} 
                        onChange={handleChange} 
                    />
                <input 
                    className="form-submit-btn"
                    type="submit" 
                    onClick={test}/>
            </form>
        </div>
     );
}
 
export default AddQuoteTab;