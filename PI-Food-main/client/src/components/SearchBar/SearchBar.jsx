import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName, clearState} from '../../redux/actions'
import { useNavigate, useLocation } from "react-router-dom";
import '../NavBar/navbar.css'




const SearchBar = ({paginado}) => {
const [input, setInput] = useState('')
const dispatch = useDispatch();

// navegacion

const navigate = useNavigate();
const location = useLocation();

const handleChange = (event) => {
    setInput(event.target.value)
} 

const searchHandler = (input) => {
    if(!input.length){
        return null;
    }

    if(location.pathname !== '/home'){
        navigate('/home')
        dispatch(clearState())
        dispatch(getByName(input))
        setInput('')
    } else {
        dispatch(clearState())
        dispatch(getByName(input))
        paginado(1)
        setInput('')
    }
}


    return (
        <div>
    <div className="searchBox">
    <input type="search" placeholder="Search by name..." onChange={handleChange} value={input}/>
            <div className="search">
            <a  type="search" onClick={() =>searchHandler(input)} > <ion-icon name="search-outline"> </ion-icon> </a>
            </div> 

          </div>  
    

           
    </div>
        
    )
}


export default SearchBar;