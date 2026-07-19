import TopicCard from "@/components/content/TopicCard";
import ArticleCard from "@/components/content/ArticleCard";

import { topics } from "@/data/topics";
import { articles } from "@/data/articles";


export default function HealthLibraryPage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white">


      {/* Hero */}

      <section className="mx-auto max-w-6xl px-6 py-24">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-emerald-400">
          Medical Knowledge Hub
        </p>


        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          Understand Your Health With Trusted Medical Information
        </h1>


        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
          Explore evidence-based health articles, disease explanations,
          prevention guides and practical medical advice written to help
          individuals and families make informed health decisions.
        </p>


      </section>



      {/* Topics */}

      <section className="mx-auto max-w-6xl px-6 pb-24">


        <h2 className="text-3xl font-bold">
          Explore Health Topics
        </h2>


        <div className="mt-8 grid gap-6 md:grid-cols-2">


          {topics.map((topic) => (

            <TopicCard

              key={topic.title}

              title={topic.title}

              description={topic.description}

              category={topic.category}

            />

          ))}


        </div>


      </section>




      {/* Articles */}

      <section className="mx-auto max-w-6xl px-6 pb-24">


        <h2 className="text-3xl font-bold">
          Latest Articles
        </h2>


        <div className="mt-8 grid gap-6 md:grid-cols-3">


          {articles.map((article)=>(

            <ArticleCard

              key={article.title}

              title={article.title}

              category={article.category}

              readTime={article.readTime}

              summary={article.summary}

            />

          ))}


        </div>


      </section>


    </main>

  );
}