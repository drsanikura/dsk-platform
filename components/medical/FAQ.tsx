interface FAQItem {
  question: string;
  answer: string;
}


interface FAQProps {
  items: FAQItem[];
}


export default function FAQ({
  items,
}: FAQProps) {

  return (

    <section className="mx-auto max-w-5xl px-6 pb-24">


      <h2 className="text-3xl font-semibold text-white">
        Frequently Asked Questions
      </h2>


      <div className="mt-8 space-y-4">


        {items.map((item) => (

          <div
            key={item.question}
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              p-6
            "
          >

            <h3 className="text-xl font-semibold text-white">
              {item.question}
            </h3>


            <p className="mt-3 text-slate-300">
              {item.answer}
            </p>


          </div>

        ))}


      </div>


    </section>

  );
}