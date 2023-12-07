import { useState } from "react";

const TranslatorForm = ({translateText}) => {


    const [inputString, setInputString] = useState('');

    return ( 
      

<form>

 <label>Translation</label>
 <input
  name = "text"
  type = "text"
  placeholder="input text.."
  
/>
<input type="submit" />
</form>
    );
}
 
export default TranslatorForm;