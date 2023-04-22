import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'

const Home = () => {
    return (
        <>
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner position-relative '>
                                <img src={require('../productImages/main-banner-1.jpg')} className='img-fluid rounded-3' alt='main banner' />
                                <div className='main-banner-content position-absolute'>
                                    <h4>Inserte Texto</h4>
                                    <h5>Nombre <br />Producto</h5>
                                    <p>Precio Producto</p>
                                    <Link className='button'>COMPRAR AHORA</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                                <div className='small-banner position-relative'>
                                    <img src='productImages/catbanner-01.jpg '
                                        className='img-fluid rounded-3'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Inserte Texto</h4>
                                        <h5>Nombre <br />Producto</h5>
                                        <p>Precio Producto</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img src='productImages/catbanner-02.jpg '
                                        className='img-fluid rounded-3'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Inserte Texto</h4>
                                        <h5>Nombre <br />Producto</h5>
                                        <p>Precio Producto</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img src='productImages/catbanner-03.jpg '
                                        className='img-fluid rounded-3'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Inserte Texto</h4>
                                        <h5>Nombre <br />Producto</h5>
                                        <p>Precio Producto</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img src='productImages/catbanner-04.jpg '
                                        className='img-fluid rounded-3'
                                        alt='main banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Inserte Texto</h4>
                                        <h5>Nombre <br />Producto</h5>
                                        <p>Precio Producto</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='services d-flex align-items-center justify-content-between gap-30'>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='productImages/service.png' alt='services' />
                                    <div>
                                        <h6>Envío Gratis</h6>
                                        <p className='mb-0'>Pedidos arriba de $100</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='productImages/service-02.png' alt='services' />
                                    <div>
                                        <h6>Regalos Especiales</h6>
                                        <p className='mb-0'>Descuentos y sorpresas</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='productImages/service-03.png' alt='services' />
                                    <div>
                                        <h6>Soporte 24/7</h6>
                                        <p className='mb-0'>Asistencia en compras y envíos</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='productImages/service-04.png' alt='services' />
                                    <div>
                                        <h6>Excelentes precios</h6>
                                        <p className='mb-0'>15% de descuento en tu primera compra</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src='productImages/service-05.png' alt='services' />
                                    <div>
                                        <h6>Pago Seguro</h6>
                                        <p className='mb-0'>Protección total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex justify-content-between align-items-center flex-wrap'>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Item category</h6>
                                        <p># Items</p>
                                    </div>
                                    <img src='productImages/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Item category</h6>
                                        <p># Items</p>
                                    </div>
                                    <img src='productImages/tv.jpg' alt='tv' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Item category</h6>
                                        <p># Items</p>
                                    </div>
                                    <img src='productImages/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Item category</h6>
                                        <p># Items</p>
                                    </div>
                                    <img src='productImages/headphone.jpg' alt='headphone' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Item category</h6>
                                        <p># Items</p>
                                    </div>
                                    <img src='productImages/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Item category</h6>
                                        <p># Items</p>
                                    </div>
                                    <img src='productImages/tv.jpg' alt='tv' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Item category</h6>
                                        <p># Items</p>
                                    </div>
                                    <img src='productImages/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Item category</h6>
                                        <p># Items</p>
                                    </div>
                                    <img src='productImages/headphone.jpg' alt='headphone' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='marque-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src='productImages/brand-01.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='productImages/brand-02.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='productImages/brand-03.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='productImages/brand-04.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='productImages/brand-05.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='productImages/brand-06.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='productImages/brand-07.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='productImages/brand-08.png' alt='brand' />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-header'>Algunos productos</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-header'>Ultimas Noticias</h3>
                        </div>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
            <></>
        </>
    )
}

export default Home