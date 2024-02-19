import './App.css';

import Navbar from './components/Navbar';
import Employees from './Pages/Employees';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dictionary from './Pages/Dictionary';

function App() {
  return <>
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path='/' element={<Employees />}></Route>
          <Route path='/dictionary' element={<Dictionary  />}></Route>
        </Routes>
      </Navbar>
    </BrowserRouter>

  </>
}

export default App;
