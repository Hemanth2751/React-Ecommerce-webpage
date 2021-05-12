import React from 'react'
// import Product from '../Product'

function Box(props) {
    return (
    <div className='Whole-box'>
        <div className ='p-box' >
            <img src={props.image} alt='prodct-image'/>
            <p>{props.name}</p>
            <a className='price'href='#'>{props.price}</a>
            <a className='buy-btn' href='#'>Details</a>
            
        </div>
        </div>
    )
}

export default Box
