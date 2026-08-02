import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center">
      <div className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
        Ошибка 404
      </div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
        Страница не найдена
      </h1>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-zinc-600">
        Возможно, в адресе опечатка или страница была удалена. Позиции каталога
        доступны из общего списка.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/catalog"
          className="rounded bg-brand-mid px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Перейти в каталог
        </Link>
        <Link
          href="/"
          className="rounded border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:border-brand hover:text-brand-mid"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
