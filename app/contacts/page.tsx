import Breadcrumbs from "@/components/Breadcrumbs";
import RequestForm from "@/components/RequestForm";
import { COMPANY, pageTitle } from "@/data/company";

export const metadata = {
  title: pageTitle("Контакты"),
};

const DETAILS = [
  { label: "Телефон", value: COMPANY.phoneFree, href: COMPANY.phoneFreeHref },
  { label: "Телефон", value: COMPANY.phoneCity, href: COMPANY.phoneCityHref },
  { label: "Почта", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { label: "Город", value: COMPANY.city },
  { label: "Режим работы", value: COMPANY.workHours },
];

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Breadcrumbs
        items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
      />

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900">
        Контакты
      </h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <table className="w-full border-collapse text-sm">
            <tbody>
              {DETAILS.map((item) => (
                <tr
                  key={`${item.label}-${item.value}`}
                  className="border-b border-zinc-200"
                >
                  <td className="w-1/3 py-3 pr-4 text-zinc-500">
                    {item.label}
                  </td>
                  <td className="py-3 font-medium text-zinc-900">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="transition-colors hover:text-brand-mid"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-6 leading-relaxed text-zinc-600">
            Работаем с ООО, АО, ИП и другими организациями. Розничной продажи
            физическим лицам нет. Счёт выставляем на почту после согласования
            позиций, объёма и сроков отгрузки.
          </p>

          {/* TODO перед боевым запуском: юридический адрес, ИНН, ОГРН. */}
        </div>

        <div className="rounded border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
            Оставить заявку
          </h2>
          <p className="mt-1 mb-5 text-sm text-zinc-500">
            Перезвоним в рабочее время.
          </p>
          <RequestForm />
        </div>
      </div>
    </div>
  );
}
