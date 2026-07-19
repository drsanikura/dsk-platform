interface MedicalSectionProps {
  title: string;
  content: string;
}


export default function MedicalSection({
  title,
  content,
}: MedicalSectionProps) {

  return (

    <section className="mx-auto max-w-5xl px-6 pb-16">


      <div
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-8
        "
      >

        <h2 className="text-3xl font-semibold text-white">
          {title}
        </h2>


        <p className="mt-5 leading-relaxed text-slate-300">
          {content}
        </p>


      </div>


    </section>

  );
}