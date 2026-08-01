import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { catalog } from "@/data/catalog";

export const metadata = {
  title: "Каталог — ЭМК ПрайМетХолдинг",
};

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs
        items={[{ label: "Главная", href: "/" }, { label: "Каталог" }]}
      />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
        Каталог
      </h1>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {catalog.map((section) => (
          <li key={section.slug}>
            <Link
              href={`/catalog/${section.slug}`}
              className="block rounded border border-zinc-200 p-5 transition-colors hover:border-brand"
            >
              <div className="font-medium text-zinc-900">{section.name}</div>
              <div className="mt-1 text-sm text-zinc-500">
                Подразделов: {section.subsections.length}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
