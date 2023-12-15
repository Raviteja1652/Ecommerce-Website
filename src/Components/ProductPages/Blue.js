import React from 'react'
import './Blue.css'
function Blue() {
  const productDetails = {
    title: "Beautiful Scenery Painting",
    artist: "John Doe",
    price: "$100",
    description: "Immerse yourself in the breathtaking beauty of this scenic painting. A masterpiece by the talented artist John Doe, this painting captures the essence of nature and tranquility. With vibrant colors and intricate details, it's sure to be a focal point in any room.",
    rating: "5/5",
    topRated: true,
  };
  return (
    <>
        <header className='blueHeader' />
        {/* <img src='https://prasadyash2411.github.io/ecom-website/img/Album%204.png' className='blueProduct' /> */}
          <div className="product-details-container">
            <div className="product-details-header">
              <h2>{productDetails.title}</h2>
              <p className={productDetails.topRated ? 'top-rated' : ''}>{productDetails.rating} {productDetails.topRated ? 'Top Rated' : ''}</p>
            </div>
            <div className="product-details-content">
              <div className="product-image">
                <img src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" alt="Product" />
              </div>
              <div className="product-description">
                <p className="artist">By {productDetails.artist}</p>
                <p className="price">{productDetails.price}</p>
                <p className="description">{productDetails.description}</p>
                {/* <button className="add-to-cart">Add to Cart</button> */}
              </div>
            </div>
          </div>
            
         
    </>
  )
}

export default Blue