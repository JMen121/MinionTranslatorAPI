import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return ( 
      <>
      <nav>
        <li><Link to = "/shakespeare">Link to the Shakespearean Translator</Link></li>
        <li><Link to = "/pirate">Link to the Pirate Translator</Link></li>
        <li><Link to = "/minions">Link to the Minions Translator</Link></li>
      </nav>
      <Outlet/>






      </>

     );
}
 
export default Home;