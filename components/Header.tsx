import Image from "next/image";
import Link from "next/link";
import RequestButton from "@/components/RequestButton";
import { COMPANY } from "@/data/company";

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
              {COMPANY.city}
            </span>
          </button>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">{COMPANY.workHours}</span>
            <a
              href={`mailto:${COMPANY.email}`}
              className="transition-colors hover:text-zinc-900"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt={COMPANY.name}
            width={44}
            height={47}
            priority
            className="h-11 w-auto"
          />
          <div>
            <div className="text-xl font-semibold tracking-tight text-zinc-900">
              {COMPANY.name}
            </div>
            <div className="text-sm text-zinc-500">{COMPANY.tagline}</div>
          </div>
        </Link>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div>
            <a
              href={COMPANY.phoneFreeHref}
              className="block text-lg font-semibold tracking-tight text-zinc-900"
            >
              {COMPANY.phoneFree}
            </a>
            <a
              href={COMPANY.phoneCityHref}
              className="block text-sm text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {COMPANY.phoneCity}
            </a>
            <div className="mt-0.5 text-xs text-zinc-500">
              Звонок по России бесплатный
            </div>
          </div>
          <RequestButton label="Заказать звонок" title="Заказать звонок" />
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
