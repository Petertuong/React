
import './App.css';
import Employee from './component/Employee';
import { useState } from 'react';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState();

  return (
    <div className="App">
      {console.log('intside the return')}
      {showEmployees ? (
        <>
          <input 
            type = "text"
            onChange = {(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name = ": Peter" role = "CEO" />
          <Employee name = ": Tuong" role = {role}/>
          <Employee name = ": Katarian" />
            
        </>
      ) : ( 
        <p>You cannot see the employees</p>
      )    }

    </div>
    
  );
}

export default App;
