import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, size = "text-sm" }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (value >= i + 1) return <FaStar key={i} />;
    if (value >= i + 0.5) return <FaStarHalfAlt key={i} />;
    return <FaRegStar key={i} />;
  });
  return (
    <div
      className={`flex items-center gap-0.5 text-amber-400 ${size}`}
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      {stars}
      <span className="ml-1 text-xs text-gray-500">{value.toFixed(1)}</span>
    </div>
  );
};

export default Rating;
