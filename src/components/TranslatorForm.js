import { useState } from "react";

const TranslatorForm = ({translateText, language}) => {

    const [inputString, setInputString] = useState('');

    const handleChange = (event) => {
        setInputString(event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        translateText(language, inputString);
        setInputString("");
    }

    return ( 

        <form onSubmit={handleFormSubmit}>
            <input 
                className="formTextBox"
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