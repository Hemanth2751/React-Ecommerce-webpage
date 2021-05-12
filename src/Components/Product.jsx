import React from 'react';
import Box from './Product-Box/Box';
import {Link} from 'react-router-dom';

import image1 from './Images/1.jpg'
import image2 from './Images/2.jpg'
import image3 from './Images/3.jpg'
import image4 from './Images/4.jpg'
import image5 from './Images/5.jpg'
import image6 from './Images/6.jpg'
import image7 from './Images/7.jpg'
import image8 from './Images/8.jpg'
import image9 from './Images/9.jpg'
import image10 from './Images/10.jpg'
import image11 from './Images/11.jpg'
import image12 from './Images/12.jfif'
import image13 from './Images/13.jfif'
import image14 from './Images/14.webp'
import image15 from './Images/15.jfif'
import image16 from './Images/16.webp'

function Product() {
    return (
        <div className="product">
            <div className="p-heading">
                <h3>Fashion World</h3>
               <Link to ="/Header"> <li>Home</li></Link>
                </div> 
            <div className='product-container'>
                <Box id="1" image={image1} name={"Mens-Shirt"} price="$23.3" />
                <Box id="2"image={image2} name={"Mens-Shirt"} price="$26.6" />
                <Box id="3" image={image3} name={"Mens-Shirt"} price="$33.2" />
                <Box id="4" image={image4} name={"Mens-Shirt"} price="$24.4" />
                <Box id="5" image={image5} name={"Mens-Shirt"} price="$22.3" />
                <Box id="6" image={image6} name={"Mens-Shirt"} price="$15.9" />
                <Box id="7" image={image7} name={"Mens-Shirt"} price="$16.7" />
                <Box id="8" image={image8} name={"Mens-Shirt"} price="$30.5" />
                <Box id="9" image={image9} name={"Mens-Shirt"} price="$21.3" />
                <Box id="10" image={image10} name={"Mens-Shirt"} price="$33.4" />
                <Box id="11" image={image11} name={"Mens-Shirt"} price="$33.4" />
                <Box id="12" image={image12} name={"Mens-Shirt"} price="$33.4" />
                <Box id="13" image={image13} name={"Mens-Shirt"} price="$33.4" />
                <Box id="14" image={image14} name={"Mens-Shirt"} price="$33.4" />
                <Box id="15" image={image15} name={"Mens-Shirt"} price="$33.4" />
                <Box id="16"image={image16} name={"Mens-Shirt"} price="$33.4" />
             </div>   
             <Link to ="/Header"> <li>Home</li></Link>

            
        </div>
    )
}

export default Product
