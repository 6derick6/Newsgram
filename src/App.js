import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {    

  const [user, setUser] = useState('Dérick');

  useEffect(()=>{
    
  },[])


  return (
    <div className="App">
     
      <div className='header'>
        <div className='center'>

          <div className='header_logo'>
            <a href=''><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" /></a>
          </div>

          {
            (user)?
            <div>Olá Dérick</div>
            :
            <div className='header_loginForm'>
              <form>
                <input type="text" placeholder='Login...' />
                <input type="password" placeholder='Senha...' />
                <input type="submit" name='acao' value='Logar!' />
              </form>
            </div>
          }

        </div>
      </div>

    </div>
  );
}

export default App;
