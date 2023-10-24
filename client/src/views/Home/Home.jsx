import Cards from "../../components/Cards/Cards";
import FilterSec from "../../components/FilterSec/FilterSec";
import OrderSec from "../../components/OrderSec/OrderSec";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers, reset, getDriversByName, getTeams, setFilter, setOrder, setPage } from "../../redux/action";
import { useEffect, useState } from "react";

export default function Home() {

    const dispatch = useDispatch();
    const allDrivers = useSelector((state) => state.allDrivers);
    const allTeams = useSelector((state) => state.allTeams);
    const currentPage = useSelector((state) => state.currentPage);

    let cardsPerPage = 9;

    const totalPages = Math.ceil(allDrivers.length / cardsPerPage);

    let currentDrivers = [];

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    let [filterstate, setFilterstate] = useState({
        teams: '--Todos--',
        origin: '--Todos--'
    });

    let [orderstate, setOrderstate] = useState({
        tipo: '',
        asc_desc: ''
    });

    let [resetKey, setResetKey] = useState(0);

    useEffect(() => {
        dispatch(getDrivers());
        dispatch(getTeams());
    }, []);

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    currentDrivers = allDrivers.slice(startIndex, endIndex);

    let [ser, setSer] = useState('');

    const handleChange = (e) => {
        const val = e.target.value;
        setSer(val);
    }

    const handleAction = (e) => {

        const { name, value } = e.target;
        let newFilterState = { ...filterstate };
        let newOrderState = { ...orderstate };

        if (name === 'teams' || name === 'origin') {

            newFilterState = {
                ...filterstate,
                [name]: value
            };

            setFilterstate(newFilterState);

        }

        if (name === 'tipo' || name === 'asc_desc') {

            newOrderState = {
                ...orderstate,
                [name]: value
            };

            setOrderstate(newOrderState);

        }

        dispatch(getDriversByName(ser)).then(() => {
            dispatch(setFilter([newFilterState.teams, newFilterState.origin]));
        }).then(() => {
            if (newOrderState.tipo && newOrderState.asc_desc) {
                dispatch(setOrder([newOrderState.tipo, newOrderState.asc_desc]));
            }
        }).then(()=>{
            dispatch(setPage(1));
        }).catch((error) => {
            console.error(error);
        });

    }

    const handlePaginate = (pageNumber) => {

        dispatch(setPage(pageNumber));

    }

    const handleReset = () => {
        dispatch(reset());
        setSer('');
        setFilterstate({
            teams: '--Todos--',
            origin: '--Todos--'
        });
        setResetKey(prevKey => prevKey + 1);
    }

    return (
        <div>
            <button onClick={handleReset}>Reset</button>
            <SearchBar handleChange={handleChange} handleSearch={handleAction} ser={ser} />
            <FilterSec handleChange={handleAction} allTeams={allTeams} filterstate={filterstate} />
            <OrderSec key={resetKey} handleChange={handleAction} orderstate={orderstate} />
            <div>
                {pageNumbers.map((pageNumber) => (
                    <button key={pageNumber} onClick={()=>handlePaginate(pageNumber)}>{pageNumber}</button>
                ))}
            </div>
            <Cards drivers={currentDrivers} />
        </div>
    );
}