import axios from 'axios';

export const GET_DRIVERS = 'GET_DRIVERS';
export const GET_DRIVER_BY_ID = 'GET_DRIVER_BY_ID';
export const GET_DRIVERS_BY_NAME = 'GET_DRIVER_BY_NAME';
export const GET_TEAMS = 'GET_TEAMS';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER'
export const RESET = 'RESET';
export const PAGINATE = 'PAGINATE';

export const getDrivers = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/drivers");
            const { data } = response;
            dispatch({
                type: GET_DRIVERS,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const getDriverById = (idDriver) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/drivers/${idDriver}`);
            const { data } = response;
            dispatch({
                type: GET_DRIVER_BY_ID,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getDriversByName = (ser) => {
    return async function (dispatch) {

        try {
            const response = await axios.get(`http://localhost:3001/drivers/search?name=${ser}`);
            const { data } = response;
            dispatch({
                type: GET_DRIVERS_BY_NAME,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getTeams = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/teams");
            const { data } = response;
            dispatch({
                type: GET_TEAMS,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export function postDriver(state) {
    return async function (dispatch) {
        try {
            await axios.post("http://localhost:3001/drivers", state);
            alert("Driver created successfully");
        } catch (error) {
            alert("Error creating driver : "+error.message);
        }
    };
}

export const setFilter = (filters) => {
    return async function (dispatch) {
        try {
            dispatch({
                type : FILTER,
                payload : filters
            });
        } catch (error) {
            console.log(error.message);
        }
    }
} 

export const setOrder = (order) => {
    return async function (dispatch) {
        try {
            dispatch({
                type : ORDER,
                payload : order
            });
        } catch (error) {
            console.log(error.message);
        }
    }
} 

export const setPage = (page) => {
    return async function (dispatch) {
        try {
            dispatch({
                type : PAGINATE,
                payload : page
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const reset = () => {
    return async function (dispatch) {
        try {
            dispatch({
                type : RESET,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}