import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Employee from '../components/Employee';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee'


function Employees() {
  const showEmployees = true;

  const [employees, setEmployees] = useState([
    { id: uuidv4(), name: "Ana", role: "Developer", profileImg: 'https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg' },
    { id: uuidv4(), name: "Amber", role: "Analyst  ", profileImg: 'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg?' },
    { id: uuidv4(), name: "Robert", role: "Manager   ", profileImg: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1060&t=st=1707030257~exp=1707030857~hmac=0327134aba1d1e66da9cdc36472568ddd38c7acdfe0d05e436c74cb2bff15749' },
    { id: uuidv4(), name: "Sara", role: "Analyst", profileImg: 'https://img.freepik.com/free-photo/closeup-content-attractive-indian-business-lady_1262-2094.jpg?w=1380&t=st=1707030349~exp=1707030949~hmac=de700d84acd7266b06a6f54ada5e66ec115e6cb6ac1e569e70113326fa4fee44' },
    { id: uuidv4(), name: "Ana", role: "Developer", profileImg: 'https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg' },
    { id: uuidv4(), name: "Amber", role: "Analyst  ", profileImg: 'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg?w=826&t=st=1707030193~exp=1707030793~hmac=2cd64d87d3422a35abbc7b741a08a5127cb24c0b9824920eb5ecd9e9feff79ad' },
    { id: uuidv4(), name: "Robert", role: "Manager   ", profileImg: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=1060&t=st=1707030257~exp=1707030857~hmac=0327134aba1d1e66da9cdc36472568ddd38c7acdfe0d05e436c74cb2bff15749' },
    { id: uuidv4(), name: "Sara", role: "Analyst", profileImg: 'https://img.freepik.com/free-photo/closeup-content-attractive-indian-business-lady_1262-2094.jpg?w=1380&t=st=1707030349~exp=1707030949~hmac=de700d84acd7266b06a6f54ada5e66ec115e6cb6ac1e569e70113326fa4fee44' },
    { id: uuidv4(), name: "Ana ", role: "Developer", profileImg: 'https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg' },
  ]);

  const updateEmployees = (id, name, role) => {
    const newEmployees = employees.map((emp) => {
      if (emp.id === id) {
        return { ...emp, name, role }
      }
      return emp;
    });
    setEmployees(newEmployees);
  }
  const addEmployee = (name, role, profileImg) => {
    const obj = {
      id: uuidv4(), name, role, profileImg
    }
    const newEmployeeList = [...employees, obj];
    setEmployees(newEmployeeList);
  }
  return (
    <div className='' >
    <div className='' >
      {
        showEmployees ? <>
          <div className='   flex flex-wrap justify-center'>
            {employees.map((emp) => {
              const editEmployee = <EditEmployee id={emp.id} updateEmployees={updateEmployees} name={emp.name} role={emp.role} />

              return <Employee id={emp.id} editEmployee={editEmployee} key={emp.id} name={emp.name} role={emp.role} profileImg={emp.profileImg} />
            })}
          </div>
          <AddEmployee addEmployee={addEmployee} />
        </>
          : <h2>Employee Data Not Found</h2>
      }
    </div>
    </div>
  );
}

export default Employees;
