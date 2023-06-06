import { useTranslation } from "../i18n";
interface HomeProps {
  params: {
    lng: string;
  };
}

export default async function Home({ params: { lng } }: HomeProps) {
  const { t } = await useTranslation(lng);

  return <div>Main part</div>;
}
