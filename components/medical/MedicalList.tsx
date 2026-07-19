interface MedicalListProps {
  title: string;
  items: string[];
}


export default function MedicalList({
  title,
  items,
}: MedicalListProps) {

  return (

    <section className="mx-auto max-w-5xl px-6 pb-16">

      <h2 className="text-3xl font-semibold text-white">
        {title}
      </h2>


      <div className="mt-6 grid gap-4 md:grid-cols-2">

        {items.map((item) => (

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

  );
}