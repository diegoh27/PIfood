import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Error from '../Error/Error'
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../Loading/Loading";
import axios from 'axios';
import NameError from "../../components/NameError/NameError";
import './detail.css'


const Detail = () => {
    const { id } = useParams();
    const [recipeDetail, setRecipeDetail] = useState({})


    const navigate = useNavigate();


    // useEffect(()=> {
    //     const recipeDet = async () => {
    //         const { data } = await axios.get(`http://localhost:3001/recipes/${id}`)
    //         console.log("esta es la data",data)
    //         if(!data.name){
    //             setRecipeDetail(data)

    //         } else {
    //             setError({data})
    //         }
           
    //     }
        
    //     recipeDet();

       
    //     return setRecipeDetail({})
    // }, [id])


    useEffect(() => {
      axios.get(`http://localhost:3001/recipes/${id}`)
      .then((response) =>  response.data)
      .then((data) => {
        if(data.name){
            setRecipeDetail(data)
        } 
      })
      .catch((error) =>  setRecipeDetail(error.response.data.error)
    //   console.log("este es el error",error.response.data.error)
    )

      return setRecipeDetail({})
    }, [id])
    
    const rediretError = () => {
        navigate('/error')
    }
   

        return (
            <div>
                <NavBar />
                {
                  typeof recipeDetail === 'string' ? rediretError() : null
                }
            
                {
                    !recipeDetail.name && typeof recipeDetail !== 'string'  ? <Loading/> :  <div className="cointainer_details">

                        {
                        recipeDetail.name ? 
                        <div className="image_details">
                            <img src={recipeDetail?.image} alt={recipeDetail?.image} />
                        </div>
                        : null
                        }
                
    
    
                        <div className="info_details">
                    
                        {
                        recipeDetail?.name ? 
                        <div className="individual-info">
                        <h3>Name</h3>
                        <p>{recipeDetail?.name}</p>
                        </div> 
                        : null
                        }  
                      
                        {
                        recipeDetail.name ? 
                        <div>
                        <h3>Ready in minutes</h3>
                        <p>{recipeDetail?.readyInMinutes} Minutes</p>
                        </div>
                        : null
                        }
    
                    {
                    recipeDetail.name ?
                    <div>
                    <h3>Diets</h3>
                    <>
                    {
                    recipeDetail?.Diets?.map((diet, index) => {
                        return <li key={index}>{diet?.name}</li>
                    })
                    }
                    </>
                    </div>
                    : null
                    }
    
                    {

                        recipeDetail.name ?
                    <div>
                    <h3>Price per Serving</h3>
                    <p>{recipeDetail?.pricePerServing}$</p>
                    </div>
                        : null
                    }

    
                    {
                        recipeDetail.name ?
                    <div>
                    <h3>Summary</h3>
                    <p>{recipeDetail?.summary}</p>
                    </div>
                        : null
                    }
    
    
                   { 
                        recipeDetail.name ?
                   <div>
                    <h3>HealthScore</h3>
                    <p>{recipeDetail?.healthScore}%</p>
                    </div>
                    : null
                    }

    
                    {
                        recipeDetail.name ?
                    <div>
                    <h3>Steps</h3>
                    <> 
                    {
                    recipeDetail.steps?.map((step, i) => {
                        return <li key={i}>
                            { step.number ? `step number ${step?.number} - ${step?.step}` : `step number ${i+1} - ${step}`}
                        </li>
                    })
                    }
                    </>
                    </div>
                    : null
                    }
                    
                    </div>
                    
                    </div>
                }

               
            </div>
    );
}


export default Detail;