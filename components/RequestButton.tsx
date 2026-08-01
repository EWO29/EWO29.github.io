"use client";

import { useRef, useState } from "react";
import RequestForm from "@/components/RequestForm";

export default function RequestButton({
  label,
  title,
  subject,
  variant = "primary",
  className = "",
}: {
  /** Надпись на кнопке */
  label: string;
  /** Заголовок модального окна */
  title: string;
  /** Название позиции, если пришли с карточки товара */
  subject?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  // Ссылка на сам элемент <dialog>: его надо открывать вызовом метода.
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  // Номер открытия. Меняется каждый раз — React пересоздаёт форму с нуля.
  // Не полагаемся на событие закрытия: оно приходит не во всех окружениях.
  const [formKey, setFormKey] = useState(0);

  function openDialog() {
    setFormKey((previous) => previous + 1);
    setOpen(true);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
    setOpen(false);
  }

  const base = "rounded px-5 py-2.5 text-sm font-medium transition-colors";
  const look =
    variant === "primary"
      ? "bg-brand-mid text-white hover:bg-brand-dark"
      : "border border-zinc-300 text-zinc-900 hover:border-brand hover:text-brand-mid";

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className={`${base} ${look} ${className}`}
      >
        {label}
      </button>

      <dialog
        ref={dialogRef}
        // Срабатывает и при закрытии по Esc — тогда состояние тоже надо сбросить.
        onClose={() => setOpen(false)}
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-lg p-0 backdrop:bg-black/50"
      >
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              {title}
            </h2>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Закрыть"
              className="text-2xl leading-none text-zinc-400 transition-colors hover:text-zinc-900"
            >
              ×
            </button>
          </div>

          <div className="mt-4">
            {open && (
              <RequestForm
                key={formKey}
                subject={subject}
                onClose={closeDialog}
              />
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
