import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'

const Tienda = () => {

    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={'Tienda'} />
            <BreadCrumb title='Tienda' ></BreadCrumb>
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Categorías</h3>
                                <div>
                                    <ul className=''>
                                        <li>Categoría</li>
                                        <li>Categoría</li>
                                        <li>Categoría</li>
                                        <li>Categoría</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Filtros</h3>
                                <div>
                                    <h5 className='sub-title'>Disponibilidad</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id='' />
                                            <label className='form-check-label' htmlFor=''>
                                                Disponible (2)
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id='' />
                                            <label className='form-check-label' htmlFor=''>
                                                No Disponible (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'> Precio </h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input
                                                type="price"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="De"
                                            />
                                            <label htmlFor="floatingInput">De</label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="price"
                                                className="form-control"
                                                id="floatingInput1"
                                                placeholder="Hasta"
                                            />
                                            <label htmlFor="floatingInput1">Hasta</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'> Size </h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id='sizeXS' />
                                            <label className='form-check-label' htmlFor=''>
                                                XS
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id='sizeS' />
                                            <label className='form-check-label' htmlFor=''>
                                                S
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id='sizeM' />
                                            <label className='form-check-label' htmlFor=''>
                                                M
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id='sizeL' />
                                            <label className='form-check-label' htmlFor=''>
                                                L
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id='sizeXL' />
                                            <label className='form-check-label' htmlFor=''>
                                                XL
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0'>Ordenar por:</p>
                                    <select name='sort_by' className='form-control form-select' style={{ width: '225px' }} id='SortBy'>
                                        <option value='best-selling' selected='selected'>
                                            Más vendidos
                                        </option>
                                        <option value='title-ascending'>A-Z</option>
                                        <option value='title-descending'>Z-A</option>
                                        <option value='price-ascending'>Precio: menor a mayor</option>
                                        <option value='price-descending'>Precio: mayor a menor</option>
                                    </select>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalproducts mb-0' style={{ width: '100px' }}># Productos</p>
                                        <div className='d-flex gap-10 align-items-center grid '>

                                            <img onClick={() => { setGrid(3); }}
                                                src='productImages/gr4.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />
                                            <img onClick={() => { setGrid(4); }}
                                                src='productImages/gr3.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />
                                            <img onClick={() => { setGrid(6) }}
                                                src='productImages/gr2.svg'
                                                className='d-block img-fluid'
                                                alt='grid'
                                            />
                                            <img onClick={() => { setGrid(12); }}
                                                src='productImages/gr.svg' c
                                                lassName='d-block img-fluid'
                                                alt='grid'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='products-list pb-5'>
                                <div className='d-flex gap-10 flex-wrap'>
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Tienda