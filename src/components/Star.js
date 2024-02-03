import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import "./star.css";

const Star = ({stars,reviews}) => {
  let ratingStar=Array.from({length:5},((ele,index)=>{
    let number=index+0.5;
    return(
        <span key={index}>
            {
                stars>=index+1?<FaStar className="star-icon"/>:stars>=number?<FaStarHalfAlt className="star-icon"/>:<AiOutlineStar className="star-icon"/>
            }
        </span>
    )
  }))
  return (
    <div className="review-star-icon">
      {ratingStar}
      <p>({reviews} Customer Review)</p>
    </div>
  )
}

export default Star
