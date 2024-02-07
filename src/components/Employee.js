import React from 'react'
import EditEmployee from './EditEmployee'
function Employee(props) {
  const { name, role,profileImg ,updateEmployees} = props;
  console.log("changed");
  return (
    <div className="py-8 m-2 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img className="h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 object-cover rounded-full" src={profileImg} alt="Woman's Face" />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {name}
          </p>
          <p className="text-slate-500 font-medium">
            {role}
          </p>
        </div>

        <EditEmployee  id={props.id} updateEmployees={updateEmployees} name={name} role={role} />
      </div>
    </div>
  )
}

export default Employee
