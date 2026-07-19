import Link from "next/link";
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

  const slug = title.toLowerCase().replaceAll(" ", "-");

  return (
    <Card>

      <p className="text-sm uppercase tracking-widest text-emerald-400">
        {category}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-300">
        {description}
      </p>


      <Link
        href={`/health-library/${slug}`}
        className="
          mt-6
          inline-block
          text-emerald-400
          font-medium
          hover:text-emerald-300
        "
      >
        Learn More →
      </Link>


    </Card>
  );
}