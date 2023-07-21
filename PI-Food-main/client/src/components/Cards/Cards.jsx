import Card from '../Card/Card'
import './Cards.css'

const Cards = ({recipes, paginado, deleteDb}) => {
    return (
    <div>
        
    
        <div>
        
            <div className='contenedor_allCards'> 
   
        {
            recipes?.map((recipe, index) => {
                return <Card key={index} recipe={recipe} paginado={paginado} deleteDb={deleteDb}/>
            })
        }
            </div>
                </div>
    </div>
    )
}


export default Cards;