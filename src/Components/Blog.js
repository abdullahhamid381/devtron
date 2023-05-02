import React from 'react'
import './Scss/Blog.scss'
import { blog } from './Data/Data'
const Blog = () => {
  return (
   <div className="blog-parent">
     <div className='service-card'>
    {
        blog.map((map) => {
            return (
                <div className='services-img'>
                    <img src={map.img} alt="" />
                    <div className="content">
                        <div className='text'>
                            <h1>
                                Machine Learning</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, minus.</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
</div>
   </div>
  )
}

export default Blog