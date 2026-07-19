import { medicalTopics } from "@/data/medicalTopics";


interface TopicPageProps {
  params: Promise<{
    topic: string;
  }>;
}


export default async function TopicPage({
  params,
}: TopicPageProps) {


  const { topic } = await params;


  const topicData =
    medicalTopics[topic as keyof typeof medicalTopics];


  if (!topicData) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">

        <h1 className="text-4xl font-bold">
          Topic Not Found
        </h1>

      </main>
    );
  }



  return (
    <main className="min-h-screen bg-slate-950 text-white">


      {/* Hero */}

      <section className="mx-auto max-w-5xl px-6 py-24">


        <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
          {topicData.category}
        </p>


        <h1 className="mt-5 text-5xl font-bold">
          {topicData.title}
        </h1>


        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-300">
          {topicData.introduction}
        </p>


      </section>



      {/* Overview */}

      <section className="mx-auto max-w-5xl px-6 pb-16">


        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">


          <h2 className="text-3xl font-semibold">
            Overview
          </h2>


          <p className="mt-5 leading-relaxed text-slate-300">
            {topicData.overview}
          </p>


        </div>


      </section>



      {/* Symptoms */}

      <section className="mx-auto max-w-5xl px-6 pb-16">


        <h2 className="text-3xl font-semibold">
          Common Symptoms
        </h2>


        <div className="mt-6 grid gap-4 md:grid-cols-2">


          {topicData.symptoms.map((symptom) => (

            <div
              key={symptom}
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-900
                p-5
                text-slate-300
              "
            >

              {symptom}

            </div>

          ))}


        </div>


      </section>



      {/* Prevention */}

      <section className="mx-auto max-w-5xl px-6 pb-24">


        <h2 className="text-3xl font-semibold">
          Prevention & Healthy Living
        </h2>


        <div className="mt-6 grid gap-4 md:grid-cols-2">


          {topicData.prevention.map((item) => (

            <div
              key={item}
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-900
                p-5
                text-slate-300
              "
            >

              {item}

            </div>

          ))}


        </div>


      </section>


    </main>
  );
}