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
} from './type'
import axios from 'axios'

export const getAll = () => {
        const endPoint = "http://localhost:3001/recipes";
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint)
            return dispatch({
                type:GET_ALL,
                payload: data
            });
        } catch (error) {
            alert(error.message);
            
        };
    };
};

export const getByName = (input) => {
    const endPoint = `http://localhost:3001/recipes?name=${input}`
    return async  (dispatch) => {
        try {
            const { data } = await axios.get(endPoint)
            return  dispatch({
                type: SEARCH_BY_NAME,
                payload: data
            });
        } catch (error) {
           return dispatch({
            type: SEARCH_BY_NAME,
            payload: [error.response.data.error]
           })
        
        };
};
};


export const filterDiets = (diets) => {
        return {
            type: FILTER_DIETS,
            payload:diets
        };
};


export const filterDbOrApi = (input) => {
        return {
            type: API_OR_DB,
            payload: input
        };
};


export const resetFilter = () => {
    return {
        type: RESET_FILTER
    };
};


export const order = (order) => {
    return {
        type: ORDER,
        payload: order
    };
};


export const orderHealth = (health) => {
    return {
        type: ORDER_HEALTH,
        payload: health
    };
};

export const orderPrice = (price) => {
    return {
        type: ORDER_PRICE,
        payload: price
    };
};


export const orderTime = (time) => {
    return {
        type: ORDER_TIME,
        payload: time
    };
};


export const deleteOnDbRedux = (id) => {
    return async (dispatch) => {
        return await dispatch({
            type: DELETE,
            payload: id
        })
    }
}

export const clearState = () => {
    return async (dispatch) => {
        return await dispatch({
            type: CLEAR
        })
    }
}






