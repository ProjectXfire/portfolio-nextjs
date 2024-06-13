// Components & Styles
import { FadeInContainer, Title } from '@/shared/components';
import { HeaderCategory, Hobbies, PersonalInfo, ResumeBlock } from '../../../_components';

function AboutMePage() {
  return (
    <FadeInContainer>
      <ResumeBlock>
        <HeaderCategory textLanguageKey='aboutme_text' titleLanguageKey='aboutme_title' />
        <PersonalInfo />
        <Hobbies />
      </ResumeBlock>
    </FadeInContainer>
  );
}
export default AboutMePage;
