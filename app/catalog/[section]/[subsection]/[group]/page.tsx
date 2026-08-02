import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  allGroupParams,
  findGroup,
  findSection,
  findSubsection,
} from "@/data/catalog";
import { pageTitle } from "@/data/company";

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; subsection: string; group: string }>;
}): Promise<Metadata> {
  const { section, subsection, group } = await params;
  const data = findGroup(section, subsection, group);
  return data ? { title: pageTitle(`${data.name} ${data.gost}`) } : {};
}

export function generateStaticParams() {
  return allGroupParams();
}

export default async function GroupPage({
  params,
}: {
  params: Promise<{ section: string; subsection: string; group: string }>;
}) {
  const { section, subsection, group } = await params;
  const sectionData = findSection(section);
  const subsectionData = findSubsection(section, subsection);
  const data = findGroup(section, subsection, group);
  if (!sectionData || !subsectionData || !data) notFound();

  const base = `/catalog/${sectionData.slug}/${subsectionData.slug}/${data.slug}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: sectionData.name, href: `/catalog/${sectionData.slug}` },
          {
            label: subsectionData.name,
            href: `/catalog/${sectionData.slug}/${subsectionData.slug}`,
          },
          { label: `${data.name} ${data.gost}` },
        ]}
      />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
        {data.name} {data.gost}
      </h1>

      <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600">
        {data.description}
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-lg border-collapse text-sm">
          <thead>
            <tr className="border-b border-zinc-300 text-left text-zinc-500">
              <th className="py-3 pr-4 font-medium">Типоразмер</th>
              <th className="py-3 pr-4 font-medium">Марка стали</th>
              <th className="py-3 pr-4 font-medium">Масса 1 м, кг</th>
              <th className="py-3 pr-4 font-medium">Цена, ₽/т</th>
              <th className="py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((product) => (
              <tr
                key={product.slug}
                className="border-b border-zinc-200 transition-colors hover:bg-zinc-50"
              >
                <td className="py-3 pr-4 font-medium text-zinc-900">
                  {product.diameter}×{product.wall}
                </td>
                <td className="py-3 pr-4 text-zinc-600">{product.steel}</td>
                <td className="py-3 pr-4 text-zinc-600">
                  {product.weightPerMeter.toLocaleString("ru-RU")}
                </td>
                <td className="py-3 pr-4 text-zinc-900">
                  {product.pricePerTon.toLocaleString("ru-RU")}
                </td>
                <td className="py-3">
                  <Link
                    href={`${base}/${product.slug}`}
                    className="font-medium text-brand-mid underline underline-offset-4 transition-colors hover:text-brand"
                  >
                    Подробнее
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
