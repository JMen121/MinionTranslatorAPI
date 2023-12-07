import { Link, Outlet } from "react-router-dom";
import minion_img from '../images/Minions.png';
import shakespeare_img from '../images/Funny-memes-Shakespeare.jpg';
import pirate_img from '../images/johnny-depp.avif';

const Home = () => {
  return ( 
    <>
      <nav>
        <Link to = "/homepage"><button className="nav-button">Home</button></Link>
        <Link to = "/shakespeare"><button className="nav-button">Shakespearean Translator</button></Link>
        <Link to = "/pirate"><button className="nav-button">Pirate Translator</button></Link>
        <Link to = "/minions"><button className="nav-button">Minions Translator</button></Link>
      </nav>
      <Outlet/>
    </>
  );
}
 
export default Home;