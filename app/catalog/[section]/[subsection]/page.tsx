import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  allSubsectionParams,
  findSection,
  findSubsection,
} from "@/data/catalog";
import { pageTitle } from "@/data/company";

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; subsection: string }>;
}): Promise<Metadata> {
  const { section, subsection } = await params;
  const data = findSubsection(section, subsection);
  return data ? { title: pageTitle(data.name) } : {};
}

export function generateStaticParams() {
  return allSubsectionParams();
}

export default async function SubsectionPage({
  params,
}: {
  params: Promise<{ section: string; subsection: string }>;
}) {
  const { section, subsection } = await params;
  const sectionData = findSection(section);
  const data = findSubsection(section, subsection);
  if (!sectionData || !data) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: sectionData.name, href: `/catalog/${sectionData.slug}` },
          { label: data.name },
        ]}
      />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
        {data.name}
      </h1>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {data.groups.map((group) => (
          <li key={group.slug}>
            <Link
              href={`/catalog/${sectionData.slug}/${data.slug}/${group.slug}`}
              className="block rounded border border-zinc-200 p-5 transition-colors hover:border-brand"
            >
              <div className="font-medium text-zinc-900">
                {group.name} {group.gost}
              </div>
              <div className="mt-1 text-sm text-zinc-500">
                Типоразмеров: {group.products.length}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
