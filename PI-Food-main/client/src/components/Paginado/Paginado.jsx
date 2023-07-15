import './paginado.css'


const Paginado = ({recipesPerPage, recipesR, paginado, currentPage }) => {
    let pageNumbers = [];

    // console.log('paginas',recipesPerPage)
    // console.log('recipes',recipesR)
    // console.log('funcion',paginado)

    // let indexOf = Math.ceil(recipesR.length/recipesPerPage)
    // console.log('indice',indexOf)

    for(let i = 1; i <= Math.ceil(recipesR.length/recipesPerPage); i++){
            pageNumbers.push(i)
    }
    // console.log('pageNumbers', pageNumbers)
    console.log('current', currentPage)

    
    return (
        <div>
            
            <nav>
                    
                <ul>
                    {
                        pageNumbers && 
                        pageNumbers.map(number => {
                            {
                               return number === currentPage ? <a  className="current" onClick={() => paginado(number)}> {number} </a> : <a onClick={() => paginado(number)}> {number} </a>
                            }
                            
                        })
                    }
                </ul>
                    
            </nav>
        </div>
    );
};


export default Paginado;