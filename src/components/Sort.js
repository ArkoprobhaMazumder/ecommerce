import "./sort.css";
import { BsFillGridFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {

const {filter_products,grid_view,setGridView,setListView,sorting}=useFilterContext();

  return (
    <div className='sort-product-containor'>
      <div className="sort-product-buttons">
        <button onClick={setGridView} className={grid_view ? "view-active sort-btn":"sort-btn"}>
        <BsFillGridFill />
        </button>
        <button onClick={setListView} className={ !grid_view ? "view-active sort-btn":"sort-btn"}>
          <BsList/>
        </button>
      </div>
      <div className="sort-product-product">
       <p>{filter_products.length} products available</p>
      </div>
      <div className="sort-product-sorting-box">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option disabled></option>
            <option value="highest">Price(highest)</option>
            <option disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Sort
