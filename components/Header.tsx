import Link from "next/link";

// Заглушки. Заменить на реальные данные компании перед демо.
const COMPANY = "ТрубДемо";
const CITY = "Москва";
const PHONE = "8 800 000-00-00";
const PHONE_HREF = "tel:+78000000000";
const EMAIL = "info@trubdemo.ru";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm text-zinc-600">
          <button
            type="button"
            className="text-left transition-colors hover:text-zinc-900"
          >
            Ваш город:{" "}
            <span className="font-medium text-zinc-900 underline decoration-dotted underline-offset-4">
              {CITY}
            </span>
          </button>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Пн—Пт 9:00—18:00</span>
            <a
              href={`mailto:${EMAIL}`}
              className="transition-colors hover:text-zinc-900"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group">
          <div className="text-xl font-semibold tracking-tight text-zinc-900">
            {COMPANY}
          </div>
          <div className="text-sm text-zinc-500">
            Металлопрокат и трубы оптом
          </div>
        </Link>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div>
            <a
              href={PHONE_HREF}
              className="block text-lg font-semibold tracking-tight text-zinc-900"
            >
              {PHONE}
            </a>
            <div className="text-xs text-zinc-500">
              Звонок по России бесплатный
            </div>
          </div>
          <button
            type="button"
            className="rounded bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
}
