import { GET_DRIVERS, GET_DRIVER_BY_ID, GET_DRIVERS_BY_NAME, GET_TEAMS, FILTER, ORDER, PAGINATE , RESET } from './action';

const initialState = {
    allDrivers: [],
    allDriversInmutable: [],
    driverById: [],
    allTeams: [],
    currentPage: 1,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                allDriversInmutable: action.payload
            }
        case GET_DRIVERS_BY_NAME:
            return {
                ...state,
                allDrivers: action.payload
            }
        case GET_DRIVER_BY_ID:
            return {
                ...state,
                driverById: action.payload
            }
        case GET_TEAMS:
            return {
                ...state,
                allTeams: action.payload
            }
        case FILTER:

            const [team, origin] = action.payload;

            let filtered = [...state.allDrivers];

            if (team !== '--Todos--') {
                filtered = filtered.filter((driver) => driver && driver.teams && driver.teams.includes(team));
            }

            if (origin !== '--Todos--') {
                if (origin === 'API') {
                    filtered = filtered.filter((driver) => driver && driver.driverRef);
                } else if (origin === 'DB') {
                    filtered = filtered.filter((driver) => driver && !driver.driverRef);
                }
            }

            return {
                ...state,
                allDrivers : filtered
            }

        case ORDER:

            const [tipo,asc_desc] = action.payload;

            let ordered = [...state.allDrivers];

            if (tipo==='name') {
                if (asc_desc==='ASC') {
                    ordered.sort((a, b) => a.name.forename.localeCompare(b.name.forename));
                } else {
                    ordered.sort((a, b) => b.name.forename.localeCompare(a.name.forename));
                }
            } else {
                if (asc_desc==='ASC') {
                    ordered.sort((a, b) => new Date(a.dob) - new Date(b.dob));
                } else {
                    ordered.sort((a, b) => new Date(b.dob) - new Date(a.dob));
                }
            }

            return {
                ...state,
                allDrivers : ordered
            }

        case PAGINATE:

            return {
                ...state,
                currentPage : action.payload
            }

        case RESET:
            return {
                ...state,
                allDrivers: state.allDriversInmutable,
                currentPage: 1,
            }
        default:
            return {
                ...state
            }
    }

}

export default reducer;