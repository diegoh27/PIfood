import Card from '../Card/Card'
import './Cards.css'

const Cards = ({recipes, paginado}) => {
    return (
    <body className='body_cards'>
        
    
        <div>
        
            <div className='contenedor_allCards'> 
   
        {
            recipes?.map((recipe, index) => {
                return <Card key={index} recipe={recipe} paginado={paginado}/>
            })
        }
            </div>
                </div>
    </body>
    )
}


export default Cards;