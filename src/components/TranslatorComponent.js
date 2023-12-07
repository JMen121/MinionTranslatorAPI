import TranslatorForm from "./TranslatorForm";
import DisplayResponse from "./DisplayResponse";

const TranslatorComponent = ({title, image, language, setLanguage, translateText, translationResponse}) => {

    setLanguage(language);

    console.log("Translator component, translationResponse", translationResponse)

    return ( 
        <>
            <h2 className="title">{title}</h2>

            <div className="componentImageContainer">
            <img className="component-image" src={image} />
            </div>

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