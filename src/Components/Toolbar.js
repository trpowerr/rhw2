import React from 'react'

function Toolbar({filters, onSelectFilter}) {
  
  
  return (
    <div className='toggle-bar'>
      {filters.map( el => 
        <button onClick={ () => onSelectFilter(el)} key={el}>{el}</button>)}
    </div>
  )
}


export default Toolbar

