import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <Meta title={'Login'} />
            <BreadCrumb title='Login' />

            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Inicia Sesion</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input type='email' name='email' className='form-control' placeholder='Email' ></input>
                                </div>
                                <div className='mt-1'>
                                    <input type='password' name='password' className='form-control' placeholder='Contraseña' ></input>
                                </div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0'>Log In</button>
                                    <NavLink to='/registro' className='button signup'>Regístrate</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login