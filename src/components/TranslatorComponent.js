import TranslatorForm from "./TranslatorForm";
import DisplayResponse from "./DisplayResponse";

const TranslatorComponent = ({title, image, language, setLanguage, translateText, translationResponse}) => {

    setLanguage(language);

    console.log("Translator component, translationResponse", translationResponse)

    return ( 
        <>
            <h2>{title}</h2>
            <img src={image} alt="minion with flower" />
            <TranslatorForm 
                translateText={translateText} 
                language={language}
            />
            <DisplayResponse 
                translationResponse={translationResponse}
            />
        </> 
    );
}
 
export default TranslatorComponent;