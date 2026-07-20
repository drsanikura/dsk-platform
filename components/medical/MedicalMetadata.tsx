import { medicalMetadata } from "@/data/medicalMetadata";


export default function MedicalMetadata() {
  return (
    <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">

      <span>
        🕒 {medicalMetadata.readingTime}
      </span>


      <span>
        📅 Updated {medicalMetadata.lastUpdated}
      </span>

    </div>
  );
}