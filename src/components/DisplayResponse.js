const DisplayResponse = ({translationResponse}) => {

    console.log("displayResponse:", translationResponse)

    return ( 
        <>
            <h2>Translation</h2>
            <h3>{translationResponse}</h3>
        </> 
    );
}
 
export default DisplayResponse;