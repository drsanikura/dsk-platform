import Card from "@/components/ui/Card";

interface TopicCardProps {
  title: string;
  description: string;
  category?: string;
}

export default function TopicCard({
  title,
  description,
  category,
}: TopicCardProps) {
  return (
    <Card>

      {category && (
        <p className="mb-3 text-xs uppercase tracking-widest text-emerald-400">
          {category}
        </p>
      )}

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-300">
        {description}
      </p>

      <button
        className="
          mt-6
          text-sm
          font-medium
          text-emerald-400
          hover:text-emerald-300
        "
      >
        Learn More →
      </button>

    </Card>
  );
}