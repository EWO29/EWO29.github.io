import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Собирать сайт в готовые файлы (папка out/) вместо запуска сервера.
  // Нужно для GitHub Pages: он умеет только отдавать файлы.
  output: "export",

  // Встроенная оптимизация картинок требует работающего сервера,
  // которого при статическом экспорте нет. Отдаём файлы как есть.
  images: { unoptimized: true },

  // Страницы кладутся папками с index.html вместо отдельных .html файлов.
  // Тогда адрес работает и с косой чертой в конце, и без неё.
  trailingSlash: true,
};

export default nextConfig;
