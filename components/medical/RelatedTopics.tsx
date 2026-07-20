interface RelatedTopic {
  title: string;
  slug: string;
}


interface RelatedTopicsProps {
  topics: RelatedTopic[];
}


export default function RelatedTopics({
  topics,
}: RelatedTopicsProps) {

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">

      <h2 className="text-3xl font-bold text-white">
        Related Health Topics
      </h2>


      <div className="mt-8 grid gap-6 md:grid-cols-3">

        {topics.map((topic) => (

          <a
            key={topic.slug}
            href={`/health-library/${topic.slug}`}
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              p-6
              transition
              hover:border-emerald-400
            "
          >

            <h3 className="text-xl font-semibold text-white">
              {topic.title}
            </h3>

            <p className="mt-3 text-emerald-400">
              Explore →
            </p>

          </a>

        ))}

      </div>

    </section>
  );
}