import React from 'react'
import { Link } from 'react-router-dom'
import { BsYoutube, BsInstagram, BsFacebook } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='productImages/newsletter.png' alt='newsletter' />
                <h4 className='mb-0 text-white'>Suscribete al NewsLetter</h4>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text"
                  className="form-control py-1"
                  placeholder="Registra tu e-mail"
                  aria-label="Registra tu e-mail"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-2" id="basic-addon2">
                  Suscribete
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contáctanos</h4>
              <div>
                <div className='footer-links d-flex flex-column '>
                  <address className='text-white'> Calle 1234 <br />
                    Colonia Ciudad, Estado <br />
                    Código Postal: 00000
                  </address>
                  <a href='Tel: +52 222 1234 00 00' className='mt-2 d-block mb-2 text-white'>+52 222 1234 00 00</a>
                  <a href='mailto: email@email.com' className='mt-2 d-block mb-2 text-white'>email@email.com</a>
                  <div className='social_icons d-flex align-items-center gap-30 p-2'>
                    <a href='' >
                      <BsFacebook className='text-white fs-4' to='' />
                    </a>
                    <a href='' >
                      <BsInstagram className='text-white fs-4' to='' />
                    </a>
                    <a href='' >
                      <BsYoutube className='text-white fs-4' to='' />
                    </a>

                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Información</h4>
              <div>
                <div className='footer-links d-flex flex-column '>
                  <Link className='text-white py-2 mb-1'>Aviso de Privacidad</Link>
                  <Link className='text-white py-2 mb-1'>Devoluciones</Link>
                  <Link className='text-white py-2 mb-1'>Envíos</Link>
                  <Link className='text-white py-2 mb-1'>Términos y condiciones</Link>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Cuenta</h4>
              <div>
                <div className='footer-links d-flex flex-column '>
                  <Link className='text-white py-2 mb-1'>Acerca de nosotros</Link>
                  <Link className='text-white py-2 mb-1'>Preguntas Frecuentes</Link>
                  <Link className='text-white py-2 mb-1'>Contacto</Link>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column '>
                <Link className='text-white py-2 mb-1'>Producto 1</Link>
                <Link className='text-white py-2 mb-1'>Producto 2</Link>
                <Link className='text-white py-2 mb-1'>Producto 3</Link>
                <Link className='text-white py-2 mb-1'>Producto 4</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                ©{new Date().getFullYear()}: Powered by DV</p>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer