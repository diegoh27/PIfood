import {
    SEARCH_BY_NAME,
    GET_ALL,
    API_OR_DB,
    FILTER_DIETS,
    ORDER_HEALTH,
    RESET_FILTER,
    ORDER,
    ORDER_TIME,
    ORDER_PRICE,
    DELETE,
    CLEAR,
} from './type';



const initialState = {
    recipesR: [],
    allRecipes: [],
    recipesP: [],
    prueba: []
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_ALL:
            return {
                ...state,
                recipesR: payload,
                allRecipes: payload
            };

        case SEARCH_BY_NAME:
                return  {
                    ...state,
                    recipesR:payload,
                    prueba: payload
            };

        case FILTER_DIETS: 
        let filterDiets = state.allRecipes.filter((recipe) => 
            recipe.Diets.find(diet => diet.name === payload)
            );
            if(filterDiets.length === 0){
                filterDiets = ['Not found']
            }
            return {
                ...state,
                recipesR: filterDiets
            };


        case API_OR_DB: 
        let filterDB = state.allRecipes.filter((recipe) => {
            return recipe.db === true
        });

        let filterApi = state.allRecipes.filter((recipe) => {
            return recipe?.db !== true 
        });

        if(filterDB.length === 0 ){
            filterDB = ['Error']
        }
        if(filterApi.length === 0 ){
            filterDB = ['Error']
        }

            if(payload === "General") return {
            ...state,
            recipesR: filterApi
            } 

            if(payload === "Create") return {
            ...state,
            recipesR: filterDB
        };

        

        case ORDER: 
        let copyAllRecipes = [...state.recipesR]
       
        return {
            ...state, 
            recipesR:
            payload === "Ascendente" ?
            copyAllRecipes.sort((a,b) => { return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })})
            :
            copyAllRecipes.sort((a,b) => { return b.name.localeCompare(a.name, undefined, { sensitivity: 'base' })})
        }

       case ORDER_HEALTH: 
       let copyRecipes = [...state.recipesR]

       return {
            ...state,
            recipesR: 
            payload === "1-100" ?
            copyRecipes.sort((a,b) => {return a.healthScore - b.healthScore})
            : 
            copyRecipes.sort((a,b) =>{ return b.healthScore - a.healthScore} )
       };
        
        case ORDER_PRICE: 
        let recipesCopy1 = [...state.recipesR]
        
        return {
            ...state,
            recipesR: 
            payload === "Low-High" ? 
            recipesCopy1.sort((a,b) => { return a.pricePerServing - b.pricePerServing })
            : 
            recipesCopy1.sort((a,b) => { return b.pricePerServing - a.pricePerServing })
        };

        case ORDER_TIME: 
        let recipeCopy2 = [...state.recipesR]
        return {
            ...state,
            recipesR: 
            payload === "Low-High" ?
            recipeCopy2.sort((a,b) => { return a.readyInMinutes - b.readyInMinutes })
            :
            recipeCopy2.sort((a,b) => { return b.readyInMinutes - a.readyInMinutes })

        }


        case DELETE: 
        let deleteRecipes = state.allRecipes.filter((recipe) => {
            return recipe.id !== payload
        })

        return  {
            ...state,
            recipesR: deleteRecipes,
            // recipesP: deleteRecipes,
            allRecipes: deleteRecipes
        }


        case CLEAR: 
        return {
            ...state,
            prueba: [],
            recipesR: [],
        }

        // case PAGINATE: 
        //     const itemsPerPage = 9;
        //     const nextPage = state.currentPage + 1;
        //     const prevPage = state.currentPage - 1;
        //     const firtsIndex = payload === "Next" ? nextPage * itemsPerPage : prevPage * itemsPerPage;

            

        
        case RESET_FILTER: 
        return {
            ...state,
            recipesR: state.allRecipes
        };

        
        default: return {
            ...state
        };
    };
    
};

export default reducer;