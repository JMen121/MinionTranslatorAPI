import minion_img from '../images/Minions.png'
import shakespeare_img from '../images/Funny-memes-Shakespeare.jpg'
import pirate_img from '../images/johnny-depp.avif';

const Homepage = () => {
    return ( 
        <>
            <img src={minion_img} alt="minion with flower" />
            <img src={shakespeare_img} alt="Shakespeare looking cool" />
            <img src={pirate_img} alt="Johnny Depp as a pirate" />
        </>
     );
}
 
export default Homepage;