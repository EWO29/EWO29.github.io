import Link from "next/link";
import RequestButton from "@/components/RequestButton";
import { catalog } from "@/data/catalog";

// Тексты — заглушки. Заменить на реальные перед демо.
const FEATURES = [
  {
    title: "Отгрузка со склада",
    text: "Ходовые позиции в наличии, отгрузка в день оплаты.",
  },
  {
    title: "Резка в размер",
    text: "Порезка на мерные длины по спецификации заказчика.",
  },
  {
    title: "Только для юрлиц и ИП",
    text: "Работаем с ООО, АО, ИП и другими организациями. Розничной продажи физическим лицам нет.",
  },
  {
    title: "Доставка по России",
    text: "Автотранспортом и по железной дороге до объекта.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        Металлопрокат оптом со склада в Екатеринбурге
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
        Оптовая торговля чёрным, цветным и нержавеющим металлопрокатом.
        Производство металлоконструкций, поставка стройматериалов и
        электрооборудования.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/catalog"
          className="rounded bg-brand-mid px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Перейти в каталог
        </Link>
        <RequestButton
          label="Запросить прайс-лист"
          title="Запросить прайс-лист"
          variant="secondary"
          className="px-6 py-3"
        />
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {catalog.map((section) => (
          <Link
            key={section.slug}
            href={`/catalog/${section.slug}`}
            className="block rounded border border-zinc-200 p-5 transition-colors hover:border-brand"
          >
            <div className="font-medium text-zinc-900">{section.name}</div>
            <div className="mt-1 text-sm text-zinc-500">
              Подразделов: {section.subsections.length}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-8 border-t border-zinc-200 pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <div key={feature.title}>
            <div className="font-medium text-zinc-900">{feature.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
