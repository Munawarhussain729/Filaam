import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Rating = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return(
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar size={25} className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt size={25} className="icon" />
        ) : (
          <AiOutlineStar size={30} className="icon" />
        )}
      </span>
    );
  });
  return <div className="icon-style">{ratingStar}</div>;
};

export default Rating;
