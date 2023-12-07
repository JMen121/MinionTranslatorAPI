import { Link, Outlet } from "react-router-dom";
import minion_img from '../images/Minions.png'
import shakespeare_img from '../images/Funny-memes-Shakespeare.jpg'
import pirate_img from '../images/johnny-depp.avif';

const Homepage = () => {
    return ( 
        <>
            <h2>Welcome to the translator app</h2>
            <div className='pictureContainer'>
                <div className='picture'>
                    <img src={minion_img} alt="minion with flower" />
                </div>
                <div className='picture'>
                    <img src={shakespeare_img} alt="Shakespeare looking cool" />
                </div>
                <div className='picture'>
                    <img src={pirate_img} alt="Johnny Depp as a pirate" />
                </div>
            </div>
        </>
        
     );
}
 
export default Homepage;