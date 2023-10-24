import { Link } from 'react-router-dom';

export default function Card(props) {

    return (
        <div>
            <Link to={`/detail/${props.id}`}>
                <h2>Name : {props.name.forename}</h2>
                <h2>Last Name : {props.name.surname}</h2>
                <h2>Image : {props.image.url}</h2>
                <h2>Description : {props.description}</h2>
                <h2>Nationality : {props.nationality}</h2>
                <h2>Birthday : {props.dob}</h2>
                <h2>Teams : {props.teams}</h2>
            </Link>
        </div>
    );
}