import logo from './logo.svg';
import './App.css';
import { db } from './firebase';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    console.log(db);
  },[])


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
