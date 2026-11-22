import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { registerUser, selectCurrentUser } from "../../redux/slices/authSlice";
import { AuthLayout, PasswordInput, TextInput } from "./AuthLayout";

const validate = ({ name, email, password, confirmPassword }) => {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email.";
  if (password.length < 8) errors.password = "Use at least 8 characters.";
  else if (!/\d/.test(password) || !/[A-Za-z]/.test(password))
    errors.password = "Use both letters and numbers.";
  if (confirmPassword !== password)
    errors.confirmPassword = "Passwords don't match.";
  return errors;
};

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectCurrentUser);
  const redirectTo = location.state?.from?.pathname ?? "/profile";

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  if (user && !submitting) return <Navigate to={redirectTo} replace />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setSubmitting(true);
    const result = await dispatch(registerUser(form));
    if (registerUser.fulfilled.match(result)) {
      toast.success("Account created. Welcome to TechShop!");
      navigate(redirectTo, { replace: true });
    } else {
      setErrors({ email: result.payload ?? "Sign up failed." });
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout title="Sign Up" subtitle="Create your TechShop account.">
      <title>Sign Up | TechShop</title>
      <form className="mt-6 flex flex-col gap-4" onSubmit={handleSignup} noValidate>
        <TextInput
          id="name"
          name="name"
          label="Full name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextInput
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <PasswordInput
          id="password"
          name="password"
          label="Password"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <PasswordInput
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />
        <button
          disabled={submitting}
          className="rounded-xl bg-[#002D74] py-2 text-white duration-300 hover:scale-105 disabled:opacity-60"
        >
          {submitting ? "Creating account…" : "Sign Up"}
        </button>
      </form>

      <div className="mt-6 flex items-center justify-between border-t border-[#002D74] pt-4 text-xs text-[#002D74]">
        <p>Already a member?</p>
        <Link
          to="/login"
          state={location.state}
          className="rounded-xl border bg-white px-5 py-2 duration-300 hover:scale-110"
        >
          Login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Signup;
