const tones = {
  info: "bg-blue-100 text-blue-800",
  sale: "bg-red-500 text-white",
  muted: "bg-gray-700 text-white",
};

const Badge = ({ text, tone = "info" }) => (
  <span
    className={`rounded px-2.5 py-1 text-xs font-semibold shadow-sm ${tones[tone]}`}
  >
    {text}
  </span>
);

export default Badge;
