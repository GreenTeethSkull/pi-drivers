import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDriversByName } from '../../redux/action';

export default function SearchBar(props) {

    return (
        <div>
            <input placeholder='Search by Name ...' type='search' onChange={props.handleChange} value={props.ser} name='searchBar' />
            <button onClick={props.handleSearch}>Search</button>
        </div>
    );

}