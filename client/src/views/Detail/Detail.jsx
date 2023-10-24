import { useDispatch, useSelector } from 'react-redux';
import { getDriverById } from "../../redux/action";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function Detail() {

    const { idDriver } = useParams();

    const dispatch = useDispatch();
    const driver = useSelector((state) => state.driverById);

    useEffect(() => {
        dispatch(getDriverById(idDriver));
    }, []);

    return (
        <div>
            <div>Detail from a Driver</div>
            <div>ID : {driver.id}</div>
            <div>NAME : {driver?.name?.forename}</div>
            <div>LAST NAME : {driver?.name?.surname}</div>
            <div>DESCRIPTION : {driver.description}</div>
            <div>IMAGE : {driver?.image?.url}</div>
            <div>NATIONALITY : {driver.nationality}</div>
            <div>BIRTHDAY : {driver.dob}</div>
            <div>TEAMS : {driver.teams}</div>
        </div>
    );
}