import React from 'react'
import '../App.css'

function ProjectList(props) {
  const {project} = props;
  return (
    <>
      <div className='gallery'>
        {project.map( el => 
          <div className='gallery-item' >
            <img className={el.category} src={el.img} alt='' />
          </div>)}
      </div>
    </>
  )
}
 export default ProjectList