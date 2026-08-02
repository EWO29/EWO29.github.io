import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import RequestButton from "@/components/RequestButton";
import {
  allProductParams,
  findGroup,
  findProduct,
  findSection,
  findSubsection,
} from "@/data/catalog";
import { pageTitle } from "@/data/company";

export const dynamicParams = false;

// 13 элементов на входе — 13 страниц на выходе. Разметка ниже одна.
export function generateStaticParams() {
  return allProductParams();
}

// Четыре сегмента адреса нужны и странице, и функции метаданных.
// Объявляем форму один раз и переиспользуем.
type Params = Promise<{
  section: string;
  subsection: string;
  group: string;
  product: string;
}>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { section, subsection, group, product } = await params;
  const groupData = findGroup(section, subsection, group);
  const productData = findProduct(section, subsection, group, product);
  if (!groupData || !productData) return {};

  return {
    title: pageTitle(
      `${groupData.name} ${productData.diameter}×${productData.wall} ${groupData.gost}`,
    ),
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { section, subsection, group, product } = await params;
  const sectionData = findSection(section);
  const subsectionData = findSubsection(section, subsection);
  const groupData = findGroup(section, subsection, group);
  const data = findProduct(section, subsection, group, product);
  if (!sectionData || !subsectionData || !groupData || !data) notFound();

  const size = `${data.diameter}×${data.wall}`;
  const groupHref = `/catalog/${sectionData.slug}/${subsectionData.slug}/${groupData.slug}`;

  const specs = [
    { label: "Наружный диаметр", value: `${data.diameter} мм` },
    { label: "Толщина стенки", value: `${data.wall} мм` },
    { label: "Марка стали", value: data.steel },
    {
      label: "Масса 1 м",
      value: `${data.weightPerMeter.toLocaleString("ru-RU")} кг`,
    },
    { label: "Длина", value: data.length },
    { label: "Стандарт", value: groupData.gost },
  ];

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
          { label: `${groupData.name} ${groupData.gost}`, href: groupHref },
          { label: size },
        ]}
      />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
        {groupData.name} {size} {groupData.gost}
      </h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
            Характеристики
          </h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <tbody>
              {specs.map((spec) => (
                <tr key={spec.label} className="border-b border-zinc-200">
                  <td className="w-1/2 py-3 pr-4 text-zinc-500">
                    {spec.label}
                  </td>
                  <td className="py-3 font-medium text-zinc-900">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600">
            {groupData.description}
          </p>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded border border-zinc-200 p-6">
            <div className="text-sm text-zinc-500">Цена</div>
            <div className="mt-1 text-3xl font-semibold tracking-tight text-brand-dark">
              {data.pricePerTon.toLocaleString("ru-RU")} ₽
            </div>
            <div className="mt-1 text-sm text-zinc-500">за тонну</div>

            <RequestButton
              label="Запросить цену"
              title="Запросить цену"
              subject={`${groupData.name} ${size} ${groupData.gost}`}
              className="mt-6 w-full px-6 py-3"
            />

            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Отгрузка от одной тонны. Счёт выставляем по электронной почте
              после согласования объёма и сроков.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
