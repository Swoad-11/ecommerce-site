import { svg1, svg2, svg3, svg4, svg5 } from "../../../assets/index";

const perks = [
  { icon: svg3, label: "Official Product with Warranty" },
  { icon: svg1, label: "0% EMI on Selected Products" },
  { icon: svg2, label: "Fast Delivery" },
  { icon: svg4, label: "Secure Payment" },
  { icon: svg5, label: "24/7 Live Support" },
];

const UpSection = () => {
  return (
    <ul className="mx-auto mb-12 grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-5">
      {perks.map(({ icon, label }) => (
        <li
          key={label}
          className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
        >
          <img src={icon} className="h-8 w-8 shrink-0" alt="" />
          <span className="text-sm text-gray-600">{label}</span>
        </li>
      ))}
    </ul>
  );
};

export default UpSection;
