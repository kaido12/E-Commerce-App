import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu_repo from "../images/menu-repo.svg";


const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Delivery Over ₹1000 & Free Returns-if not damaged
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Toll Free Line:{" "}
                <a className="text-white" href="tel:+91-7070707070">
                  +91-7070707070
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2 px-5">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">Xnova</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product..."
                  aria-label="Search Product..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BiSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-products"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Compare
                      <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/signin"
                    className="d-flex align-items-center gap-10 text-white">
                    <img src={user} alt="user" />
                    <p className="mb-0">Sign In</p>
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">₹ 2000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-1 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={menu_repo}
                        alt="shop"
                        width="20"
                        height="20"
                      />
                      <span className="me-4 d-inline-block">Shop Menu</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Store</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
