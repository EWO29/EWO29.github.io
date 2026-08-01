"use client";

import { useState } from "react";
import { COMPANY } from "@/data/company";

/** Тексты ошибок по полям. Знак ? — поля может не быть, если ошибки нет. */
type Errors = {
  name?: string;
  phone?: string;
  email?: string;
  consent?: string;
};

const inputClass =
  "mt-1 w-full rounded border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-brand-mid";

export default function RequestForm({
  subject,
  onClose,
}: {
  subject?: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const found: Errors = {};

    if (name.trim().length < 2) {
      found.name = "Укажите имя, не короче двух букв";
    }

    // Оставляем только цифры: \D — «любой символ, кроме цифры», g — «все такие».
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      found.phone = "Телефон должен содержать не меньше 10 цифр";
    }

    if (email.trim() !== "" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      found.email = "Проверьте адрес почты";
    }

    if (!consent) {
      found.consent = "Без согласия мы не можем принять заявку";
    }

    return found;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Отменяем поведение браузера по умолчанию — перезагрузку страницы.
    event.preventDefault();

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // ДЕМО: заявка никуда не отправляется.
    // Перед боевым запуском здесь должна быть реальная отправка.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          Заявка принята
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Свяжемся с вами в рабочее время: {COMPANY.workHours}. Если вопрос
          срочный — звоните {COMPANY.phoneFree}.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded bg-brand-mid px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Закрыть
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {subject && (
        <div className="mb-4 rounded bg-zinc-50 px-3 py-2 text-sm text-zinc-600">
          Позиция: <span className="text-zinc-900">{subject}</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="text-sm text-zinc-600">
          Имя <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={inputClass}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="phone" className="text-sm text-zinc-600">
          Телефон <span className="text-red-600">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className={inputClass}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="text-sm text-zinc-600">
          Почта
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={inputClass}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="comment" className="text-sm text-zinc-600">
          Комментарий
        </label>
        <textarea
          id="comment"
          rows={3}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Объём, сроки, требования к отгрузке"
          className={inputClass}
        />
      </div>

      <div className="mt-4">
        <label className="flex items-start gap-2 text-sm text-zinc-600">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-0.5"
          />
          <span>
            Согласен на обработку персональных данных{" "}
            <span className="text-red-600">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-sm text-red-600">{errors.consent}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded bg-brand-mid px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
      >
        Отправить заявку
      </button>

      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        Работаем с ООО, АО, ИП и другими организациями. Розничной продажи
        физическим лицам нет.
      </p>
    </form>
  );
}
