
import './App.css';
import Employee from './components/Employee';
function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {
        showEmployees ? <>
          <Employee name="Saikumar" />
          <Employee  name="Vivek"/>
          <Employee name="Aarvika" />
        </>
          : <h2>Employee Data Not Found</h2>
      }
    </div>
  );
}

export default App;
