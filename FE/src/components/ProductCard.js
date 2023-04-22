import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();



    return (
        <>
            <div className={`${location.pathname == "/tienda" ? `gr-${grid}` : 'col-3'}`}>
                <div className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='productImages/wish.svg' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='productImages/watch.jpg' className='img-fluid' alt='product image'></img>
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Marca</h6>
                        <h5 className='product-title'>
                            Título del producto
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor='#ffd700' />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Una pequeña descripción del producto Una pequeña descripción del producto Una pequeña descripción del producto Una pequeña descripción del producto</p>
                        <p className='price'>$0.00 <br />
                            <button className='button p-2 m-2'>Añadir a tu carrito</button></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductCard