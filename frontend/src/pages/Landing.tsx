import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-tight">
          Code<span className="text-blue-400">Proof</span>
        </h1>

        <div className="flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition">
            Login
          </Link>

          <Link to="/register" className="px-5 py-2 text-sm font-medium bg-blue-600 rounded-lg hover:bg-blue-500 transition">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-col items-center text-center px-6 pt-24">

        <div className="mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
          ✨ AI-Powered Adaptive Coding Platform
        </div>

        <h2 className="max-w-4xl text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Don't just solve problems.
          <br />
          <span className="text-blue-400">
            Prove how you code.
          </span>
        </h2>

        <p className="max-w-2xl mt-6 text-lg text-slate-400 leading-relaxed">
          CodeProof analyzes your coding performance, identifies your
          weaknesses, and adapts your practice journey to help you become
          a better problem solver.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <Link to="/register" className="px-7 py-3 rounded-lg bg-blue-600 font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20">
            Start Practicing
            <i className="bi bi-arrow-right ml-2"></i>
          </Link>

          <Link to="/login" className="px-7 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition">
            Login to CodeProof
          </Link>

        </div>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl w-full mt-24 pb-20">

          <div className="p-6 text-left rounded-xl border border-slate-800 bg-slate-900/60">
            <i className="bi bi-bar-chart-line text-2xl text-blue-400"></i>

            <h3 className="mt-4 text-lg font-semibold">
              Adaptive Practice
            </h3>

            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Practice recommendations change according to your
              performance, mistakes, and problem-solving patterns.
            </p>
          </div>

          <div className="p-6 text-left rounded-xl border border-slate-800 bg-slate-900/60">
            <i className="bi bi-stars text-2xl text-blue-400"></i>

            <h3 className="mt-4 text-lg font-semibold">
              AI Coding Assistant
            </h3>

            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Get contextual hints, explanations, and guidance without
              simply being handed the solution.
            </p>
          </div>

          <div className="p-6 text-left rounded-xl border border-slate-800 bg-slate-900/60">
            <i className="bi bi-graph-up-arrow text-2xl text-blue-400"></i>

            <h3 className="mt-4 text-lg font-semibold">
              Track Your Growth
            </h3>

            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Understand your strengths, weaknesses, consistency,
              and progress over time.
            </p>
          </div>

        </section>

      </main>
    </div>
  );
}