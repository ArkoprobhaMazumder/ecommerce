import { NavLink } from "react-router-dom";
import "./product.css";
import FormatPrice from "../helper/FormatPrice";

const Product = (item) => {
    const { id, image, category, name, price } = item;
    return (
        <NavLink className="product-Link" to={`/singleproduct/:${id}`}>
            <div className='product'>
                <figure className="product_image_box">
                    <img src={image} className="product_box_image" alt="img" />
                    <figcaption className="product-category">{category}</figcaption>
                </figure>
                <div className="product-bottom">
                    <p className="product_item_name">{name}</p>
                    <p className="product-price"><FormatPrice price={price} /></p>
                </div>
            </div>
        </NavLink>
    )
}

export default Product
