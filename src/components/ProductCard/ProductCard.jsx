import { Link } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  return (
    <Link
      to={`/product/${rootId}`}
      state={{ item: props }}
      className="cursor-pointer"
    >
      <div className="w-full border border-gray-100 rounded-md relative group hover:shadow-lg hover:shadow-blue-200">
        <div className=" relative overflow-y-hidden rounded-t-md">
          <div>
            <img
              className="w-full h-full"
              src={props.img}
              alt="product image"
            />
          </div>
          <div className="absolute top-6 left-8">
            {props.badge && <Badge text="New" />}
          </div>
          <div className="w-full absolute bg-white bottom-0 min-[780px]:-bottom-[130px] min-[780px]:group-hover:bottom-0 duration-700">
            <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
              <li
                className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-blue-800
               flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: props._id,
                      name: props.productName,
                      quantity: 1,
                      image: props.img,
                      badge: props.badge,
                      price: props.price,
                      colors: props.color,
                    })
                  )
                }
              >
                Add to Cart
                <span>
                  <FaShoppingCart />
                </span>
              </li>
              <li
                className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-blue-800
             flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
              >
                Add to Wish List
                <span>
                  <BsSuitHeartFill />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="py-6 flex flex-col gap-2 border-[1px]
       border-t-0 px-4 bg-gray-50 rounded-b-md"
        >
          <div className="flex flex-wrap items-center justify-between font-titleFont h-16">
            <h2 className="text-md text-[#33475b] font-bold">
              {props.productName}
            </h2>
            <p className="text-teal-600 text-lg font-semibold">
              ${props.price}
            </p>
          </div>
          <form className="mt-4 flex gap-4">
            <button
              type="button"
              className="block w-full rounded-md bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
            >
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
