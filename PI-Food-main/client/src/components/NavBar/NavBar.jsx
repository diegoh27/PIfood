import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAll } from "../../redux/actions";
import './navbar.css'
import img from '../../utils/cook-book-logo-3.jpg'


const NavBar = ({paginado}) => {

const dispatch = useDispatch();

const navigate = useNavigate();

    const redirectionHome =  () => {
        navigate('/home')
        dispatch( getAll())
    } 
    const redirectionDiets = () => {
        navigate('/diets')
   
    }

    const redirectionCreate = () => {
        navigate('/create')
      
    }

    
    
    return (
        <div>
            
            
                
            
                <nav className="header_navBar">

                <img onClick={redirectionHome} className="logo" src={img} alt={img} />

                

                
                    <div className="group">
                        <ul className="navigation">
                            <li><a onClick={redirectionHome}>Home</a></li>
                            <li><a onClick={redirectionDiets}>Diets</a></li>
                            <li><a onClick={redirectionCreate}>Create</a> </li>
                        </ul>
                    </div>
                    

                    
                    
                        
                            <SearchBar paginado={paginado}/> 
                        
                  
                    
            </nav>
       
              
        </div>
    )
}


export default NavBar;