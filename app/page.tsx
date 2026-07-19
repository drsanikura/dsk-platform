export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">

        <p className="mb-4 text-sm uppercase tracking-widest text-emerald-400">
          Evidence-led health education
        </p>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight">
          Trusted Medical Advice for Every Family
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Evidence-based health education that helps individuals and families
          make informed health decisions through clear explanations,
          practical guidance and compassionate care.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950">
            Explore Health Library
          </button>

          <button className="rounded-full border border-slate-500 px-6 py-3">
            Watch Latest Videos
          </button>

        </div>

      </section>
    </main>
  );
}