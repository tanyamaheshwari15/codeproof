import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight"
          >
            Code<span className="text-blue-400">Proof</span>
          </Link>

          <p className="mt-3 text-slate-400">
            Welcome back. Continue your coding journey.
          </p>
        </div>

        {/* Login Card */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl">

          <h2 className="text-2xl font-bold">
            Sign in
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Enter your credentials to access your account.
          </p>

          <form className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300"
              >
                Email
              </label>

              <div className="relative mt-2">
                <i className="bi bi-envelope absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"></i>

                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-3 py-3 bg-slate-950 border border-slate-700 rounded-lg
                             text-white placeholder-slate-600
                             focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-300"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative mt-2">
                <i className="bi bi-lock absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"></i>

                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-3 py-3 bg-slate-950 border border-slate-700 rounded-lg
                             text-white placeholder-slate-600
                             focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 rounded-lg font-semibold
                         hover:bg-blue-500 transition
                         shadow-lg shadow-blue-600/20"
            >
              Sign in
              <i className="bi bi-arrow-right ml-2"></i>
            </button>
          </form>

          {/* Register */}
          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <p className="text-sm text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-400 font-medium hover:text-blue-300"
              >
                Create one
              </Link>
            </p>
          </div>

        </div>

        {/* Back */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-slate-500 hover:text-slate-300">
            <i className="bi bi-arrow-left mr-2"></i>
            Back to CodeProof
          </Link>
        </div>

      </div>
    </div>
  );
}