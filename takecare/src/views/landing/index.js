import React, { Component } from 'react';
import Header from './components/Header.js';
import Subhead from '../../components/basics/SubHead.js';
import PostCard from '../../components/posts/PostCard.js';
import BlogCard from '../../components/blogs/BlogCard.js';
import WorkoutCard from '../../components/workouts/WorkoutCard.js';
import BlogExpansion from '../../components/blogs/BlogExpansion.js';

class Landing extends Component{
    render () {
        const subhead1="See what your friends are upto!"

        return (
            <>
            <Header/>
            <Subhead subhead={subhead1}/>
            <br></br>
            <br></br>
            <div style={{marginTop:'10px'}}>
                <BlogExpansion/>
            </div>
            
            </>
        )
    }
}
export default Landing;