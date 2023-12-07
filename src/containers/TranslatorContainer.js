import { useState, useEffect } from "react";
import Home from "../components/Home";
import TranslatorComponent from "../components/TranslatorComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const TranslatorContainer = () => {

    const [language, setLanguage] = useState('');
    const [translationResponse, setTranslationResponse] = useState('');


    const translateText = async (language, translationRequest) => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/${language}`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({text: translationRequest})
        });
        const data = await response.json();
        console.log("Data:", data);
        console.log("contents", data.contents);
        console.log("translated", data.contents.translated);
        setTranslationResponse(data.contents.translated);
        console.log(translationResponse);
    }

    // useEffect(() => {
    //     translateText("shakespeare", "heeellooo");
    // }, [])

       const translationRoutes = createBrowserRouter([
      {
        path: "/",
        element : <Home />,
        children: [
            {

                path: "/shakespeare",
                element: <TranslatorComponent 
                title={"Shakespeare Translator"}
                language={"shakespeare"}
                setLanguage={setLanguage}
                translateText={translateText}
                translationResponse={translationResponse}
                />

            },

            {

                path: "/pirate",
                element: <TranslatorComponent 
                title={"Pirate Translator"}
                language={"pirate"}
                setLanguage={setLanguage}
                translateText={translateText}
                translationResponse={translationResponse}
                />
            },
            {

                path: "/minions",
                element: <TranslatorComponent 
                title={"Minion Translator"}
                language={"minion"}
                setLanguage={setLanguage}
                translateText={translateText}
                translationResponse={translationResponse}
                />

            }

        ]


      }

       ])

    return (  
        <>
            <h2>This is a container</h2>
            <RouterProvider router={translationRoutes} />
        </>
    );
}
 
export default TranslatorContainer ;