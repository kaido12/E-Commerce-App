import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

const Store = () => {
  return (
    <>
        <BreadCrumb title="Store" />
        <div className="store-wrapper home-wrapper-2 py-5 px-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop By Categories</h3>
                  <div>
                    <ul className='ps-0'>
                      <li>Watch</li>
                      <li>TV</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                    </ul>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter By</h3>
                  <div>
                    <h5 className="sub-title">Availability</h5>
                    <div>
                      <div className="form-check">
                        <input 
                          type="checkbox"
                          className='form-check-input'
                        />
                        <label className='form-check-label' htmlFor='' >
                          In Stock {1}
                        </label>
                      </div>
                      <div className="form-check">
                        <input 
                          type="checkbox"
                          className='form-check-input'
                        />
                        <label className='form-check-label' htmlFor='' >
                          Out of Stock {0}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product Tags</h3>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Random Product</h3>
                </div>
              </div>
              <div className="col-9">

              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Store;