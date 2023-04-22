import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'

const Contact = () => {
    return (
        <>
            <Meta title={'Contáctanos'} />
            <BreadCrumb title='Contacto' />
            <div className='contact-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1886.1960317041296!2d-98.24627339179743!3d19.002437832825105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfb8a03380c0b7%3A0x809fbc6424c50e2f!2sTorres%20De%20Mayorazgo%20Floresta!5e0!3m2!1ses!2smx!4v1680634820784!5m2!1ses!2smx" width="600" height="450" className="border-0 w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='col-12 mt-5'>
                            <div className='contact-inner-wrapper d-flex justify-content-between'>
                                <div>
                                    <h3 className='contact-title mb-4'>Contáctanos</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                                                <AiOutlineHome className='fs-5 ' />
                                                <address className='mb-0'>1234 Direccion Col Direccion Estado, País CP 75146</address>
                                            </li >
                                            <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                                                <BiPhoneCall className='fs-5' />
                                                <a href='tel: +52 222 2222 2222'>+52 222 2222 2222</a>
                                            </li>
                                            <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                                                <AiOutlineMail className='fs-5' />
                                                <a href='mailto:email@email.com'>email@email.com</a>
                                            </li>
                                            <li className='mb-3 fs-5 d-flex gap-15 align-items-center'>
                                                <BiInfoCircle className='fs-5' />
                                                <p className='mb-0'>Lunes a Viernes <br />
                                                    8 am : 6 pm</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='contact-title'>Envíanos mensaje</h3>
                                    <form action='' className='d-flex flex-column gap-15' >
                                        <div>
                                            <input type='text' className='form-control' placeholder='Nombre'></input>
                                        </div>
                                        <div>
                                            <input type='emai' className='form-control' placeholder='Email'></input>
                                        </div>
                                        <div>
                                            <input type='tel' className='form-control' placeholder='Teléfono'></input>
                                        </div>
                                        <div>
                                            <textarea name='' id='' className='w-100 form-control' cols='30' rows='10' placeholder='Comentarios' ></textarea>
                                        </div>
                                        <div>
                                            <button className='button border-0'>Enviar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact