import { useState } from "react";

const TranslatorForm = ({translateText}) => {


    const [inputString, setInputString] = useState('');

const handleChange = (event) => {
  setInputString(event.target.value)
};


    return ( 
      

<form>

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