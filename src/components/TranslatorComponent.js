import TranslatorForm from "./TranslatorForm";

const TranslatorComponent = ({title, image, language, setLanguage, translateText}) => {

    setLanguage(language);

    return ( 
        <>
            <h2>{title}</h2>
            <TranslatorForm translateText={translateText}/>
        </> 
    );
}
 
export default TranslatorComponent;