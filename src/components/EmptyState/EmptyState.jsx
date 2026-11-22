import { Link } from "react-router-dom";

const EmptyState = ({ image, title, message, actionLabel, actionTo, onAction }) => (
  <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-16 text-center">
    {image && <img src={image} alt="" className="w-48" />}
    <h2 className="text-2xl font-semibold text-[#33475b]">{title}</h2>
    {message && <p className="text-gray-600">{message}</p>}
    {actionLabel &&
      (onAction ? (
        <button type="button" onClick={onAction} className="btn btn-neutral">
          {actionLabel}
        </button>
      ) : (
        <Link to={actionTo} className="btn btn-neutral">
          {actionLabel}
        </Link>
      ))}
  </div>
);

export default EmptyState;
