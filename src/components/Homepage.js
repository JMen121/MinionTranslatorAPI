import minion_img from '../images/Minions.png'
import shakespeare_img from '../images/Funny-memes-Shakespeare.jpg'
import pirate_img from '../images/johnny-depp.avif';

const Homepage = () => {
    return ( 
        <div className='pictureContainer'>
        <div className='pictures'>
            <img src={minion_img} alt="minion with flower" />
        </div>
        <div className='pictures'>
            <img src={shakespeare_img} alt="Shakespeare looking cool" />
            </div>
            <div className='pictures'>
            <img src={pirate_img} alt="Johnny Depp as a pirate" />
            </div>
        </div>
     );
}
 
export default Homepage;