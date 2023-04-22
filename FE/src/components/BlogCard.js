import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className='col-3'>
            <div className='blog-card'>
                <div className='card-image'>
                    <img src='productImages/blog-1.jpg' className='img-fluid' alt='blog' />
                </div>
                <div className='blog-content'>
                    <p className='date'>Blog date here</p>
                    <h5 className='title'> Blog Tittle Here
                    </h5>
                    <p className='desc'>Blog Description Here Blog Description Here Blog Description Here Blog Description Here Blog Description Here</p>
                    <Link to="" className='button'> Saber más </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard