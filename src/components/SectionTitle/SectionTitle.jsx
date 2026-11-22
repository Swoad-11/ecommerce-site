import { Link } from "react-router-dom";

const SectionTitle = ({ heading, subHeading, linkTo, linkLabel = "View all" }) => {
  return (
    <div className="mb-6 flex flex-col items-center gap-1 text-center">
      <h2 className="text-2xl font-semibold uppercase text-[#33475b]">
        {heading}
      </h2>
      <p className="text-sm uppercase text-yellow-700">{subHeading}</p>
      {linkTo && (
        <Link
          to={linkTo}
          className="mt-1 text-sm font-medium text-blue-700 hover:underline"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
