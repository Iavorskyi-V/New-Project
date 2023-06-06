import "./globals.css";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Header from "@/components/Header";
import { useTranslation } from "../i18n";
import Sidebar from "@/components/Sidebar";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wips-fe-web",
};

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        className={`${inter.className} flex h-screen overflow-hidden flex-col`}
      >
        <Header t={t} lng={lng} />
        <div className="mx-auto flex w-full h-full flex-grow items-start overflow-hidden">
          <Sidebar lng={lng} />
          <main className="bg-white w-full h-full overflow-y-auto overflow-x-hidden">
            <div className="w-[80%] mx-auto overflow-y-scroll overflow-x-hidden mb-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
