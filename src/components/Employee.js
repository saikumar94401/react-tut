import React from 'react'

function Employee(props) {
  const {name}=props;
  return (
    <div>
    <p>Hello {name}</p>  
    </div>
  )
}

export default Employee
