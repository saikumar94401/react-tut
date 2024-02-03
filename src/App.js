
import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';
function App() {
  const showEmployees = true;
  const [role,setRole]=useState('');
  return (
    <div className="App bg-red-400">
      {

        showEmployees ? <>
        <input onChange={(e)=>{
          setRole(e.target.value);
        }}>
        </input>
          <Employee name="Saikumar" role="developer" />
          <Employee  name="Vivek" role="Student"/>
          <Employee name="Aarvika" role={role} />
        
        </>
          : <h2>Employee Data Not Found</h2>
      }
    </div>
  );
}

export default App;
