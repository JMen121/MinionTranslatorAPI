const DisplayResponse = ({translationResponse}) => {

    console.log("displayResponse:", translationResponse)

    return ( 
        <>
            <h2>This is a response</h2>
            <h3>{translationResponse}</h3>
        </> 
    );
}
 
export default DisplayResponse;