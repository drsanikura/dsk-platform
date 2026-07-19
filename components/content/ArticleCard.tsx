import Card from "@/components/ui/Card";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author?: string;
  date?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  author,
  date,
}: ArticleCardProps) {
  return (
    <Card>

      <p className="text-xs uppercase tracking-widest text-emerald-400">
        Article
      </p>

      <h3 className="mt-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-300">
        {excerpt}
      </p>


      <div className="mt-6 flex justify-between text-sm text-slate-400">

        <span>
          {author ?? "Dr. Sani Kura"}
        </span>

        <span>
          {date ?? "Medical Education"}
        </span>

      </div>


      <button
        className="
          mt-6
          text-sm
          font-medium
          text-emerald-400
          hover:text-emerald-300
        "
      >
        Read Article →
      </button>

    </Card>
  );
}