import { Link, Outlet } from "react-router-dom";
import minion_img from '../images/Minions.png';
import shakespeare_img from '../images/Funny-memes-Shakespeare.jpg';
import pirate_img from '../images/johnny-depp.avif';

const Home = () => {
    return ( 
      <>
        <nav>
            <li><Link to = "/shakespeare">Link to the Shakespearean Translator</Link></li>
            <li><Link to = "/pirate">Link to the Pirate Translator</Link></li>
            <li><Link to = "/minions">Link to the Minions Translator</Link></li>
          </nav>
        
        <img src={minion_img} alt="minion with flower" />
        <img src={shakespeare_img} alt="Shakespeare looking cool" />
        <img src={pirate_img} alt="Johnny Depp as a pirate" />
        <Outlet/>
      </>
     );
}
 
export default Home;