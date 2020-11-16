import React, { Component } from 'react';
import Header from './components/Header.js';
import Subhead from '../../components/basics/SubHead.js';
import PostCard from '../../components/posts/PostCard.js';
class Landing extends Component{
    render () {
        const subhead1="See what your friends are upto!"
        return (
            <>
            <Header/>
            <Subhead subhead={subhead1}/>

            
            </>
        )
    }
}
export default Landing;