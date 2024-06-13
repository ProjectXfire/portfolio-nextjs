import { certificatesOrderByDate } from '@/shared/data';
// Components & Styles
import { FadeInContainer } from '@/shared/components';
import { CertificatesList, HeaderCategory, ResumeBlock } from '../../_components';

function ResumePage(): JSX.Element {
  return (
    <FadeInContainer>
      <ResumeBlock>
        <HeaderCategory textLanguageKey='education_text' titleLanguageKey='education_title' />
        <CertificatesList data={certificatesOrderByDate} />
      </ResumeBlock>
    </FadeInContainer>
  );
}
export default ResumePage;
