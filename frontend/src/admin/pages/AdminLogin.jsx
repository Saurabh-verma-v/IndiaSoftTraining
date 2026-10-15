import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Lock, Mail, Eye, EyeOff } from "lucide-react";
import API from "../../services/api";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // Replace this endpoint if your existing backend uses another login route.
      const response = await API.post("/admin/login", formData);

      console.log("Login response:", response.data);

      // We'll adapt token handling to your actual backend response.
      const token = response.data.token || response.data.data?.token;

      if (token) {
        localStorage.setItem("adminToken", token);
      }

      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Admin login error:", err.response?.data || err.message);

      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">

        {/* Left Section */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-orange-500 p-10 text-white md:flex">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="rounded-xl bg-white/15 p-3">
              <ShieldCheck size={30} />
            </div>

            <div>
              <h1 className="text-xl font-bold">IndiaSoftTraining</h1>
              <p className="text-sm text-white/80">Administration Portal</p>
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="mb-5 text-4xl font-extrabold leading-tight">
              Manage Your
              <br />
              Digital Presence.
            </h2>

            <p className="max-w-sm leading-7 text-white/85">
              Manage courses, categories, student enquiries, trainer
              applications, and website content from one place.
            </p>
          </div>

          <p className="relative z-10 text-sm text-white/70">
            © {new Date().getFullYear()} IndiaSoftTraining
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">

            <div className="mb-8 md:hidden">
              <div className="mb-3 inline-flex rounded-xl bg-red-100 p-3 text-red-600">
                <ShieldCheck size={30} />
              </div>

              <h1 className="text-2xl font-bold text-slate-900">
                IndiaSoftTraining
              </h1>

              <p className="text-sm text-slate-500">
                Administration Portal
              </p>
            </div>

            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-600">
                Admin Access
              </p>

              <h2 className="text-3xl font-bold text-slate-900">
                Welcome Back
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Sign in to manage your website and training programs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter admin email"
                    autoComplete="username"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-red-600 to-orange-500 py-3.5 font-semibold text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In to Dashboard"}
              </button>

            </form>

            <div className="mt-8 border-t border-slate-100 pt-6 text-center">
              <p className="text-xs leading-5 text-slate-500">
                Authorized administrators only.
                <br />
                Please keep your login credentials confidential.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;