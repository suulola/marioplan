import React from 'react'
import { Link } from 'react-router-dom'


const ProjectSummary = ({project}) => {
  return (
    <div className=" mb-4 bg-light" style={{"width": "18rem"}}>
    <div className="card-body">
    <Link to="/project/abc" className="m-1 card-title"> <h4 className='text-muted   p-0'>{project.title}</h4> </Link>
     <p className="card-subtitle text-muted m-0 p-0">Posted by Suulola</p>
     <sub className="text-muted m-0 p-0">3rd September, 2021</sub>
    </div>
    </div>
  )
}

export default ProjectSummary
