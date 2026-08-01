import Image from "next/image";
import Link from "next/link";

const COMPANY = "ЭМК ПрайМетХолдинг";
const CITY = "Екатеринбург";
const PHONE_FREE = "+7 800 250-03-23";
const PHONE_FREE_HREF = "tel:+78002500323";
const PHONE_CITY = "+7 343 287-77-34";
const PHONE_CITY_HREF = "tel:+73432877734";
const EMAIL = "emk-met@mail.ru";

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
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt={COMPANY}
            width={44}
            height={47}
            priority
            className="h-11 w-auto"
          />
          <div>
            <div className="text-xl font-semibold tracking-tight text-zinc-900">
              {COMPANY}
            </div>
            <div className="text-sm text-zinc-500">
              Металлопрокат и трубы оптом
            </div>
          </div>
        </Link>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div>
            <a
              href={PHONE_FREE_HREF}
              className="block text-lg font-semibold tracking-tight text-zinc-900"
            >
              {PHONE_FREE}
            </a>
            <a
              href={PHONE_CITY_HREF}
              className="block text-sm text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {PHONE_CITY}
            </a>
            <div className="mt-0.5 text-xs text-zinc-500">
              Звонок по России бесплатный
            </div>
          </div>
          <button
            type="button"
            className="rounded bg-brand-mid px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Заказать звонок
          </button>
        </div>
      </div>

      <div className="bg-brand-dark">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            href="/catalog"
            className="inline-block py-3.5 text-base font-medium text-white underline-offset-8 hover:underline"
          >
            Каталог
          </Link>
        </div>
      </div>
    </header>
  );
}
