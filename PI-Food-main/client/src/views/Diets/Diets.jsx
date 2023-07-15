import NavBar from "../../components/NavBar/NavBar";

const Diets = () => {

    return (
        <div>
            <NavBar />
            <h1>Diets</h1>
            <h2>Gluten Free</h2>
                <p>Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).</p>
                <h2>Ketogenic</h2>
                <p>The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.</p>
                <h2>Vegetarian</h2>
                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin.</p>
                <h2>Lacto-Vegetarian</h2>
                <p>All ingredients must be vegetarian and none of the ingredients can be or contain egg.</p>
                <h2>Ovo-Vegetarian</h2>
                <p>All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</p>
                <h2>Vegan</h2>
                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</p>
                <h2>Pescetarian</h2>
                <p>Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</p>
                <h2>Paleo</h2>
                <p>Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</p>
                <h2>Primal</h2>
                <p>Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.</p>
                <h2>Low FODMAP</h2>
                <p>FODMAP stands for "fermentable oligo-, di-, mono-saccharides and polyols". Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products)</p>
                <h2>Whole 30</h2>
                <p>Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.</p>
        </div>
    );
}

export default Diets;