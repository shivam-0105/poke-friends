import React from 'react'
import tachyons from 'tachyons'

function SearchBox( {searchChange} ) {
    return(
        <div className='pa2'>
            <input className='pa3 tc ba br4' type="search" placeholder="Search a Pokemon" onChange={searchChange} />
        </div>
    );
}

export default SearchBox