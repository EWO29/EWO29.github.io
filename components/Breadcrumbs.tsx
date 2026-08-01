import Link from "next/link";

/** Одна крошка. Без href — значит это текущая страница, ссылка не нужна. */
export type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Навигация по каталогу" className="text-sm text-zinc-500">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-x-2">
            {index > 0 && <span className="text-zinc-300">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-brand-mid"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
