import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { FaUserCheck } from "react-icons/fa";
import {
  loginUser,
  loginAsDemo,
  selectCurrentUser,
} from "../../redux/slices/authSlice";
import { AuthLayout, PasswordInput, TextInput } from "./AuthLayout";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectCurrentUser);
  const redirectTo = location.state?.from?.pathname ?? "/profile";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (user && !submitting) return <Navigate to={redirectTo} replace />;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const result = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(result)) {
      toast.success("Welcome back!");
      navigate(redirectTo, { replace: true });
    } else {
      setError(result.payload ?? "Login failed. Please try again.");
      setSubmitting(false);
    }
  };

  const handleDemo = () => {
    dispatch(loginAsDemo());
    toast.success("Logged in as the demo shopper");
    navigate(redirectTo, { replace: true });
  };

  return (
    <AuthLayout title="Login" subtitle="If you are already a member, log in here.">
      <title>Login | TechShop</title>
      <form className="mt-6 flex flex-col gap-4" onSubmit={handleLogin}>
        <TextInput
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PasswordInput
          id="password"
          label="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && (
          <p role="alert" className="rounded bg-red-50 p-2 text-sm text-red-700">
            {error}
          </p>
        )}
        <button
          disabled={submitting}
          className="rounded-xl bg-[#002D74] py-2 text-white duration-300 hover:scale-105 disabled:opacity-60"
        >
          {submitting ? "Logging in…" : "Login"}
        </button>
      </form>

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400" />
      </div>

      <button
        type="button"
        onClick={handleDemo}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border bg-white py-2 text-sm duration-300 hover:scale-105"
      >
        <FaUserCheck className="text-green-600" />
        <span className="text-[#002D74]">Try the demo account</span>
      </button>

      <div className="mt-6 flex items-center justify-between border-t border-[#002D74] pt-4 text-xs text-[#002D74]">
        <p>Don&apos;t have an account?</p>
        <Link
          to="/signup"
          state={location.state}
          className="rounded-xl border bg-white px-5 py-2 duration-300 hover:scale-110"
        >
          Register
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
