import './Card.css'
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { filterDiets, deleteOnDbRedux, filterDbOrApi, getAll} from '../../redux/actions';





const Card = ({recipe, paginado, deleteDb}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const detailHandler = () => {
        navigate(`/detail/${recipe.id}`)
    }

    const dietsHandler = () => {
        navigate('/diets')
    }

    const handleFilterDiets = (diet) => {
        dispatch(filterDiets(diet))
        paginado(1)
    }

    const deleteOnDb = (id) => {
        deleteDb(id)
        dispatch(deleteOnDbRedux(id))
    }

    const filterCreate = (input) => {
        dispatch(filterDbOrApi(input))
        paginado(1)
    }

    return (

        
        
        <div>
            {
                recipe.name ? <div className="card_container" style={{ "--clr": "#009688" }} key={recipe.id}>
                    
              

                <div className='card_img'>
                  <img src={recipe?.image} alt={recipe?.name} onClick={detailHandler}/>  
                </div>
                
                
                <div className='content'>
                    <h3 onClick={detailHandler}>{recipe?.name}</h3>
                    
                    {
                    recipe.create ? <p onClick={()=>{filterCreate("Create")}}>Create</p> : null
                    }
               
                <h2 onClick={dietsHandler} className='dietas_title' style={{ "--clr": "#ff3e7f" }}> Diets </h2>
                    <div className='diets_container'>
                    {
                     recipe?.Diets?.map((diet) => {
                     return <p className='card_pointer' onClick={() => handleFilterDiets(diet.name)}>{diet.name}</p>
                      })
                     }
                    </div>
                    <a onClick={detailHandler}>More Info</a>
                    <br />
                    {
                        recipe.create ? <a onClick={() => {deleteOnDb(recipe.id)}} className='delete-boton'>Delete</a> : null
                    }
                   
                </div>

            </div> : null
            }
            
        </div>
 
    )
}

export default Card;