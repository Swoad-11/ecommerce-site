import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityControl = ({ value, onDecrease, onIncrease, min = 1, max }) => (
  <div className="inline-flex items-center overflow-hidden rounded-md border border-gray-300 bg-white">
    <button
      type="button"
      onClick={onDecrease}
      disabled={value <= min}
      aria-label="Decrease quantity"
      className="px-3 py-2 text-gray-700 hover:bg-gray-100 disabled:opacity-30"
    >
      <FaMinus size={10} />
    </button>
    <span className="w-10 text-center text-sm font-semibold" aria-live="polite">
      {value}
    </span>
    <button
      type="button"
      onClick={onIncrease}
      disabled={max !== undefined && value >= max}
      aria-label="Increase quantity"
      className="px-3 py-2 text-gray-700 hover:bg-gray-100 disabled:opacity-30"
    >
      <FaPlus size={10} />
    </button>
  </div>
);

export default QuantityControl;
