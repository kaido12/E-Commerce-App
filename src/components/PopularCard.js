import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import wish  from "../images/wish.svg";
import product01  from "../images/product_01.png";
import product02 from "../images/product_02.png";

const ProductCard = () => {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className='col-3'>
        <Link to='/store/:id' className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" />
              </button>
            </div>
            <div className="product-image d-flex align-items-center justify-content-center">
              <img src={product01} height={110} alt="product" />
              <img src={product02} height={110} alt="product" />
            </div>
            <div className="product-details">
              <h6 className="brand">Sony</h6>              
              <h5 className="product-title">Buy 3 & Get 15% Off</h5>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                // value="3"
                isHalf={true}
                //edit={false}
                activeColor="#ffd700"
              /> 
              <p className='price'>₹5000</p>
            </div>
            {/* <div className="side-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button className='border-0 bg-transparent'>
                  <img src="./images/view.svg" alt="view" />
                </button>
                <button className='border-0 bg-transparent'>
                  <img src="./images/add-cart.svg" alt="addcart" />
                </button>
                <button className='border-0 bg-transparent'>
                  <img src="./images/prodcompare.svg" alt="view" />
                </button>
              </div>
            </div> */}
        </Link>
    </div>
  )
}

export default ProductCard;