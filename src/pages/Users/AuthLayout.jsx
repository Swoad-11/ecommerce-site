import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { logotp } from "../../assets";

export const AuthLayout = ({ title, subtitle, children }) => (
  <div className="px-4 py-12">
    <div className="mx-auto flex max-w-3xl items-center rounded-2xl bg-gray-50 p-5 shadow-lg">
      <div className="w-full px-4 py-8 md:w-1/2 md:px-8">
        <h1 className="text-2xl font-bold text-[#002D74]">{title}</h1>
        <p className="mt-2 text-sm text-[#002D74]">{subtitle}</p>
        {children}
      </div>
      <div className="hidden w-1/2 md:block">
        <img className="mx-auto rounded-2xl" src={logotp} alt="TechShop" />
      </div>
    </div>
  </div>
);

export const TextInput = ({ error, id, label, ...props }) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      id={id}
      placeholder={label}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`w-full rounded-xl border bg-white p-2 ${error ? "border-red-500" : ""}`}
      {...props}
    />
    {error && (
      <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
        {error}
      </p>
    )}
  </div>
);

export const PasswordInput = ({ error, id, label, ...props }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          placeholder={label}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-xl border bg-white p-2 pr-10 ${error ? "border-red-500" : ""}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {visible ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};
