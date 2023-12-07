import { useState } from "react";

const TranslatorForm = ({translateText, language}) => {


    const [inputString, setInputString] = useState('');

    const handleChange = (event) => {
        setInputString(event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        translateText(language, inputString);
    }


    return ( 

        <form onSubmit={handleFormSubmit}>

        <label>Translation</label>
        <input
            name = "name"
            type = "text"
            value = {inputString}
            placeholder="input text.."
            onChange={handleChange} 
        
        />
        <input type="submit" />
        </form>
    );
}
 
export default TranslatorForm;