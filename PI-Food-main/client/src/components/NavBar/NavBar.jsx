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
        // dispatch( getAll())
    } 
    const redirectionDiets = () => {
        navigate('/diets')
   
    }

    const redirectionCreate = () => {
        navigate('/create')
      
    }

    
    
    return (
        <div>
            <body className="body_nav">
                
           
            <header className="header_nav">
                
                <img src={img} className="logo" onClick={redirectionHome}></img>
                <div className="menu_toggle"> </div>
                <nav>
                    <ul>
                        <li> <a onClick={redirectionHome} className="active" >Home</a>   </li>
                        <li> <a onClick={redirectionDiets} >Diets</a> </li>
                        <li> <a onClick={redirectionCreate}>Create</a></li>
                    </ul>
                </nav>
                <SearchBar paginado={paginado}/>
                <div className="clearfix"></div>
                
            </header>
            </body>
        </div>
    )
}


export default NavBar;