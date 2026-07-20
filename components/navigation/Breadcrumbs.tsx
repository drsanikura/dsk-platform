interface BreadcrumbItem {
  label: string;
  href?: string;
}


interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}


export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {

  return (
    <nav className="mx-auto max-w-5xl px-6 pt-8">

      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">

        {items.map((item, index) => (

          <li
            key={item.label}
            className="flex items-center gap-2"
          >

            {item.href ? (

              <a
                href={item.href}
                className="transition hover:text-emerald-400"
              >
                {item.label}
              </a>

            ) : (

              <span className="text-slate-300">
                {item.label}
              </span>

            )}


            {index !== items.length - 1 && (
              <span>
                /
              </span>
            )}

          </li>

        ))}

      </ol>

    </nav>
  );
}