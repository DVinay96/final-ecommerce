import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container.xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0 ms-5'> Free Shipping Over 100$</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0 me-5'>
                                Telefono: <a className='text-white' href='tel: +52 1 222 2135 88 70'> +52 1 222 2135 88 70 </a>
                            </p>
                        </div>

                    </div>
                </div>
            </header>
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items--center'>
                        <div className='col-2'>
                            <h2>
                                <Link className='text-white'> Tittle</Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product..."
                                    aria-label="Search Product..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text py-3" id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='productImages/wishlist.svg' alt='wishlist' />
                                        <p className='text-white mb-0'>
                                            Favoritos <br /> Wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <NavLink to='/login' className='d-flex align-items-center gap-10 text-white'>
                                        <img src='productImages/user.svg' alt='user' />
                                        <p className='text-white mb-0'>
                                            Mi cuenta
                                        </p>
                                    </NavLink>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='productImages/cart.svg' alt='cart' />
                                        <div className='d-flex flex-column'>
                                            <span className='badge bg-white text-dark m-1'>0</span>
                                            <p className='mb-0'>$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-botton d-flex align-items-center gap-30'>
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <img src='productImages/menu.svg' alt='menu' />
                                            <span className='d-inline-block '>Categorías</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink className='text-white' to='/home'>Inicio</NavLink>
                                        <NavLink className='text-white' to='/tienda'>Tienda</NavLink>
                                        <NavLink className='text-white' to='/'>Acerca de</NavLink>
                                        <NavLink className='text-white' to='/contact'>Contacto</NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header