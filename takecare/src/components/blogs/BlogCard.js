import React, { Component } from 'react';
import './blogs.css';
const BlogCard =()=>{
    return(
        <div className="row">
            <div className="postcard">
                <div className="card">
                        <span className="card-title heading">Blog Title</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light purple floting">+</a>
                        <span className="date"><br></br>27th September 2020</span>
                    <div className="card-content">
                        <p className="blog" style={{textOverflow:'ellipsis'}}>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogCard;