import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { allSectionParams, findSection } from "@/data/catalog";

// Обслуживаем только те адреса, которые перечислены ниже.
export const dynamicParams = false;

// Next вызывает это при сборке и строит по странице на каждый элемент списка.
export function generateStaticParams() {
  return allSectionParams();
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = findSection(section);
  if (!data) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: data.name },
        ]}
      />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
        {data.name}
      </h1>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {data.subsections.map((subsection) => (
          <li key={subsection.slug}>
            <Link
              href={`/catalog/${data.slug}/${subsection.slug}`}
              className="block rounded border border-zinc-200 p-5 transition-colors hover:border-brand"
            >
              <div className="font-medium text-zinc-900">{subsection.name}</div>
              <div className="mt-1 text-sm text-zinc-500">
                Групп товаров: {subsection.groups.length}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
