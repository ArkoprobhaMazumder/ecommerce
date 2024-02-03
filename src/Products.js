import React from 'react'
import FilterSection from './components/FilterSection'
import Sort from './components/Sort'
import ProductList from './components/ProductList'

const Products = () => {

  return (
    <div className='products-page-main-container'>
      <div className="product-page-filter-section">
        <FilterSection/>
      </div>
      <div className="product-page-product-section">
        <div className="product-section-top">
          <Sort/>
        </div>
        <div className="product-section-bottom">
          <ProductList/>
        </div>
      </div>
    </div>
  )
}

export default Products
