import { useEffect, useState } from 'react';
import {auth} from './firebasedb.js';
function Header(props){

    function abrirModalCriarConta(e){
        e.preventDefault();
        
        let modal = document.querySelector('.modalCriarConta');

        modal.style.display = 'block';
    }

    function fecharModalCriar(){
        let modal = document.querySelector('.modalCriarConta');

        modal.style.display = 'none';
    }

    function criarConta(e){

        e.preventDefault();

        let email = document.getElementById('email-cadastro').value;
        let username = document.getElementById('username-cadastro').value;
        let senha = document.getElementById('senha-cadastro').value;

        auth.createUserWithEmailAndPassword(email,senha)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:username
            })
            alert('Conta Criada com sucesso!');
            let modal = document.querySelector('.modalCriarConta');

            modal.style.display = 'none';
        }).catch((error)=>{
            alert(error.message);
        })
        ;
    }

    return (

        <div className='header'>

            <div className='modalCriarConta'>
                <div className='formCriarConta'>
                    <div onClick={()=>fecharModalCriar()} className='close-modal-criar'>X</div>
                   <h2>Criar Conta</h2> 
                    <form onSubmit={(e)=>criarConta(e)}>
                        <input id='email-cadastro' type='text' placeholder='Seu e-mail...' />
                        <input id='username-cadastro' type='text' placeholder='Seu username...' />
                        <input id='senha-cadastro' type='password' placeholder='Sua senha...' />
                        <input type='submit' value='Criar Conta!' />
                    </form>
                </div>
            </div>

            <div className='center'>

            <div className='header_logo'>
                <a href=''><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" /></a>
            </div>

            {
                (props.user)?
                <div className='header_logadoInfo'>
                <span>Olá <b>{props.user}</b></span>
                <a href=''>Criar Postagem!</a>
                </div>
                :
                <div className='header_loginForm'>
                <form>
                    <input type="text" placeholder='Login...' />
                    <input type="password" placeholder='Senha...' />
                    <input type="submit" name='acao' value='Logar!' />
                </form>
                <div className='btn_criarConta'>
                    <a onClick={(e)=>abrirModalCriarConta(e)} href='#'>Criar Conta!</a>
                </div>  
                </div>
            }

            </div>
        </div>
    )

}

export default Header;