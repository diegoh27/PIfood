import Cards from '../../components/Cards/Cards'
import NavBar from '../../components/NavBar/NavBar';
import Paginado from '../../components/Paginado/Paginado';
import Loading from '../Loading/Loading';
import NameError from '../../components/NameError/NameError';
import './styleHome.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterDiets, filterDbOrApi, resetFilter, order, orderHealth, orderPrice, orderTime, getAll} from '../../redux/actions';
import axios from 'axios';







const Home = () => {
    
    const navigate = useNavigate()

    // estados locales dietas y todas las recetas y error 
    const [recipes, setRecipes] = useState([]);
    const [diets, setDiets] = useState([]);
    // const [error, setError] = useState([])
    
    // estado global 
    const recipesR = useSelector((state) => state.recipesR);
    const prueba = useSelector((state) => state.prueba);
    
    console.log("PRUEBA",prueba);
    console.log("todos",recipesR);

    const dispatch = useDispatch();

    // estados para paginados 

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipePerPage] = useState(9);
    const indexOfLastRecipe = currentPage * recipesPerPage; // 9
    const indexOfFirtsRecipe = indexOfLastRecipe - recipesPerPage; // 0
    const currentRecipes = recipesR.slice(indexOfFirtsRecipe, indexOfLastRecipe)


    const indexMax = Math.ceil(recipesR.length/recipesPerPage)



    // 1-------0------9
    // 2-------10------18

    // console.log(indexOfFirtsRecipe)
    // console.log(indexOfLastRecipe)
    // console.log('todos los recipes', recipesR)
    // console.log('probando',currentRecipes)

  

   

    useEffect(()=> {
        const dietsData = async () => {
            const { data } = await axios.get(`http://localhost:3001/diets`);
            setDiets(data);
        }
        dietsData();
       
    }, []);

   
    
   

    // useEffect(() => {
    //     dispatch(getAll())
    //     if(recipesR.length) {
    //         setRecipes(currentRecipes?.map((recipe) => {
    //             return {
    //                 key: recipe.id,
    //                 id: recipe.id,
    //                 name:recipe.name,
    //                 image: recipe.image,
    //                 create: recipe?.db,
    //                 Diets: recipe.Diets
    //             }
    //         }))
    //     }
    //     return setRecipes([])
    // }, [])
    
    useEffect(() => {
        setRecipes(currentRecipes?.map((recipe) => {
                       return {
                           key: recipe.id,
                           id: recipe.id,
                           name:recipe.name,
                           image: recipe.image,
                           create: recipe?.db,
                           Diets: recipe.Diets
                       } ;
                   })) ;

    }, [recipesR]);

    
    useEffect(()=> {
        setRecipes(currentRecipes?.map((recipe) => {
                return {
                    key: recipe.id,
                    id: recipe.id,
                    name:recipe.name,
                    image: recipe.image,
                    create: recipe?.db,
                    Diets: recipe.Diets
                } ;
            })) ;

           
    },[currentPage]);

   
   

    const handleFilterDiets = (event) => {
        dispatch(filterDiets(event.target.value));
        setCurrentPage(1)
   }

   const handleDbOrApi = (event) => {
        dispatch(filterDbOrApi(event.target.value));
        setCurrentPage(1)
   }

   const handleResetFilter = () => {
        dispatch(resetFilter());
        dispatch(getAll());
        setCurrentPage(1);
   };

   const handleOrder = (event) => {
        dispatch(order(event.target.value));
        setCurrentPage(1);
   };

   const handleOrderHealth = (event) => {
        dispatch(orderHealth(event.target.value));
        setCurrentPage(1);
   };

   const handlepricePerServing = (event) => {
        dispatch(orderPrice(event.target.value));
        setCurrentPage(1);
   };

   const handleOrderTime = (event) => {
        dispatch(orderTime(event.target.value));
        setCurrentPage(1);
   };

   const paginado = (numberPage) => {
    setCurrentPage(numberPage);
};



    const nextPage = () => {
       if(currentPage<indexMax){
           
           setCurrentPage(currentPage+1);
       };
        
    };


    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage-1);
        };
    };

    
    const deleteRecipeDb = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3001/recipes/${id}`);
            alert(response.data.Success);
            
            
        } catch (error) {
            alert(error.message);
        }
    }

   
    
    
    
return (

    <div>
    <NavBar paginado={paginado} />

    
       

        <nav className='sideBar'>
            <ul>
                <li>
                    <div>
                        <img src="" alt="" />
                       <span className='nav-item'>Coock Boock</span>
                    </div>
                </li>
                
                <li><div >
                    <i className=''><ion-icon name="create-outline"></ion-icon></i>
                    <label className="nav-item">Create</label>
                    
                    <ul>
                    <select onChange={handleDbOrApi}> 
                            <option selected disabled>Custom</option>
                            { 
                        ["Create","General"].map((e, index) => {
                        return <option key={index} value={e}>{e}</option>
                            })
                            }
                    </select>
                    </ul>
                    </div></li>
                
                <li><div>
                    <i className=''><ion-icon name="document-text-outline"></ion-icon></i>
                    <label className="nav-item">Diets</label>
                              
                    <ul> 
                    <select onChange={handleFilterDiets}>
                    <option selected disabled>Diets</option>  
                    {
                    diets?.map((diet) => {
                    return <option key={diet.id} value={diet.name}>{diet.name}</option>
                    })
                    }
                    </select>
                    </ul>
                    </div></li>
                
                <li><div>
                    <i className=''> <ion-icon name="fast-food-outline"></ion-icon></i>
                    <label className="nav-item">Name</label>

                    <ul>
                    <select onChange={handleOrder}>
                    <option selected disabled>Order</option> 
                        {
                    ["Ascendente", "Descendente"].map((e, index) => {
                        return <option key={index} value={e}>{e}</option>
                    })
                        }
                    </select>
                    </ul>
                    </div></li>
                
                <li><div href="">
                    <i className=''><ion-icon name="medkit-outline"></ion-icon></i>
                    <label className="nav-item">HealthScore</label>
                    
                    <ul>
                    <select onChange={handleOrderHealth}>
                    <option selected disabled>Order</option> 
                    {
                    [ "1-100", "100-1"].map((e, index)=> {
                        return <option key={index}>{e}</option>
                    })
                    }
                    </select>
                    </ul>
                    </div></li>
                    
                
                <li><div>
                    <i><ion-icon name="cash-outline"></ion-icon></i>
                    <label className="nav-item">Price</label>

                    <ul>
                    <select  onChange={handlepricePerServing}>
                    <option selected disabled>Order</option> 
               
                        {
                    ["Low-High","High-Low"].map((e, index) => {
                        return <option key={index} value={e}>{e}</option>
                    })
                        }
                    </select>
                    </ul>
                    </div></li>
                    
                
                <li><div>
                    <i><ion-icon name="alarm-outline"></ion-icon></i>
                    <label className="nav-item">Time</label>

                    <ul>
                    <select onChange={handleOrderTime}>
                    <option selected disabled>Order</option> 
                    {
                        ["Low-High", "High-Low"].map((e, index) => {
                            return <option key={index} value={e}>{e}</option>
                        })
                    }
                    </select>
                    </ul>
                    </div></li>

                    <li><div >
                    <i className=''><ion-icon name="refresh-circle-outline"></ion-icon> </i>
                    <a className="nav-item" onClick={handleResetFilter}>Reset Filter</a>
                    </div></li>
            </ul>
        </nav>
        {
            typeof  recipesR[0] === 'string' ? <NameError/> : null
        }
      
        {
           !recipes.length  ?  <Loading/> :   <Cards recipes={recipes} paginado={paginado} deleteDb={deleteRecipeDb}/>
        }
      
   
   
   
    <Paginado paginado={paginado} recipesR={recipesR} recipesPerPage={recipesPerPage} currentPage={currentPage}/>
                <div className='paginate_home'> 
            
            {
            currentPage === 1 ? <a className='boton_home boton_paginate'>Prev</a> : <a className='boton_paginate' onClick={prevPage}>Prev</a>
            }
            {
                indexMax === currentPage ? <a className='boton_home boton_paginate'>Next</a> : <a className='boton_paginate' onClick={nextPage}>Next</a>
            }
            
            
                </div>
  
    </div>
    )
}

export default Home;