import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import validate from './validate.js'

import axios from 'axios'


const CreateRecipe = () => {

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

const [error, setError] = useState({})




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
 
    console.log(error)
    console.log(coincidencias)
    
    
    // ["agua","sal","mariscos"]
    
    
    return(
        
            
        
        <div>
            <NavBar />
            <h1>Cree su receta aqui!!!</h1>
            <form type="submit" onSubmit={handleSubmit}> 
            Recipe
            <br/>

            <label>Name: </label>
            <input 
            type="text" 
            name="name"
            placeholder="Enter you recipe name..."
            value={form.name}
            onChange={handleChange}
            />
            {
                error.name ? <p>{error.name}</p> : null 
            }
            
            <br/>

            <label>Summary: </label>
            <input 
            type="text" 
            name="summary"
            placeholder="Summary recipe..."
            value={form.summary}
            onChange={handleChange}
            />
            <br/>
            {
                error.summary ? <p>{error.summary}</p> : null 
            }

            <label>Health score: </label>
            <input 
            type="text" 
            name="healthScore"
            placeholder="Healthscore..."
            value={form.healthScore}
            onChange={handleChange}
            />
            <br/>
            {
                error.healthScore ? <p>{error.healthScore}</p> : null 
            }

            <label>Price per serving: </label>
            <input 
            type="text" 
            name="pricePerServing"
            placeholder="Price serving..."
            value={form.pricePerServing}
            onChange={handleChange}
            />
            <br/>
            {
                error.pricePerServing ? <p>{error.pricePerServing}</p> : null 
            }

            <label>Ready in minutes: </label>
            <input 
            type="text" 
            name="readyInMinutes"
            placeholder="Recipe in minutes..."
            value={form.readyInMinutes}
            onChange={handleChange}
            />
            <br/>
            {
                error.readyInMinutes ? <p>{error.readyInMinutes}</p> : null 
            }

            <label>Steps: </label>
            <input 
            type="text" 
            name="steps"
            placeholder="Steps..."
            value={form.steps}
            onChange={handleChange}
            />
            <br/>
            {
                error.steps ? <p>{error.steps}</p> : null 
            }

            <label>Image</label>
            <input 
            type="text" 
            name="image" 
            placeholder="Url..."
            value={form.image}
            onChange={handleChange} 
            />
            <br />
            {
                error.image ? <p>{error.image}</p> : null 
            }
            
            

            <label >
                Diets: 
            <select name="diets" placeholder="Diets" onChange={selectDiet}>
                {
                    diets?.map((diet) => {
                        return <option  key={diet.id} value={diet.id} name="id">{diet.name}</option>
                        
                    })
                }
            </select>
                {
                    coincidencias?.map((diet, index) => {
                        return <p key={index}>{diet.name}</p>
                })
                } 
                {
                    coincidencias.length ? null : <p>{"Diets is required"}</p>
                }
                 
            </label>
             { 
             Object.values(error).length || !coincidencias.length ? 
             <button className="boton_disable"  type="submit" >Enviar</button>  
             : 
             <button type="submit" >Enviar</button> 
             } 
                
            </form>
        </div>
       
        )
    
}


export default CreateRecipe;