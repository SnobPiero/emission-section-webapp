import { getDictionary } from "@intl/get-dictionary";
import type { Locale } from "@intl/i18n-config";

import Header from "../components/layout/header/Header";
import styles from "./page.module.scss";
import EmissionSection from "./sections/emissions/Emissions";
// import CreateBadgeInfo from "./sections/create-badge-info/create-badge-info";
// import ExplanationSection from "./sections/explanation/Explanation";
// import FeatureListInfo from "./sections/feature-list-info/feature-list-info";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} />
      <main className={styles.main}>
        <EmissionSection dictionary={dictionary.home.sections.emissions} />

        {/* <CreateBadgeInfo dictionary={dictionary.home.sections.info} /> */}
        {/* <FeatureListInfo dictionary={dictionary.home.sections.features} /> */}
        {/* <ExplanationSection dictionary={dictionary.home.sections.explanation} /> */}
      </main>
    </>
  );
}
