import Card from "@/components/ui/Card";

interface TopicCardProps {
  title: string;
  description: string;
  category: string;
}

export default function TopicCard({
  title,
  description,
  category,
}: TopicCardProps) {
  return (
    <Card>

      <p className="text-sm uppercase tracking-widest text-emerald-400">
        {category}
      </p>

      <h3 className="mt-3 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-300">
        {description}
      </p>

    </Card>
  );
}