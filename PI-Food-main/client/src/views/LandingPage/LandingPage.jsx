import { Link, NavLink} from "react-router-dom";
import img from '../../utils/cook-book-logo-3.jpg'
import { useDispatch } from "react-redux";
import { getAll } from "../../redux/actions";
import { useEffect } from "react";
import "./landingStyle.css"


const LangdingPage = () => {

    const dispatch = useDispatch();

    // useEffect(()=> {
    //     const res = async () => {

    //       await dispatch(getAll())
    //     }
        
    // },[])

    const uploadData = () => {
        dispatch(getAll())
      }
    

    return (
        
   
        <div>

    
        
        <section className="section_landing">
            <header className="header_landing">
                <Link to='/home'>
                    <img onClick={uploadData} className="logo_landing" src={img} alt="logo" />
                </Link>
                <div className="navegation">
                <Link to='/home'>
                    <a onClick={uploadData}>Home</a>
                </Link>
              
                </div>
            </header>
            <div className="content_landing">
                <div className="info">
                    <h2>Cook & Book <br/> <span>Get your Recipe!</span></h2>
                    <p>“If I'm an advocate for anything, it's to move. As far as you can, as much as you can. Across the ocean, or simply across the river. The extent to which you can walk in someone else's shoes or at least eat their food, it's a plus for everybody.
                    Open your mind, get up off the couch, move.”
                    ― Anthony Bourdain</p>
                    <NavLink style={{"textDecoration": "none"}} to='/home'>
                    <a onClick={uploadData} className="boton_landing">More Info</a>
                    </NavLink>
                </div>
            </div>
            <div className="media-icons">
                <a href="https://github.com/diegoh27" target="_blank"> <i class="fa-brands fa-square-github fa-2xl"></i></a>
                <a href="https://www.linkedin.com/in/diego-horesok-790744141/" target="_blank"> <i class="fa-brands fa-linkedin fa-2xl"></i></a>

            </div>
        </section>
        
   
    
    </div>
    
    )
}


export default LangdingPage;