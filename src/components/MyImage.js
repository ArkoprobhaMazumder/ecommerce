import { useState } from "react";
import "./myimage.css";

const MyImage = ({image=[{url:""}]}) => {

const [mainImage,setMainImage]=useState(image[0]);


  return (
    <>
    <div className="single-product-image">
      <div className="left-side-images">
        {
          image.map((item,index)=>{
            return(
              <figure key={index}>
                <img
                src={item.url}
                alt={item.filename}
                className='single-image-style'
                key={index}
                onClick={()=>{setMainImage(item)}}
                />
              </figure>
            )
          })
        }
      </div>
      <div className="single-product-main-image">
        <img src={mainImage.url} alt={mainImage.filename}/>
      </div>
    </div>
    </>
  )
}

export default MyImage
