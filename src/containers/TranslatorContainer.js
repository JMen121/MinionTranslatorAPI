import { useState, useEffect } from "react";
import Home from "../components/Home";
import TranslatorComponent from "../components/TranslatorComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import minion_img from '../images/Minions.png'
import shakespeare_img from '../images/Funny-memes-Shakespeare.jpg'
import pirate_img from '../images/johnny-depp.avif';
import Homepage from "../components/Homepage";


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
                path: "/homepage",
                element: <Homepage />
            },
            {

                path: "/shakespeare",
                element: <TranslatorComponent 
                title={"Shakespeare Translator"}
                image={shakespeare_img}
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
                image={pirate_img}
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
                image={minion_img}
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
            <h1 className="titleOfWebpage">The Translator App</h1>
            <RouterProvider router={translationRoutes} />
        </>
    );
}
 
export default TranslatorContainer ;