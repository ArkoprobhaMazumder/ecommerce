import React from 'react'
import FormatPrice from '../helper/FormatPrice';
import { NavLink } from 'react-router-dom';
import "./listview.css";


const ListView = ({ products }) => {
    return (
        <div className='list-view-products-container'>
            <div className="list-view-product-lists">
                {
                    products.map((ele) => {
                        const { id, name, image, price, description } = ele;
                        return (
                            <div key={id} className='list-view-product-lists-item'>
                                <figure>
                                    <img className='list-view-product-lists-item-image' src={image} alt={name} />
                                </figure>
                                <div className='list-view-product-lists-item-desc'>
                                    <h3>{name}</h3>
                                    <p className='list-view-product-lists-item-desc-price'><FormatPrice price={price} /></p>
                                    <p>{description.slice(0, 90)}...</p>
                                    <NavLink to={`/singleproduct/:${id}`}>
                                        <button>Read More</button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListView
