import React from 'react'
import './Blue.css';

function Yellow() {
  const productDetails = {
    title: "Beautiful Abstract Painting",
    artist: "John Doe",
    price: "$70",
    description: "Immerse yourself in the breathtaking beauty of this scenic painting. A masterpiece by the talented artist John Doe, this painting captures the essence of nature and tranquility. With vibrant colors and intricate details, it's sure to be a focal point in any room.",
    rating: "5/5",
    topRated: true,
  };
  return (
    <>
        <header className='blueHeader' />
        
        <div className="product-details-container">
          <div className="product-details-header">
            <h2>{productDetails.title}</h2>
            <p className={productDetails.topRated ? 'top-rated' : ''}>{productDetails.rating} {productDetails.topRated ? 'Top Rated' : ''}</p>
          </div>
          <div className="product-details-content">
            <div className="product-image">
              <img src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" alt="Product4" />
            </div>
            <div className="product-description">
              <p className="artist">By {productDetails.artist}</p>
              <p className="price">{productDetails.price}</p>
              <p className="description">{productDetails.description}</p>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Yellow;