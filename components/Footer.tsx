import { COMPANY } from "@/data/company";

// Год вычисляется при сборке и «замерзает» до следующей публикации.
// Нас это устраивает: сайт пересобирается при каждом пуше.
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="text-lg font-semibold tracking-tight">
            {COMPANY.name}
          </div>
          <div className="mt-1 text-sm text-white/60">{COMPANY.tagline}</div>
        </div>

        <div>
          <div className="text-sm font-medium tracking-wide text-white/50 uppercase">
            Контакты
          </div>
          <div className="mt-3 space-y-1 text-sm">
            <div>
              <a
                href={COMPANY.phoneFreeHref}
                className="transition-colors hover:text-brand"
              >
                {COMPANY.phoneFree}
              </a>
              <span className="text-white/50"> — бесплатный</span>
            </div>
            <div>
              <a
                href={COMPANY.phoneCityHref}
                className="transition-colors hover:text-brand"
              >
                {COMPANY.phoneCity}
              </a>
            </div>
            <div>
              <a
                href={`mailto:${COMPANY.email}`}
                className="transition-colors hover:text-brand"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm font-medium tracking-wide text-white/50 uppercase">
            Режим работы
          </div>
          <div className="mt-3 text-sm">{COMPANY.workHours}</div>
          <div className="mt-1 text-sm text-white/60">{COMPANY.city}</div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/50">
          <p>
            Информация на сайте носит справочный характер и не является
            публичной офертой. Отпуск товара только юридическим лицам и
            индивидуальным предпринимателям.
          </p>
          <p className="mt-2">
            © {YEAR} {COMPANY.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
