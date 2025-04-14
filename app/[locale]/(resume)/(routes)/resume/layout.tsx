// Components & styles
import { FadeInContainer } from "@/shared/components";
import { InfoCategories, ResumeContainer } from "../../_components";

interface Props {
  children: React.ReactNode;
}

function ResumeLayout({ children }: Props): React.ReactElement {
  return (
    <FadeInContainer>
      <ResumeContainer>
        <InfoCategories />
        {children}
      </ResumeContainer>
    </FadeInContainer>
  );
}
export default ResumeLayout;
