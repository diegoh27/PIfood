import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../../components/NavBar/NavBar.jsx";
import validate from './validate.js'
import './create.css'
import axios from 'axios'
import { getAll } from "../../redux/actions.js";


const CreateRecipe = () => {

    const dispatch = useDispatch()

const [diets, setDiets] = useState([])
const [form, setForm] = useState({
        name: '',
        pricePerServing: "",
        healthScore: "", 
        image: '', 
        summary:'', 
        readyInMinutes:"",
        steps:'',
        diets: []
})

const [error, setError] = useState({name: ''})




    useEffect(()=> {
        const allDiets = async () => {
            const { data } = await axios.get("http://localhost:3001/diets")
        setDiets(data)
        } 
        allDiets()
    }, [])

    const selectDiet = (event) => {
        const value = Number(event.target.value)
        setForm((prevSelectedValues) => {
            {

                const updatedValues = [...prevSelectedValues.diets];
                if (updatedValues.includes(value)) {
                  // Si el valor ya está seleccionado, lo eliminamos
                  const index = updatedValues.indexOf(value);
                  updatedValues.splice(index, 1);
                } else {
                  // Si el valor no está seleccionado, lo agregamos
                  updatedValues.push(value);
                }
                return { ...form , diets: updatedValues };
            }
        }
    )
}
    

// indicar que selecciono el usuario y en dado caso que lo elimine
const coincidencias = diets.filter(diet => form.diets?.includes(diet.id))

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(Object.values(error).length || !coincidencias.length){
            alert("please check the data ")
        } else {
                try {
                const { data } = await axios.post(`http://localhost:3001/recipes`, form)
                alert(`Recipe ${data.name} create success`)
                dispatch(getAll())
                
                    
                } catch (error) {
                        alert(error.response.data.error)
                }
        }
        
            
    }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

       setError(validate({
        ...form, 
        [event.target.name]: event.target.value
       }))
    }

  
 
    
    
    // ["agua","sal","mariscos"]
    
    
    return(
        
            
        
        <div>
            <NavBar />
            <section className="section_create">
                
            <div className="container_create">

           
            <div className="title_form">Write your recipe here</div>
            <form > 
            
            <div className="detail_form">
                


            <div className="input-box">
         
            
            <label className="input-detail">Name: </label>
            <input 
            type="text" 
            name="name"
            placeholder="Enter you recipe name..."
            value={form.name}
            onChange={handleChange}
            />
            {

                error.name ? <p className="danger">{error.name} <ion-icon name="warning-outline"></ion-icon></p> : null 
            }
            </div>
            
           

            <div className="input-box">
            <label className="input-detail">Summary: </label>
            <input 
            type="text" 
            name="summary"
            placeholder="Summary recipe..."
            value={form.summary}
            onChange={handleChange}
            />
            {
                error.summary ? <p className="danger">{error.summary} <ion-icon name="warning-outline"></ion-icon></p> : null 
            }
            </div>


            <div className="input-box"> 
            <label className="input-detail">Health score: </label>
            <input 
            type="text" 
            name="healthScore"
            placeholder="Healthscore..."
            value={form.healthScore}
            onChange={handleChange}
            />
            
            {
                error.healthScore ? <p className="danger">{error.healthScore} <ion-icon name="warning-outline"></ion-icon></p> : null 
            }
            </div> 


            <div className="input-box">
            <label className="input-detail">Price per serving: </label>
            <input 
            type="text" 
            name="pricePerServing"
            placeholder="Price serving..."
            value={form.pricePerServing}
            onChange={handleChange}
            />
            
            {
                error.pricePerServing ? <p className="danger">{error.pricePerServing} <ion-icon name="warning-outline"></ion-icon></p> : null 
            }
             </div>


             <div className="input-box">
            <label className="input-detail">Ready in minutes: </label>
            <input 
            type="text" 
            name="readyInMinutes"
            placeholder="Recipe in minutes..."
            value={form.readyInMinutes}
            onChange={handleChange}
            />
        
            {
                error.readyInMinutes ? <p className="danger">{error.readyInMinutes} <ion-icon name="warning-outline"></ion-icon></p> : null 
            }
            </div>

            <div className="input-box">
            <label className="input-detail">Steps: </label>
            <textarea  
            type="text" 
            name="steps"
            placeholder="Steps..."
            value={form.steps}
            onChange={handleChange}
            />
          
            {
                error.steps ? <p className="danger">{error.steps} <ion-icon name="warning-outline"></ion-icon></p> : null 
            }
            </div>

            <div className="input-box">
            <label className="input-detail">Image</label>
            <input 
            type="text" 
            name="image" 
            placeholder="Url..."
            value={form.image}
            onChange={handleChange}
            className={error.image &&'warning'}
            />
    
            {
                error.image ? <p className="danger">{error.image} <ion-icon name="warning-outline"></ion-icon></p> : null 
            }
            </div>
            
            
            <div className="input-box">

                <div className="diets-form">

                
            <label className="input-detail" >
                Diets: 
            <select name="diets" onChange={selectDiet}>
            <option selected disabled>Diets</option> 
                {
                    diets?.map((diet) => {
                        return <option  key={diet.id} value={diet.id} name="id">{diet.name}</option>
                        
                    })
                }
            </select>
                <div className="diets-container">

                
                {
                    coincidencias?.map((diet, index) => {
                        return <li key={index}>{diet.name}</li>
                })
                } 
                </div>
                
                
                {
                    coincidencias.length ? null : <p className="danger">{"Diets is required"} <ion-icon name="warning-outline"></ion-icon></p>
                }
                 
            </label>
            </div>
             { 
             Object.values(error).length || !coincidencias.length ? 
             <button className="boton_disable boton-form"  type="submit" onClick={handleSubmit}>Enviar</button>  
             : 
             <button type="submit" className="boton-form"  onClick={handleSubmit} >Enviar</button> 
             } 
             </div>
             
            </div>    
            </form>
            </div>

            </section>
        </div>
       
        )
    
}


export default CreateRecipe;