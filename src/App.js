import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
 
   const showEmployee = true;
  
  return (
    <div className="App">
    {showEmployee ? (
    <div>
    <input type="text" onChange={(e) => {console.log(e.target.value);
    setRole(e.target.value);
        } }
        />
     <Employee name= "Robert" role = "intern"/>
    <Employee name = "Assunta" role={role} />
    <Employee name = "Dominic" />
    <Employee name = " Pearl" />
    </div>
     ) : (
      <p><h1>You cannot see the Employees</h1></p>
            )}   
    </div>
  );
}

export default App;
