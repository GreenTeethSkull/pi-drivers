
export default function SearchBar(props) {

    return (
        <div>
            <input placeholder='Search by Name ...' type='search' onChange={props.handleChange} value={props.ser} name='searchBar' />
            <button onClick={props.handleSearch}>Search</button>
        </div>
    );

}