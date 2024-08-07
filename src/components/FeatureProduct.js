import { useProductContext } from "../context/ProductContext";
import Product from "./Product";
import "./featureproduct.css";

const FeatureProduct = () => {
    const {isLoading,featureProducts}=useProductContext();

    if(isLoading){
        return <div>....Loading</div>
    }
  return (
   <>
    <section className="feature-product-section">
        <div className="container">
        <div className="feature-product-container">
            <p className="feature_section_title">CHEACK NOW!</p>
            <h1>Our Feature Services</h1>
            <div className="product-item-box">
                {
                    featureProducts.map((item)=>{
                            return <Product key={item.id} {...item}/>
                    })
                }
            </div>
        </div>
        </div>
    </section>
   </>
  )
}

export default FeatureProduct
