import React from 'react'

export default function card({ name, email, id, lname}) {
  return (

    <div className='col my-4'>
    <div className="card" style={{backgroundColor:"#123D6A", color:"white"}}>
        <img alt='robots' className="card-img-top" src={`https://reqres.in/img/faces/${id}-image.jpg`}/>
        <div className="card-body">
          <p><span style={{fontWeight:'bold', fontSize:'20px'}}>Name:</span> {name} {lname}</p>
          <p> <span style={{fontWeight:'bold', fontSize:'20px'}}> Email: </span>{email}</p>
        </div>
      </div>
      </div>
  )
}
