import { useState, useEffect } from "react";

const TranslatorContainer = () => {

    const [language, setLanguage] = useState('');
    const [translationResponse, setTranslationResponse] = useState('');


    const translateText = async (language) => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/${language}`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({text:"Welcome to the api"})
        });
        console.log("Response: ", response);
        const data = await response.json();
        console.log("Data:", data);
        // setTranslationResponse(data.contents.translated);
        // console.log(translationResponse);
    }

    useEffect(() => {
        translateText("shakespeare");
    }, [])

    return (  
        <>
            <h2>This is a container</h2>
        </>
    );
}
 
export default TranslatorContainer ;