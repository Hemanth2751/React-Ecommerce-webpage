import React from 'react'
import Nav from './Nav/Nav';
import image from './Images/logo.webp';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='main'>
            <Nav />
            <div className='m-text'>
                <img src={image} className='header-image'alt="img"/>
                <h2>Let's Define the rules of Shopping</h2>
                <Link to ='/Product'><li className='x-btn'>Products</li></Link>
                
           </div>
           
        </div>
    )
}

export default Header;
