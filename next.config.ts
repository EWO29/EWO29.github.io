import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Собирать сайт в готовые файлы (папка out/) вместо запуска сервера.
  // Нужно для GitHub Pages: он умеет только отдавать файлы.
  output: "export",
};

export default nextConfig;
