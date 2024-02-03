import "./gridview.css";
import Product from "./Product"
const GridView = ({ products }) => {
    return (
        <div className='productlist-gridview-products'>
            {
                products.map((ele, index) => {
                    return (
                        <Product key={ele.id}{...ele} />
                    )
                })
            }
        </div>
    )
}

export default GridView
