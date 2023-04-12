import React from 'react'

const Employee = (props) => {
  return (   
   <>
    <h1>Hear is an Employee {props.name}</h1>
    <p>{props.role ? props.role : "No role"} </p>
    </>
  )
}

export default Employee