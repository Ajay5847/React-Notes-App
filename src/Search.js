import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'

function Search({handleSearchText}) {
  return (
    <div className='search-box'>
        <div className="icon"><BiSearchAlt2 /></div>
        <input onChange={(e) => handleSearchText(e.target.value)} type="text" placeholder='Type to Search...' />
    </div>
  )
}

export default Search