// Данные каталога.
//
// Названия разделов и номера ГОСТов взяты с trubtekh.ru.
// Масса 1 м посчитана по формуле m = 0,02466 × s × (D − s)
// для плотности стали 7,85 г/см³, а не переписана на глаз.
//
// !!! ЦЕНЫ — ВЫДУМАННЫЕ ЗАГЛУШКИ. Поставить реальные перед демо. !!!
//
// В боевом проекте эти данные приезжали бы из 1С или из базы,
// а не лежали в файле. Механизм генерации страниц от этого не меняется.

/** Конкретный типоразмер трубы — отдельная страница товара. */
export type Product = {
  /** Кусок адреса страницы, например "57x4" */
  slug: string;
  /** Наружный диаметр, мм */
  diameter: number;
  /** Толщина стенки, мм */
  wall: number;
  /** Марка стали */
  steel: string;
  /** Масса 1 м, кг */
  weightPerMeter: number;
  /** Длина поставки */
  length: string;
  /** Примерная цена, ₽ за тонну */
  pricePerTon: number;
};

/** Уровень 3: группа товаров одного ГОСТа. */
export type ProductGroup = {
  slug: string;
  name: string;
  gost: string;
  description: string;
  products: Product[];
};

/** Уровень 2: подраздел. */
export type Subsection = {
  slug: string;
  name: string;
  groups: ProductGroup[];
};

/** Уровень 1: раздел каталога. */
export type Section = {
  slug: string;
  name: string;
  subsections: Subsection[];
};

export const catalog: Section[] = [
  {
    slug: "trubnyy-prokat",
    name: "Трубный прокат",
    subsections: [
      {
        slug: "besshovnye",
        name: "Трубы бесшовные",
        groups: [
          {
            slug: "goryachedeformirovannaya-gost-8732-78",
            name: "Труба горячедеформированная",
            gost: "ГОСТ 8732-78",
            description:
              "Бесшовные горячедеформированные трубы общего назначения. " +
              "Применяются в трубопроводах, металлоконструкциях и котельном " +
              "оборудовании. Поставляются немерной длиной, порезка в размер " +
              "по спецификации заказчика.",
            products: [
              {
                slug: "57x4",
                diameter: 57,
                wall: 4,
                steel: "20",
                weightPerMeter: 5.23,
                length: "немерная 4—12,5 м",
                pricePerTon: 112000,
              },
              {
                slug: "76x4",
                diameter: 76,
                wall: 4,
                steel: "20",
                weightPerMeter: 7.1,
                length: "немерная 4—12,5 м",
                pricePerTon: 108000,
              },
              {
                slug: "89x4",
                diameter: 89,
                wall: 4,
                steel: "20",
                weightPerMeter: 8.38,
                length: "немерная 4—12,5 м",
                pricePerTon: 105000,
              },
              {
                slug: "108x4",
                diameter: 108,
                wall: 4,
                steel: "20",
                weightPerMeter: 10.26,
                length: "немерная 4—12,5 м",
                pricePerTon: 103000,
              },
              {
                slug: "108x6",
                diameter: 108,
                wall: 6,
                steel: "20",
                weightPerMeter: 15.09,
                length: "немерная 4—12,5 м",
                pricePerTon: 101000,
              },
              {
                slug: "133x5",
                diameter: 133,
                wall: 5,
                steel: "20",
                weightPerMeter: 15.78,
                length: "немерная 4—12,5 м",
                pricePerTon: 99500,
              },
              {
                slug: "159x6",
                diameter: 159,
                wall: 6,
                steel: "20",
                weightPerMeter: 22.64,
                length: "немерная 4—12,5 м",
                pricePerTon: 97500,
              },
              {
                slug: "219x8",
                diameter: 219,
                wall: 8,
                steel: "20",
                weightPerMeter: 41.63,
                length: "немерная 4—12,5 м",
                pricePerTon: 95000,
              },
              {
                slug: "273x8",
                diameter: 273,
                wall: 8,
                steel: "09Г2С",
                weightPerMeter: 52.28,
                length: "немерная 4—12,5 м",
                pricePerTon: 98000,
              },
              {
                slug: "325x8",
                diameter: 325,
                wall: 8,
                steel: "09Г2С",
                weightPerMeter: 62.54,
                length: "немерная 4—12,5 м",
                pricePerTon: 96500,
              },
              {
                slug: "377x9",
                diameter: 377,
                wall: 9,
                steel: "09Г2С",
                weightPerMeter: 81.67,
                length: "немерная 4—12,5 м",
                pricePerTon: 98500,
              },
              {
                slug: "426x10",
                diameter: 426,
                wall: 10,
                steel: "09Г2С",
                weightPerMeter: 102.59,
                length: "немерная 4—12,5 м",
                pricePerTon: 100500,
              },
              {
                slug: "530x10",
                diameter: 530,
                wall: 10,
                steel: "09Г2С",
                weightPerMeter: 128.23,
                length: "немерная 4—12,5 м",
                pricePerTon: 103500,
              },
            ],
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Поиск по адресу страницы.
// Страница получает из адреса строку-slug и должна найти по ней свой кусок
// данных. Логика обхода написана здесь один раз, а не скопирована в пять файлов.
// ---------------------------------------------------------------------------

export function findSection(sectionSlug: string): Section | undefined {
  return catalog.find((section) => section.slug === sectionSlug);
}

export function findSubsection(
  sectionSlug: string,
  subsectionSlug: string,
): Subsection | undefined {
  return findSection(sectionSlug)?.subsections.find(
    (subsection) => subsection.slug === subsectionSlug,
  );
}

export function findGroup(
  sectionSlug: string,
  subsectionSlug: string,
  groupSlug: string,
): ProductGroup | undefined {
  return findSubsection(sectionSlug, subsectionSlug)?.groups.find(
    (group) => group.slug === groupSlug,
  );
}

export function findProduct(
  sectionSlug: string,
  subsectionSlug: string,
  groupSlug: string,
  productSlug: string,
): Product | undefined {
  return findGroup(sectionSlug, subsectionSlug, groupSlug)?.products.find(
    (product) => product.slug === productSlug,
  );
}

// ---------------------------------------------------------------------------
// Списки адресов для generateStaticParams: по ним Next строит страницы.
// ---------------------------------------------------------------------------

export function allSectionParams() {
  return catalog.map((section) => ({ section: section.slug }));
}

export function allSubsectionParams() {
  return catalog.flatMap((section) =>
    section.subsections.map((subsection) => ({
      section: section.slug,
      subsection: subsection.slug,
    })),
  );
}

export function allGroupParams() {
  return catalog.flatMap((section) =>
    section.subsections.flatMap((subsection) =>
      subsection.groups.map((group) => ({
        section: section.slug,
        subsection: subsection.slug,
        group: group.slug,
      })),
    ),
  );
}

export function allProductParams() {
  return catalog.flatMap((section) =>
    section.subsections.flatMap((subsection) =>
      subsection.groups.flatMap((group) =>
        group.products.map((product) => ({
          section: section.slug,
          subsection: subsection.slug,
          group: group.slug,
          product: product.slug,
        })),
      ),
    ),
  );
}
