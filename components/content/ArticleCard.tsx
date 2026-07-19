import Card from "@/components/ui/Card";

interface ArticleCardProps {
  title: string;
  category: string;
  readTime: string;
  summary: string;
}


export default function ArticleCard({
  title,
  category,
  readTime,
  summary,
}: ArticleCardProps) {

  return (
    <Card>

      <p className="text-sm uppercase tracking-widest text-emerald-400">
        {category}
      </p>


      <h3 className="mt-3 text-2xl font-semibold">
        {title}
      </h3>


      <p className="mt-3 text-slate-300">
        {summary}
      </p>


      <p className="mt-5 text-sm text-slate-400">
        {readTime}
      </p>

    </Card>
  );
}