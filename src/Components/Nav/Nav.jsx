import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
            <div className='logo'>
                <a href='#'>Ecommerce</a>
        </div>
            <div className='side-box'>
                <i className='fas fa=search'></i>
                <input placeholder='search' type='text'/> 
                <a href='#'>Contact Us</a>
                <a href='#'>About Us</a>
                <a href='#'>Home</a>
            </div>

        <div className='divbtn'>
            <button className='Navbtn'>Login</button>
            <button className='Navbtn'>Signin</button>
            </div>
        </div >
    )
}

export default Nav
