import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import axios from 'axios';


const Detail = () => {
    const { id } = useParams();
    const [recipeDetail, setRecipeDetail] = useState({})

    useEffect(()=> {
        const recipeDet = async () => {
            const { data } = await axios.get(`http://localhost:3001/recipes/${id}`)
            setRecipeDetail(data)
        }
        recipeDet();
        return setRecipeDetail({})
    }, [id])
    
        return (
            <div>
                <NavBar />
                <h3>Name:</h3>
                <p>{recipeDetail?.name}</p>
                <img src={recipeDetail?.image} alt={recipeDetail?.image} />
                
                <h3>Ready in minutes</h3>
                <p>{recipeDetail.readyInMinutes} Minutes</p>
                <h3>Diets:</h3>
                <>
                {
                recipeDetail?.Diets?.map((diet, index) => {
                    return <li key={index}>{diet.name}</li>
                })
                }
                </>
                <h3>Price per Serving:</h3>
                <p>{recipeDetail.pricePerServing}$</p>
                <h3>Summary:</h3>
                <p>{recipeDetail?.summary}</p>
                <h3>HealthScore:</h3>
                <p>{recipeDetail?.healthScore}</p>
                <h3>Steps:</h3>
                <> 
                {
                
                recipeDetail.steps?.map((step, i) => {
                    return <li key={i}>
                        { step.number ? `step number ${step?.number} - ${step?.step}` : `step ${step}`}
                    </li>
                })
                }
                </>
                
                
            </div>
    );
}


export default Detail;