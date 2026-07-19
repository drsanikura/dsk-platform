export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div>
          <h1 className="text-xl font-bold text-white">
            Dr. Sani Kura
          </h1>

          <p className="text-xs text-emerald-400">
            Trusted Medical Advice
          </p>
        </div>


        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">

          <a href="/" className="hover:text-white">
            Home
          </a>

          <a href="/health-library" className="hover:text-white">
            Health Library
          </a>

          <a href="/videos" className="hover:text-white">
            Videos
          </a>

          <a href="/articles" className="hover:text-white">
            Articles
          </a>

          <a href="/about" className="hover:text-white">
            About
          </a>

          <a href="/contact" className="hover:text-white">
            Contact
          </a>

        </div>


        <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-white">
          EN | HA
        </button>

      </nav>
    </header>
  );
}