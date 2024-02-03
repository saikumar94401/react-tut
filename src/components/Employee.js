import React from 'react'

function Employee(props) {
  const {name,role}=props;
  return (
    <>
    <h2>Hello {name?name:"Unknown"}</h2>  
    <p>role: {role}</p>
    </>
  )
}

export default Employee
