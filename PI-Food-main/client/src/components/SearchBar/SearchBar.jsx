import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from '../../redux/actions'
import '../NavBar/navbar.css'




const SearchBar = ({paginado}) => {
const [input, setInput] = useState('')
const dispatch = useDispatch();


const handleChange = (event) => {
    event.preventDefault()
    setInput(event.target.value)
} 

const searchHandler = (input) => {
    if(!input.length){
        return null;
    }
    dispatch(getByName(input))
    paginado(1)
    setInput('')
}


    return (
        <div>
    
   
    
    


    <div className="searchBox">
    <input type="search" placeholder="Search by name..." onChange={handleChange} value={input}/>
            <div className="search">
            <a type="search" onClick={() =>searchHandler(input)}> 
            <span className="icon">
                <ion-icon name="search-outline"></ion-icon>
                
            </span>
            </a>
            </div> 

          </div>  
    

           
    </div>
        
    )
}


export default SearchBar;