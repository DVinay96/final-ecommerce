import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { NavLink } from 'react-router-dom'
import axios from '../config/axios'

const Register = () => {
    const [userInfo, setUserInfo] = useState({})
    const handleClick = (event) => {
        event.preventDefault()
        axios.post('/users', userInfo)
    }

    const handleChange = (key, value) => {
        setUserInfo((prepState) => ({
            ...prepState,
            [key]: value
        }))
    }
    console.log(userInfo);
    return (
        <>
            <Meta title={'Registro'} />
            <BreadCrumb title='Register' />

            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Registrate</h3>
                            <form onSubmit={handleClick} className='d-flex flex-column gap-15'>
                                <div>
                                    <input onChange={(event) => handleChange('userName', event.target.value)} type='username' name='username' className='form-control' placeholder='Nombre de Usuario' ></input>
                                </div>
                                <div>
                                    <input onChange={(event) => handleChange('email', event.target.value)} type='email' name='email' className='form-control' placeholder='Email' ></input>
                                </div>
                                <div className='mt-1'>
                                    <input onChange={(event) => handleChange('password', event.target.value)} type='password' name='password' className='form-control' placeholder='Contraseña' ></input>
                                </div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button type='submit' className='button border-0'>Regístrate</button>
                                    <NavLink to='/login' className='button signup'>Inicia Sesión</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register