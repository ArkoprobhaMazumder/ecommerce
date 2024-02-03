import React from 'react';
import "./filtersection.css";
import { useFilterContext } from '../context/FilterContext'
import FormatPrice from "../helper/FormatPrice";
const FilterSection = () => {

  const { filters: { text, category, price, maxPrice, minPrice }, updateFilterValue, all_products,clearFilters } = useFilterContext();

  // To GET UNIQUE DATA OF EACH FIELDS
  const getUniqueData = (data, property) => {
    let newData = data.map((curEle) => {
      return curEle[property]
    })
    return (newData = ["all", ...new Set(newData)])

  }

  // WE NEED UNIQUE DATA
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");



  return (
    <div className='filter-section'>
      <div className="filter-section-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name='text' value={text} placeholder='SEARCH' onChange={updateFilterValue} />
        </form>
      </div>
      <div className='filter-section-category'>
        <h2>Category</h2>
        <div className='filter-section-category-list'>
          {
            categoryOnlyData.map((curEle, index) => {
              return (
                <button className='filter-section-category-list-button' key={index} type='button' name='category' value={curEle} onClick={updateFilterValue}>
                  {curEle}
                </button>
              )
            })
          }
        </div>
      </div>
      <div className='filter-section-company'>
        <h2>Company</h2>
        <form action="#">
          <select name="company" id="company" className='filter-company--select' onClick={updateFilterValue}>
            {
              companyOnlyData.map((curEle, index) => {
                return (
                  <option value={curEle} key={index} name="company">
                    {curEle}
                  </option>
                );
              })
            }
          </select>
        </form>
      </div>

      <div className="filter-section-price">
            <h2>Price</h2>
            <p><FormatPrice price={price}/></p>
            <div className='filter-section-price-range'>
              <input type="range" min={minPrice} max={maxPrice} name='price' value={price} onChange={updateFilterValue}/>
            </div>
      </div>
      <div className="filter-section-clear-button">
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  )
}

export default FilterSection;
