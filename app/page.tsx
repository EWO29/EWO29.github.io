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
    title: "Работа по договору",
    text: "Юридическим лицам, с НДС, полный пакет документов.",
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
        Трубы и металлопрокат оптом со склада
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
        Поставляем стальные, профильные и водогазопроводные трубы. Отгрузка от
        одной тонны, резка в размер, доставка по России.
      </p>
      <button
        type="button"
        className="mt-8 rounded bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
      >
        Запросить прайс-лист
      </button>

      {/* Временная заглушка. Заменить на каталог, когда появится файл данных. */}
      <div className="mt-12 rounded border-2 border-dashed border-zinc-300 px-6 py-12 text-center">
        <div className="font-medium text-zinc-500">Здесь будет каталог</div>
        <div className="mt-1 text-sm text-zinc-400">
          Ветка категорий на три уровня, позиции из файла данных
        </div>
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
