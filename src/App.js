import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';

function App() {    

  const [user, setUser] = useState('Dérick');

  useEffect(()=>{
    
  },[])


  return (
    <div className="App">
     
      <Header setUser={setUser} user={user}></Header>

    </div>
  );
}

export default App;
