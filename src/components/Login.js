

//Dependencies

import axios from "axios";
import swal from "sweetalert";
import { useNavigate, Navigate } from 'react-router-dom'


function Login (){
    const navigate = useNavigate()

    const handlerSubmit = e => {
        e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
    if(email === '' || password === '') {
        swal('Llene los campos por favor')
        return
    }
    if (email !== '' && !regexEmail.test(email)) {
        swal('Escribe un email válido')
            return
    } 

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
        swal('Credenciales inválidas')
        return
    }
    axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(res => {
            swal('¡Felicitaciones, bievenido!')
            const gettedToken = res.data.token
            sessionStorage.setItem('token', gettedToken)
        
        })
        
        navigate('/list')
    }

    
    let token = sessionStorage.getItem('token')
    return (

    <>  
    {
        token && <Navigate to='/list'/>
    }
        <h2>Formulario de Login</h2>
        <form onSubmit={handlerSubmit}>
            <label>
                <span>Email:</span> <br />
                <input type="email" name="email" />
            </label>
            <br />
            <label>
                <span>Password:</span> <br />
                <input type="password" name="password"/>
            </label>
            <br />
                <button type="submit">Ingresar</button>
        </form>
    </>
    )
};

export default Login;