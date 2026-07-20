import { medicalAuthor } from "@/data/medicalAuthor";

export default function MedicalAuthor() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <p className="text-sm uppercase tracking-widest text-emerald-400">
        Medical Review
      </p>

      <h3 className="mt-3 text-xl font-semibold text-white">
        {medicalAuthor.name}
      </h3>

      <p className="mt-2 text-slate-300">
        {medicalAuthor.role} | {medicalAuthor.description}
      </p>

      <p className="mt-3 text-sm text-slate-400">
        Last reviewed: {medicalAuthor.lastReviewed}
      </p>

      <p className="mt-3 text-sm text-slate-400">
        Medical information reviewed for accuracy and educational value.
      </p>

    </div>
  );
}