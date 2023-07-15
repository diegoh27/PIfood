import Cards from '../../components/Cards/Cards'
import NavBar from '../../components/NavBar/NavBar';
import Paginado from '../../components/Paginado/Paginado';
import './styleHome.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { filterDiets, filterDbOrApi, resetFilter, order, orderHealth, orderPrice, orderTime } from '../../redux/actions';
import axios from 'axios';





const Home = () => {


    // estados locales dietas y todas las recetas 
    const [recipes, setRecipes] = useState([]);
    const [diets, setDiets] = useState([]);
    
    // estado global 
    const recipesR = useSelector((state) => state.recipesR);
    const prueba = useSelector((state) => state.prueba);
    
    // console.log("PRUEBA",prueba);
    // console.log(recipesR);

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
        }) ) ;
        
        return (setCurrentPage(1) ,setRecipes([]))
        
    },[recipes.name]);

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
        }) ) ;
        

    },[currentPage])

    

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
        setCurrentPage(1)
   }

   const handleOrder = (event) => {
        dispatch(order(event.target.value));
        setCurrentPage(1)
   }

   const handleOrderHealth = (event) => {
        dispatch(orderHealth(event.target.value));
        setCurrentPage(1)
   }

   const handlepricePerServing = (event) => {
        dispatch(orderPrice(event.target.value));
        setCurrentPage(1)
   }

   const handleOrderTime = (event) => {
        dispatch(orderTime(event.target.value));
        setCurrentPage(1)
   }

   const paginado = (numberPage) => {
    setCurrentPage(numberPage)
}

console.log('total',recipesR)

    const nextPage = () => {
       if(currentPage<indexMax){
           
           setCurrentPage(currentPage+1)
       } 
        
    }


    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage-1)
        }
    }

    
    // const onSearch = async (input) => {
    //     try {
    //         const { data }= await axios.get(`http://localhost:3001/recipes?name=${input}`)
    //         if(!data.length){
    //           throw new Error("No se encontraron las recetas con ese nombre")
    //         }
    //         setRecipes(data)
            
    //     } catch (error) {
    //        alert(error.response.data)
    //     }
    // } 
    
    // useEffect(()=> {
    //    const allInfo = async () => {
    //     const { data } = await axios.get("http://localhost:3001/recipes")
    //         const info = data.map((recipe) => {
    //             return {
    //                 id: recipe.id,
    //                 name:recipe.name,
    //                 image: recipe.image,
    //                 Diets: recipe.Diets
    //             }
    //         })
    //         setRecipes(info)  
    //     }
    //     allInfo();
    // }, []) 

   

    // useEffect(()=> {
    //     dispatch(getAll())
    //     .then((response)=> setRecipes(response.payload.map((recipe) => {
    //         return  {
    //             key: recipe.id,
    //             id: recipe.id,
    //             name:recipe.name,
    //             image: recipe.image,
    //             Diets: recipe.Diets
    //         } 
    //     }
    //   )
    // ))
    // .catch((error) => {
    //     console.log(error)
    // }) 
    // }, [])
    
    
return (

    <div>
            <NavBar paginado={paginado} />

    
    <body className='body_home'>

        <nav className='sideBar'>
            <ul>
                <li>
                    <a>
                        <img src="" alt="" />
                       <span className='nav-item'>Coock Boock</span>
                    </a>
                </li>
                
                <li><div >
                    <i className='fas fa-home'><ion-icon name="create-outline"></ion-icon></i>
                    <label className="nav-item">Create</label>
                    <select onChange={handleDbOrApi}> 
                            { 
                        ["Create","General"].map((e, index) => {
                        return <option key={index} value={e}>{e}</option>
                            })
                            }
                    </select>
                    
                    </div></li>
                
                <li><div>
                    <i className='fas fa-home'><ion-icon name="refresh-circle-outline"></ion-icon></i>
                    <label className="nav-item">Diets</label>
                    <select onChange={handleFilterDiets}>
                    {
                    diets?.map((diet) => {
                    return <option key={diet.id} value={diet.name}>{diet.name}</option>
                    })
                    }
                    </select>
                    </div></li>
                
                <li><div>
                    <i className='fas fa-home'> <ion-icon name="fast-food-outline"></ion-icon></i>
                    <label className="nav-item">Name</label>
                    <select onChange={handleOrder}>
                        {
                    ["Ascendente", "Descendente"].map((e, index) => {
                        return <option key={index} value={e}>{e}</option>
                    })
                        }
                    </select>
                    </div></li>
                
                <li><div href="">
                    <i className='fas fa-home'><ion-icon name="medkit-outline"></ion-icon></i>
                    <label className="nav-item">HealthScore</label>
                    <select onChange={handleOrderHealth}>
                    {
                    [ "1-100", "100-1"].map((e, index)=> {
                        return <option key={index}>{e}</option>
                    })
                    }
                    </select>
                    </div></li>
                
                <li><div>
                    <i className='fas fa-home'><ion-icon name="cash-outline"></ion-icon></i>
                    <label className="nav-item">Price</label>
                    <select  onChange={handlepricePerServing}>
               
                        {
                    ["Low-High","High-Low"].map((e, index) => {
                        return <option key={index} value={e}>{e}</option>
                    })
                        }
                    </select>
                    </div></li>
                
                <li><div>
                    <i className='fas fa-home'><ion-icon name="alarm-outline"></ion-icon></i>
                    <label className="nav-item">Time</label> 
                    <select onChange={handleOrderTime}>
                    {
                        ["Low-High", "High-Low"].map((e, index) => {
                            return <option key={index} value={e}>{e}</option>
                        })
                    }
                    </select>
                    </div></li>

                    <li><div >
                    <i className='fas fa-home'><ion-icon name="refresh-circle-outline"></ion-icon> </i>
                    <a className="nav-item" onClick={handleResetFilter}>Reset Filter</a>
                    </div></li>
            </ul>
        </nav>
    <div>
            
        
            
     
            <Cards key={recipes.id} recipes={recipes} paginado={paginado}/>

            
            {
                indexMax === currentPage ? <button className='boton_home'>Next</button> : <button onClick={nextPage}>Next</button>
            }
            <Paginado paginado={paginado} recipesR={recipesR} recipesPerPage={recipesPerPage} currentPage={currentPage}/>
            {
                currentPage === 1 ? <button className='boton_home'>Prev</button> : <button onClick={prevPage}>Prev</button>
            }
            
        </div>
    </body>
    </div>
    )
}

export default Home;