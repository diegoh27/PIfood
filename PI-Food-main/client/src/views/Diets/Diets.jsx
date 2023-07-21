import NavBar from "../../components/NavBar/NavBar";
import imgGlutenFree from '../../utils/Gluten-Free-Foods-2.jpg';
import ketodiet from '../../utils/ketodiet.jpg';
import vegetarianDiet from '../../utils/vegetarianDiet.jpg';
import lactovo from '../../utils/lactovo.jpg';
import ovolacto from '../../utils/ovolacto.jpg';
import veganDiet from '../../utils/veganDiet.jpg';
import pescatarianDiet from '../../utils/pescatarianDiet.png';
import paleoDiet from '../../utils/paleoDiet.png';
import primalDiet from '../../utils/primalDiet.jpg';
import lowfodmapDiet from '../../utils/lowfodmapDiet.png';
import whole30diet from '../../utils/whole30diet.jpg';

import './diets.css'

const Diets = () => {

    return (
        <div>
            <NavBar />


             <div className="diets-title-container">
                <h1 className="diets-title">Diets</h1> 
               
            </div> 

            <div className="container-all-diets">

            
            <div className="container-all-info">
            <div className="container-info">
            <h2>Gluten Free</h2>
                <p>Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).</p>
                <img src={imgGlutenFree} alt="gluten free" />
            </div>

            <div className="container-info">
                <h2>Ketogenic</h2>
                <p>The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.</p>
                <img src={ketodiet} alt="Keto diet" />
            </div>
            
            <div className="container-info">
                <h2>Vegetarian</h2>
                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin.</p>
                <img src={vegetarianDiet} alt="vegetarian diet" />
            </div>

            <div className="container-info">
                <h2>Lacto-Vegetarian</h2>
                <p>All ingredients must be vegetarian and none of the ingredients can be or contain egg.</p>
                <img src={lactovo} alt="lacto vege diet" />
            </div>    

            <div className="container-info">
                <h2>dairy free</h2>
                <p>All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</p>
                <img src={ovolacto} alt="ovolacto diet" />
            </div>  

            <div className="container-info">
                <h2>Vegan</h2>
                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</p>
                <img src={veganDiet} alt="veganDietdiet" />
            </div> 
                
            <div className="container-info">
                <h2>Pescatarian</h2>
                <p>Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</p>
                <img src={pescatarianDiet} alt="pescatarianDiet diet" />
            </div>   

            <div className="container-info">
                <h2>Paleo</h2>
                <p>Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</p>
                <img src={paleoDiet} alt="paleoDiet diet" />
            </div>

            <div className="container-info">
                <h2>Primal</h2>
                <p>Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.</p>
                <img src={primalDiet} alt="primalDiet diet" /> 
            </div> 

            <div className="container-info">
                <h2>Low FODMAP</h2>
                <p>FODMAP stands for "fermentable oligo-, di-, mono-saccharides and polyols". Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products)</p>
                <img src={lowfodmapDiet} alt="lowfodmapDiet diet" />
            </div>

            <div className="container-info">
                <h2>Whole 30</h2>
                <p>Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.</p>
                <img src={whole30diet} alt="whole30diet diet" />
            </div> 
            </div> 

               
                
                
                </div>
        </div>
    );
}

export default Diets;