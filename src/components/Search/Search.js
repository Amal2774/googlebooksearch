import React from 'react';

const Search = (props) => {
    return (
        <div className='search-area'>
            <form action=''>
                <input onChange={props.handleSearch} type='text'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search;