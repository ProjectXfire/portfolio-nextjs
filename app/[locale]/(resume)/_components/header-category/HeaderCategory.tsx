import { useTranslations } from "next-intl";
// Components & Styles
import { CustomText, Title } from "@/shared/components";

interface Props {
  titleLanguageKey: string;
  textLanguageKey: string;
}

function HeaderCategory({ textLanguageKey, titleLanguageKey }: Props): React.ReactElement {
  const t = useTranslations("resume");

  return (
    <>
      <Title text={t(titleLanguageKey)} size="medium" />
      <CustomText text={t(textLanguageKey)} textStyles={{ fontSize: "1.2rem" }} />
    </>
  );
}
export default HeaderCategory;
