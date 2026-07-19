import Card from "@/components/ui/Card";

interface VideoCardProps {
  title: string;
  description: string;
  duration?: string;
}

export default function VideoCard({
  title,
  description,
  duration,
}: VideoCardProps) {
  return (
    <Card>

      <div className="flex h-40 items-center justify-center rounded-xl bg-slate-800">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-slate-950">
          ▶
        </div>
      </div>


      <p className="mt-5 text-xs uppercase tracking-widest text-emerald-400">
        Video
      </p>


      <h3 className="mt-3 text-xl font-semibold text-white">
        {title}
      </h3>


      <p className="mt-3 text-slate-300">
        {description}
      </p>


      {duration && (
        <p className="mt-5 text-sm text-slate-400">
          Duration: {duration}
        </p>
      )}


      <button
        className="
          mt-6
          text-sm
          font-medium
          text-emerald-400
          hover:text-emerald-300
        "
      >
        Watch Video →
      </button>

    </Card>
  );
}