import React from 'react';
import { Card } from './components/Card';
import { TextField } from './components/TextField';
// import logo from './logo.svg';

const App: React.FC = ()=>{
  return (
    <div>
      <Card
        person={{
          age:20,
          firstName:"Roberto",
          height:1.85,
          lastName:"Castillo"
        }}/>
        
    </div>
  )
}

export default App;
