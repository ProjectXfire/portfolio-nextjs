"use client";

import { useRouter } from "@/i18n/navigation";
// Components & Styles
import { Globe } from "lucide-react";
import Menu from "../menu/Menu";

function Language(): React.ReactElement {
  const router = useRouter();

  const toggleLanguage = (locale: string) => {
    router.replace("/", { locale });
    router.refresh();
  };

  return (
    <Menu
      menuHeader={
        <>
          <Globe />
        </>
      }
      items={[
        { value: "es", label: "ES" },
        { value: "en", label: "EN" },
      ]}
      onSelect={toggleLanguage}
    />
  );
}
export default Language;
