import Button from "@/components/ui/Button";

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

          <Button>
            Explore Health Library
          </Button>

          <Button variant="secondary">
            Watch Latest Videos
          </Button>

        </div>

      </section>
    </main>
  );
}