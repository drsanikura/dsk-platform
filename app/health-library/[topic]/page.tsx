import { medicalTopics } from "@/data/medicalTopics";

import MedicalSection from "@/components/medical/MedicalSection";
import MedicalList from "@/components/medical/MedicalList";
import FAQ from "@/components/medical/FAQ";

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


<section className="mx-auto max-w-5xl px-6 py-24">


<p className="text-sm uppercase tracking-widest text-emerald-400">
{topicData.category}
</p>


<h1 className="mt-5 text-5xl font-bold">
{topicData.title}
</h1>


<p className="mt-8 text-xl text-slate-300">
{topicData.introduction}
</p>


</section>



<MedicalSection
title="Overview"
content={topicData.overview}
/>



<MedicalList
title="Causes"
items={topicData.causes}
/>



<MedicalList
title="Risk Factors"
items={topicData.riskFactors}
/>



<MedicalList
title="Symptoms"
items={topicData.symptoms}
/>



<MedicalList
title="Diagnosis"
items={topicData.diagnosis}
/>



<MedicalList
title="Treatment"
items={topicData.treatment}
/>



<MedicalList
title="Prevention & Healthy Living"
items={topicData.prevention}
/>



<MedicalList
title="Possible Complications"
items={topicData.complications}
/>



<MedicalList
title="When To Seek Medical Help"
items={topicData.whenToSeekHelp}
/>



<FAQ
items={topicData.faq}
/>



</main>

);
}